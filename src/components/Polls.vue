<script setup lang="ts">
/*--------------------------------------------------------------------------------------------
  Imports and variables
-------------------------------------------------------------------*/
// Import the functions you need from the SDKs you need
import { User } from "firebase/auth";
import { ref, defineProps, computed, withDefaults, Ref, watch } from "vue"
import { useRoute, RouteLocationNormalized } from 'vue-router';
import 'firebase/firestore';
import { collection, addDoc, updateDoc, DocumentReference, DocumentSnapshot, setDoc, doc, getDoc, getDocs, CollectionReference, query, collectionGroup, QuerySnapshot, where, QueryDocumentSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/init.js'
import { stringLength } from "@firebase/util";

const dt = new Date();
const dt_string = dt.toLocaleString();
/* Firebase passing stuff */
const pollPublic = doc(db, 'polls/public')
// const wordsColl = doc(db, 'wordleWords/words')

let pollDataPublic: {
  pollQuestion: string;
  pollChoices: Array<string>;
  votes: Array<number>;
  date: string;
  genre: string;
} = {
  pollQuestion: "",
  pollChoices: ["", "", "", ""],
  votes: [0, 0, 0, 0],
  date: "",
  genre: ""
}

let prData: {
    firstName: string;
    lastName: string;
    created: Array<string>;
    responded: Array<string>;
    favorited: Array<string>;
}


// define the type for the current route object
interface CurrentRoute extends RouteLocationNormalized {
  query: {
    email?: string;
  };
}
const route = useRoute() as CurrentRoute;
const email = route.query.email;

const userUid = ref('');
const userEmail = ref('');
let usId = "";
let newUserUid = "";
let newUserEmail = "";
let pollQ = ref("");
let pollC = ref(["", "", "", ""]);
const genres = ["Music", "Pop Culture", "Food", "Sports", "Random"]
let filterGenre = ref ("");
let selectedGenre = ref("");
let createPoll = ref(1);
let option3 = ref(1);
let option4 = ref(1);
let numPolls: number = 0;
let pollCount: number = 1;

const isLoggedIn = ref(true)
// runs after firebase is initialized
auth.onAuthStateChanged(function (user: User | null) {
  if (user) {
    isLoggedIn.value = true // if we have a user
    userUid.value = user.uid; // store the user UID in the ref
    console.log(`User UID: ${userUid.value}`);
  } else {
    isLoggedIn.value = false // if we do not
    userUid.value = ''; // clear the user UID ref
  }
})

async function logUserUid() {
  await new Promise<void>((resolve) => {
    watch(userEmail, (newValue, oldValue) => {
      console.log(`userEmail changed from ${oldValue} to ${newValue}`);
      newUserEmail = newValue;
      resolve();
    });
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
    userEmail.value = user.email || '';
  } else {
    userUid.value = '';
    userEmail.value = '';
    usId = '';
  }
}

async function setFire(coll: DocumentReference, data: any) {
  try {
    await setDoc(coll, data);
    console.log("Successful addition!");
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
}
// async function setFireUser(coll: DocumentReference, data: any) {
//         try {
//         await setDoc(coll, data);
//             // await addDoc(collection(coll, email as string), data)
//             console.log("Successful addition!");
//         } catch (error) {
//             console.log(`I got an error! ${error}`);
//         }
//     }

/* Adds a new document */
async function addFireUser(coll: DocumentReference, data: any) {
  try {
    await addDoc(collection(coll, `${newUserUid}`), data)
    console.log("Successful addition!");
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
}

/* Adds a new document */
async function addFirePublic(coll: DocumentReference, data: any) {
  try {
    await addDoc(collection(coll, "allPolls"), data)
    console.log("Successful addition!");
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
}


const pollsPublicRef = collection(db, "polls/public/allPolls"); // Update collection reference to "allPolls"
interface PollData {
  id: string
}[];

let publicPollData = ref<PollData[]>([]);

getDocs(pollsPublicRef).then((pollsSnapshot) => {
  const pollsPromises = pollsSnapshot.docs.map((pollsDoc) => {
    // Remove nested query for "newUserID"
    return { ...pollsDoc.data(), id: pollsDoc.id };
  });
  return Promise.all(pollsPromises);
})
  .then((pData) => {
    console.log(pData);

    for (let i = 0; i < pData.length; i++) {
      publicPollData.value[i] = pData[i]
    }

    // Access data from "allPolls" collection directly
    if ('date' in pData[0]) {
      console.log("PUBLIC DATE:", pData[0].date); // Code to get 'date' from document
    }
    numPolls = pData.length; // Code to get number of documents in "allPolls" subcollection
    console.log(numPolls); // Code to get 'date' from document
  })
  .catch((err) => {
    console.log(err.message);
  });


// /* WORKING CODE FOR PULLING FROM POLLS/USER */
// const pollsUserRef = collection(db, "polls");
// getDocs(pollsUserRef).then((pollsSnapshot) => {
//   const pollsPromises = pollsSnapshot.docs.map((pollsDoc) => {
//     const newUserIdRef = collection(pollsDoc.ref, newUserUid);
//     return getDocs(newUserIdRef).then((newUserIdSnapshot) => {
//       const newUserIdData = newUserIdSnapshot.docs.map((newUserIdDoc) => {
//         return { ...newUserIdDoc.data(), id: newUserIdDoc.id };
//       });
//       return { ...pollsDoc.data(), id: pollsDoc.id, newUserId: newUserIdData };
//     });
//   });
//   return Promise.all(pollsPromises);
// })
//   .then((pData) => {
//     const newUserIdArray = pData.map((data) => data.newUserId);
//     console.log(pData);
//     if ('date' in newUserIdArray[0][0]) {
//       console.log("USER DATE: ", newUserIdArray[0][0].date); //Code to get 'word' from document.
//     }
//     //   console.log(newUserIdArray[0].length as number);
//     numPolls = newUserIdArray[0].length as number //Code to get number of documents in subcollection (USE FOR GAME NUMBER)
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


auth.onAuthStateChanged(setUserId);
logUserUid();
console.log(`New value ${newUserUid}`)

function plus() {
  createPoll.value = 3 - createPoll.value;
  pollQ.value = "";
  pollC.value = ["", "", "", ""];
  pollDataPublic.pollQuestion = "";
  pollDataPublic.pollChoices = ["", "", "", ""];
  option3.value = 1;
  option4.value = 1;
  selectedGenre.value = "";
}

function op3() {
  option3.value = 3 - option3.value;
  if (option3.value == 1) {
    pollC.value[2] = "";
  }
  if (option4.value == 2 && option3.value == 1) {
    pollC.value[2] = pollC.value[3];
    pollC.value[3] = "";
    option3.value = 2;
    option4.value = 1;
  }
}

function op4() {
  option4.value = 3 - option4.value;
  if (option4.value == 1) {
    pollC.value[3] = "";
  }
}

async function post() {
  createPoll.value = 3 - createPoll.value;
  option3.value = 1;
  option4.value = 1;
  pollDataPublic.date = dt_string;
  pollDataPublic.pollQuestion = pollQ.value;
  pollCount = pollCount + 1;
  for (let i = 0; i < pollC.value.length; i++) {
    pollDataPublic.pollChoices[i] = pollC.value[i]
  }
  pollDataPublic.genre = selectedGenre.value;

  // Wait for promise to resolve before reloading the page
  await Promise.all([
    addFirePublic(pollPublic, pollDataPublic),
  ]);
  window.location.reload();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// async function delete(pollID: string, index: number) {
//   const pollRef = doc(db, "polls/public/allPolls", pollID);
//   const pollDoc = await getDoc(pollRef);

//   if (pollDoc.exists()) {
//     const pollData = pollDoc.data();
//     if (pollData) {
//       pollData.votes[index]++;
//       await updateDoc(pollRef, pollData);
//     }
//   }
// }

async function optionsClick(pollID: string, index: number) {
  const allPollRef = doc(db, "polls/public/allPolls", pollID);
  const profRef = doc(db, "profile", newUserEmail);
  const allPollDoc = await getDoc(allPollRef);
  const profDoc = await getDoc(profRef);

  if (allPollDoc.exists() && profDoc.exists()) {
    const allPollData = allPollDoc.data();
    const profData = profDoc.data();
    if (allPollData && profData) {
        if (!profData.responded.includes(pollID)) {
            allPollData.votes[index]++;
            profData.responded.push(pollID);
            await updateDoc(allPollRef, allPollData);
            await updateDoc(profRef, profData);
        }
    }
  }
}

async function toggleFavorite(pollID: string, index: number) {
    const pollRef = doc(db, "profile", newUserEmail);
    const pollDoc = await getDoc(pollRef);

    if (pollDoc.exists()) {
        const pollData = pollDoc.data();
        if (pollData) {
            if (!pollData.favorited.includes(pollID)) {
                pollData.favorited.push(pollID);
                await updateDoc(pollRef, pollData);
            } else {
                pollData.favorited = pollData.favorited.filter((id: any) => id !== pollID);
                await updateDoc(pollRef, pollData);
            }
        }
    }
}
 

</script>

<template>
  <div v-if="createPoll == 1">
    <select v-model="filterGenre" id="genre">
      <option value="">Filter by Genre</option>
      <option v-for="genre in genres" :value="genre">{{ genre }}</option>
    </select>
  </div>
  <br>
  <span v-if="isLoggedIn">
    <div class="header">
      <span v-if="createPoll == 1">
        <button @click="plus"> + </button>
      </span>
      <span v-if="createPoll == 2">
        <button @click="plus"> Cancel </button>
        <h1><input type="text" placeholder="Poll Question" v-model="pollQ" class="question" /></h1>
        <div>
          <select v-model="selectedGenre" id="genre">
            <option value="">Select a Genre</option>
            <option v-for="genre in genres" :value="genre">{{ genre }}</option>
          </select>
        </div>
        <h1><input type="text" placeholder="Poll Answer" v-model="pollC[0]" class="answer" /></h1>
        <h1><input type="text" placeholder="Poll Answer" v-model="pollC[1]" class="answer" /></h1>
        <span v-if="option3 == 1">
          <button @click="op3"> + </button>
        </span>
        <span v-if="option3 == 2">
          <div>
            <input style="margin-right: 20px; margin-left: 66px;" type="text" placeholder="Poll Answer" v-model="pollC[2]"
              class="answer" />
            <button @click="op3"> - </button>
          </div>
          <br>
        </span>
        <span v-if="option4 == 1 && option3 == 2">
          <button @click="op4"> + </button>
          <br>
        </span>
        <span v-if="option4 == 2">
          <div>
            <input style="margin-right: 20px; margin-left: 66px;" type="text" placeholder="Poll Answer" v-model="pollC[3]"
              class="answer" />
            <button @click="op4"> - </button>
          </div>
        </span>
        <br>
        <br>
        <br>
        <br>
        <div class="header"
          v-if="!(pollC[0] === '' || pollC[1] === '' || pollQ === '' || selectedGenre === 'Select a genre' || selectedGenre === '')">
          <button @click="post"> Post </button>
        </div>
      </span>
    </div>
    <div v-if="createPoll == 1">
      <h1 style="line-height: 100%;"> Click the + button to create a poll! </h1>
    </div>
  </span>
  <div v-if="createPoll == 1 && (filterGenre === 'Filter by Genre' || filterGenre === '')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll">
            <h2 class="pollQuestion">
                <span class="star"  @click="toggleFavorite(poll.id, index)">&#9734;</span>
                {{ poll.pollQuestion }}
            </h2>
            </span>
            <span v-if="'pollChoices' in poll">
            <div v-for="(options, index) in poll.pollChoices">
                <button @click="optionsClick(poll.id, index)" class="pollButtons" v-if="options !== ''">{{ options }}</button>
            </div>
            <br>
            </span>
        </div>
  </div>
  <div v-if="createPoll == 1 && !(filterGenre === 'Filter by Genre' || filterGenre === '')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll && 'genre' in poll">
            <h2 class="pollQuestion" v-if="poll.genre === filterGenre">
                <span class="star" @click="toggleFavorite(poll.id, index)">&#9734;</span>
                {{ poll.pollQuestion }}
            </h2>
            </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll">
        <div v-for="(options, index) in poll.pollChoices" v-if="poll.genre === filterGenre ">
          <button @click="optionsClick(poll.id, index)" class="pollButtons" v-if="options !== ''">{{ options }}</button>
        </div>
        <br>
      </span>
    </div>
  </div>
  <div>
    <button v-if="createPoll == 1" @click="scrollToTop" class="back-to-top">Back to top</button>
  </div>
</template>


<style scoped>
/* @import url('../style.css'); */
#grid {
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 8px;
}

.question {
  border-radius: 8px;
  border: 2px solid transparent;
  border-color: #3498db;
  padding: 10px;
  font-size: 24px;
  color: #3498db;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: 100%;
}

.star {
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  font-size: 24px;
  cursor: pointer;
  padding: 1%;
}

.star.favorite {
  color: gold;
  cursor: pointer;
  padding: 1%;
}

.question:hover,
.question:focus {
  border-color: #1abc9c;
}

select {
  border-radius: 8px;
  border: 2px solid transparent;
  border-color: #3498db;
  padding: 10px;
  font-size: 24px;
  color: #a5d7f8;
  outline: none;
  /* background-color: rgb(189, 189, 189); */
  transition: border-color 0.2s ease-in-out;
  width: 25%;
  text-align: center;
}


.answer {
  border-radius: 8px;
  border: 2px solid transparent;
  border-color: #3498db;
  padding: 10px;
  font-size: 24px;
  color: #3498db;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  width: 50%;
  /* Set desired width here */
}

.answer:hover,
.answer:focus {
  border-color: #1abc9c;
}

.header button {
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.15em .5em;
  font-size: 2em;
  font-weight: 700;
  font-family: inherit;
  background-color: #5c53d3;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;
}

.report {
  background-color: darkseagreen;
  padding: 7px;
  font-size: 20px;
  border: 5px dashed black;
  color: black;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
}

.pollButtons {
  border-radius: 8px;
  border: 2px solid transparent;
  border-color: #3498db;
  display: inline-block;
  width: 30%;
  justify-content: center;
  margin: 2px;
  background-color: #b1f1d2;
  color: rgb(0, 0, 0);
}

.pollQuestion {
  border-radius: 8px;
  border: 2px solid transparent;
  border-color: #3498db;
  padding: 3%;
  display: inline-block;
  width: fit-content;
  justify-content: center;
  margin-top: 5%;
  color: rgb(0, 0, 0);
  position: relative; /* make the position of the container element relative */
}

</style>