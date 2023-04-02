<script setup lang="ts">
/*--------------------------------------------------------------------------------------------
  Imports and variables
-------------------------------------------------------------------*/
// Import the functions you need from the SDKs you need
import { User } from "firebase/auth";
import { ref, defineProps, computed, withDefaults, Ref, watch } from "vue"
import { useRoute, RouteLocationNormalized } from 'vue-router';
import 'firebase/firestore';
import {collection, addDoc, DocumentReference, DocumentSnapshot, setDoc, doc, getDoc, getDocs, CollectionReference, query, collectionGroup, QuerySnapshot, where, QueryDocumentSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/init.js'

const dt = new Date();

const dt_string = dt.toLocaleString();


// define the type for the current route object
interface CurrentRoute extends RouteLocationNormalized {
  query: {
    email?: string;
  };
}
const route = useRoute() as CurrentRoute;
const email = route.query.email;

const userUid = ref('');
let usId = "";
let newUserUid = "";
let numGames: number = 0;
let gameCount: number = 1;

async function logUserUid() {
  await new Promise<void>((resolve) => {
    watch(userUid, (newValue, oldValue) => {
      console.log(`userUid changed from ${oldValue} to ${newValue}`);
      newUserUid = newValue;
      resolve();
    });
  });

  console.log(`New userUid value: ${newUserUid}`);
}

function setUserId(user: User | null) {
  if (user) {
    userUid.value = user.uid;
    usId = user.uid;
  } else {
    userUid.value = '';
    usId = '';
  }
}

auth.onAuthStateChanged(setUserId);
logUserUid();
console.log(`New value ${newUserUid}`)
 
const userWords: Ref<string[]> = ref(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
const letterColor: Ref<string[]> = ref(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
const words: string[] = ['amber', 'brave', 'catch', 'dream', 'earth', 'flair', 'gloom', 'happy', 'image', 'juice', 'knack', 'latch', 'birth', 'notch', 'olive', 'peace', 'quirk', 'route', 'shrug', 'toast'];
let userGuesses: string[] = ["", "", "", "", "", ""];

type TimerProp = {
  updateInterval: number,
  startLabel: string,
  faceColor: string
}

const props = withDefaults(defineProps<TimerProp>(), {
    updateInterval: 1000,
    startLabel: "Start",
    faceColor: "transparent"
});

const seconds = ref(0);
const minutes = ref(0);

let checks: number = 0;
let congrats: boolean = false;
let gameover: boolean = false;
let secretWord: string = words[Math.floor(Math.random() * words.length)];
let myTimer: Ref<number | null> = ref(null);
let executed = false;
let cts = false;

/* Firebase passing stuff */
const gs = doc(db, 'gameStats/user')
// const wordsColl = doc(db, 'wordleWords/words')
let docData: {
    date: string;
    gameNum: number;
    gameWin: string;
    time: number;
    word: string;
    guesses: Array<string>;
  }

const ww: {
  lst: Array<string>;
} = {
  lst: words
}


/* Updates existing document */
async function setFire(coll: DocumentReference, data: any) {
  try {
  await setDoc(coll, data);
  // await addDoc(collection(coll, email as string), data)
   console.log("Successful addition!");
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
}

/* Adds a new document */
async function addFire(coll: DocumentReference, data: any) {
  try {
  await addDoc(collection(coll, `${newUserUid}`), data)
   console.log("Successful addition!");
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
}


const gameStatsRef = collection(db, "gameStats");

getDocs(gameStatsRef).then((gameStatsSnapshot) => {
  const gameStatsPromises = gameStatsSnapshot.docs.map((gameStatDoc) => {
    const newUserIdRef = collection(gameStatDoc.ref, newUserUid);
    return getDocs(newUserIdRef).then((newUserIdSnapshot) => {
      const newUserIdData = newUserIdSnapshot.docs.map((newUserIdDoc) => {
        return { ...newUserIdDoc.data(), id: newUserIdDoc.id };
      });
      return { ...gameStatDoc.data(), id: gameStatDoc.id, newUserId: newUserIdData };
    });
  });
  return Promise.all(gameStatsPromises);
})
.then((gameStatsData) => {
  const newUserIdArray = gameStatsData.map((data) => data.newUserId);
  console.log(gameStatsData);
  if ('word' in newUserIdArray[0][0]) {
    console.log(newUserIdArray[0][0].word); //Code to get 'word' from document.
  }
  console.log(newUserIdArray[0].length as number);
  numGames = newUserIdArray[0].length as number //Code to get number of documents in subcollection (USE FOR GAME NUMBER)
})
.catch((err) => {
  console.log(err.message);
});
/*THIS WORKS DO NOT GET RID OF ANY OF THIS*/
// const colRef = collection(db, "gameStats")
// // const idRef = collection(db, newUserUid)



// getDocs(colRef)
//   .then((snapshot) => {
//     let arr: any[] = [];
//     snapshot.docs.forEach((doc) => {
//       arr.push({ ...doc.data(), id: doc.id })
//     })

//     console.log(arr[0]);
// }).catch(err => {
//   console.log(err.message)
// })
/*THIS WORKS DO NOT GET RID OF ANY OF THIS*/

/*--------------------------------------------------------------------------------------------
  The initTimer() method runs the timer once when the web
  application starts up.
-------------------------------------------------------------------*/
function initTimer() {
  if (executed == false) {
    runTimer();
    executed = true;
  }
}
initTimer();

/*--------------------------------------------------------------------------------------------
  The newGame() method initializes the next Wordle game.
    ~ The timer gets reset and restarted
    ~ A new secret word gets set
    ~ All cells get reset
    ~ Game over/win conditions reset
-------------------------------------------------------------------*/
function newGame() {
  pauseTimer();
  runTimer();
  secretWord = words[Math.floor(Math.random() * words.length)];
  congrats = false;
  gameover = false;
  cts = false;
  checks = 0;
  seconds.value = 0;
  minutes.value = 0;
  userWords.value.splice(0)
  letterColor.value.splice(0)
  for (let i = 0; i < 30; i++) {
    userWords.value.push("");
    letterColor.value.push("");
  }
}

/*--------------------------------------------------------------------------------------------
  The checkAnswer() method is a word matching algorithm with built-in checks for
  duplicate letters.
-------------------------------------------------------------------*/
function checkAnswer() {
  // const secretWord = "dolly" //test word
  const cellLoc = 5 * checks;
  let index = -1;
  let tempArray: Array<string> = [];

  // Initializes the temporary array with the secret word separated by each individual character
  for (let i = 0; i < 5; i++) {
    // When a blank space exists in row, the user will not be able to check their results
    if (userWords.value[i + cellLoc] == "") {
      return;
    }
    tempArray.push(secretWord.charAt(i));
  }

  for (let i = 0; i < 5; i++) {
    // Checks if there is a correct letter in the correct location
    if (userWords.value[i + cellLoc].toLowerCase() == secretWord.charAt(i) && tempArray.includes(userWords.value[i + cellLoc].toLowerCase())) {
      letterColor.value[i + cellLoc] = "G" // Correct letter, correct location
      // Checks for duplicate letters in a word
      for (let j = 0; j < 5; j++) {
        if (tempArray[j] == userWords.value[i + cellLoc].toLowerCase()) {
          tempArray.splice(j, 1);
          break;
        }
      }
    // Checks if there is a correct letter in the wrong location
    } else if (secretWord.charAt(i) != userWords.value[i + cellLoc] && tempArray.includes(userWords.value[i + cellLoc].toLowerCase())) {
      letterColor.value[i + cellLoc] = "Y" // Correct letter, wrong location
      // Checks for duplicate letters in a word
      for (let j = 0; j < 5; j++) {
        if (tempArray[j] == userWords.value[i + cellLoc].toLowerCase()) {
          tempArray.splice(j, 1);
          break;
        }
      }
    // Sets color of cell with the wrong letter
    } else {
      letterColor.value[i + cellLoc] = "B"; // Wrong letter
    }
  }
  
  // After 6 guesses, the player loses
  checks += 1;

  // Checks if player won 
  checkWin();

  if (checks == 6 && !congrats) {
    if (cts == false) {
      userGuesses = convertToStr(userWords.value, checks);  
      cts = true;
    }
    docData = {
      date: dt_string,
      gameNum: numGames + gameCount,
      gameWin: 'Lost',
      time: (seconds.value+(minutes.value*60)),
      word: secretWord,
      guesses: userGuesses
    };
    gameCount = gameCount + 1;
    console.log(gameCount, " At Lose!")
      
    addFire(gs, docData);
    gameover = true;
    pauseTimer();
  }
}

/*--------------------------------------------------------------------------------------------
  The checkWin() method verifies if the user got the correct answer
  before using up all of the guesses
-------------------------------------------------------------------*/
function checkWin() {
  let numFound = 0;
  let countInst = 0;
  // Checks grid to see if player has won yet.
  for (let i = 0; i < 30; i++) {
    if (letterColor.value[i] == "G") {
      numFound++;
    }
    // Player wins when five letters in a row are correct.
    if (numFound == 5) {
      countInst += 1;
      if (cts == false) {
        userGuesses = convertToStr(userWords.value, checks);
        cts = true;
        win();
      }
    // Checks next row
    } else if ((i + 1) % 5 == 0) {
      numFound = 0;
    }
  }
}

/*--------------------------------------------------------------------------------------------
  The converToStr() method converts the array of letters to strings in an array
-------------------------------------------------------------------*/
function convertToStr(words: string[], g: number): string[] {
  const sixStrings: string[] = [];
  const nl = 6 - g;
  for (let i = 0; i < g; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
      str += words[i * 5 + j];
    }
    sixStrings.push(str);
  }
  for (let i = 0; i < nl; i++) {
    sixStrings.push("");
  }
  return sixStrings;
}
/*--------------------------------------------------------------------------------------------
  The win() method allows congratulations screen to display and
  pauses timer.
-------------------------------------------------------------------*/
function win() {
  docData = {
    date: dt_string,
    gameNum: numGames + gameCount,
    gameWin: 'Won',
    time: (seconds.value+(minutes.value*60)),
    word: secretWord,
    guesses: userGuesses
  };
  gameCount += 1;
  console.log(gameCount, " At Win!")
  addFire(gs, docData);
  congrats = true;
  pauseTimer();
}

/********************************************************************************
  Functions for timer:
    ~ Credit: Professor Dulimarta
***************************************************************/
function twoDigitSeconds() {
  return seconds.value.toLocaleString('en-US', { minimumIntegerDigits: 2 })
}

function updateTime() {
  seconds.value++;
  if (seconds.value === 60) {
    minutes.value++
    seconds.value = 0
  }
}

function runTimer() {
  // Updates the time once every second (1000 milliseconds)
  (myTimer.value as any) = setInterval(updateTime, props.updateInterval)
}


function pauseTimer() {
  if (myTimer.value !== null) {
    clearInterval(myTimer.value)
    myTimer.value = null
  }
}

const customStyle = computed(() => {
  return {
    backgroundColor: props.faceColor,
  }
})
/* End of Professor Dulimarta's logic */
</script>

<template>
  <h>
    <div id="grid">
      <p v-for="(w, pos) in userWords" v-bind:key="pos">
        <input class="cell" v-if="letterColor[pos] == '' " v-model="userWords[pos]" />
        <input class="cell" id="wrong" v-else-if="letterColor[pos] == 'B'" v-model="userWords[pos]" />
        <input class="cell" id="right" v-else-if="letterColor[pos] == 'G'" v-model="userWords[pos]" />
        <input class="cell" id="misplaced" v-else-if="letterColor[pos] == 'Y'" v-model="userWords[pos]" />
      </p>
    </div>
  </h>
  <p>
    <h v-if="congrats" style="color: black;">
      <h1> 🎊 Congratulations! You Win! 🎊 </h1>
      <h2> Tap the 'New Game' button to play again! </h2>
    </h>
    <h v-else-if="gameover" style="color: black;">
      <h1> 😔 Game Over! No more guesses left! 😔 </h1>
      <h2> The word was '{{ secretWord }}' </h2>
      <h2> Tap the 'New Game' button to play again! </h2>
    </h>
  </p>
  <div id="timers">
    <div id="timer" :style="customStyle">
      <div id="timedisplay">
        {{ minutes }}:{{ twoDigitSeconds() }}
      </div>
    </div>
  </div>
  <br>
  <div class="buttons">
    <button @click="newGame"> New Game </button>
    <button v-if="!congrats && !gameover" @click="checkAnswer"> Check Answer </button>
  </div>
  <br>
  <div class="report">
    <h style="font-size: 100px;"> <b>Report:</b> </h>
    <h5>
      Our word matching function first checks that the user has entered a
      complete five-letter word. Then it creates a temporary array with the
      letters of the secret word to check for duplicate letters in the user's
      word.
      It then loops through each letter in the user's word and compares it to
      the corresponding letter in the secret word. If the letters match and
      the letter is in the correct position, it assigns the "G" color code.
      If the letters match but are in the wrong position, it assigns the "Y"
      color code. If the letters do not match, it assigns the "B" color code.
      If the user's word contains a letter that is in the secret word, the function
      removes that letter from the temporary array to avoid counting it twice in
      the color codes.
    </h5>
    <h5>
      In this Vue3 template, a grid of input cells is displayed using an
      inline-grid layout with six rows and five columns. The "v-for" directive
      is used to iterate through the "userWords" array and display an input
      field for each element. The "v-model" directive is used to bind the
      input field to the corresponding element of the "userWords" array.

      Conditional rendering is used to change the background color of the
      input field based on the value of the "letterColor" array. Four different
      classes are defined in the "style" section, each with a different background
      color: black for the default cell, grey for a wrong letter, green for a
      correct letter in the right spot, and yellow for a correct letter in the
      wrong spot.
    </h5>
  </div>
  <router-view />
</template>  

<style scoped>
/* @import url('../style.css'); */
#grid {
   display: inline-grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(6, 1fr);
   grid-gap: 8px;
 }

 .cell {
   text-transform: uppercase;
   text-align: center;
   width: 100px;
   height: 100px;
   align-self: center;
   font-size: 100px;
   border: 5px solid black;
   color: black;
   background-color: white;
 }

 .report {
   background-color: darkseagreen;
   padding: 7px;
   font-size: 20px;
   border: 5px dashed black;
   color: black;
 }

 #wrong {
   background-color: grey;
 }

 #right {
   background-color: green;
 }

 #misplaced {
   background-color: rgb(186, 186, 3);
 }

 .buttons {
   display: flex;
   align-items: center;
   justify-content: center;
   grid-gap: 8px;
 }

 #timer {
   display: inline-block;
   border: 5px solid brown;
   border-radius: 8px;
   width: 120px;
   text-align: center;
   padding-bottom: 3px;
   color: black;
 }

 #timedisplay {
   font-size: 280%;
 }
</style>