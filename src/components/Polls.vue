<script setup lang="ts">
/*--------------------------------------------------------------------------------------------
  Imports and variables
-------------------------------------------------------------------*/
// Import the functions you need from the SDKs you need
import { User } from "firebase/auth";
import { ref, defineProps, computed, withDefaults, Ref, watch } from "vue"
import { useRoute, RouteLocationNormalized } from 'vue-router';
import 'firebase/firestore';
import { collection, addDoc, DocumentReference, DocumentSnapshot, setDoc, doc, getDoc, getDocs, CollectionReference, query, collectionGroup, QuerySnapshot, where, QueryDocumentSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase/init.js'
import { stringLength } from "@firebase/util";

const dt = new Date();
const dt_string = dt.toLocaleString();
/* Firebase passing stuff */
const pollUser = doc(db, 'polls/user')
const pollPublic = doc(db, 'polls/public')
// const wordsColl = doc(db, 'wordleWords/words')
let pollData: {
  pollQuestion: string;
  pollChoices: Array<string>;
  votes: Array<number>;
  date: string;
  pollsCreated: number;
} = {
  pollQuestion: "",
  pollChoices: ["", "", "", ""],
  votes: [0, 0, 0, 0],
  date: "",
  pollsCreated: 0
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
let usId = "";
let newUserUid = "";
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


/* WORKING CODE FOR PULLING FROM POLLS/USER */
const pollsUserRef = collection(db, "polls");
getDocs(pollsUserRef).then((pollsSnapshot) => {
  const pollsPromises = pollsSnapshot.docs.map((pollsDoc) => {
    const newUserIdRef = collection(pollsDoc.ref, newUserUid);
    return getDocs(newUserIdRef).then((newUserIdSnapshot) => {
      const newUserIdData = newUserIdSnapshot.docs.map((newUserIdDoc) => {
        return { ...newUserIdDoc.data(), id: newUserIdDoc.id };
      });
      return { ...pollsDoc.data(), id: pollsDoc.id, newUserId: newUserIdData };
    });
  });
  return Promise.all(pollsPromises);
})
  .then((pData) => {
    const newUserIdArray = pData.map((data) => data.newUserId);
    console.log(pData);
    if ('date' in newUserIdArray[0][0]) {
      console.log("USER DATE: ", newUserIdArray[0][0].date); //Code to get 'word' from document.
    }
    //   console.log(newUserIdArray[0].length as number);
    numPolls = newUserIdArray[0].length as number //Code to get number of documents in subcollection (USE FOR GAME NUMBER)
  })
  .catch((err) => {
    console.log(err.message);
  });


auth.onAuthStateChanged(setUserId);
logUserUid();
console.log(`New value ${newUserUid}`)

function plus() {
  createPoll.value = 3 - createPoll.value;
  pollData.pollQuestion = "";
  pollData.pollChoices = ["", "", "", ""];
  option3.value = 1;
  option4.value = 1;
}

function op3() {
  option3.value = 3 - option3.value;
  if (option3.value == 1) {
    pollData.pollChoices[2] = "";
  }
  if (option4.value == 2 && option3.value == 1) {
    pollData.pollChoices[2] = pollData.pollChoices[3];
    pollData.pollChoices[3] = "";
    option3.value = 2;
    option4.value = 1;
  }
  // if (option3.value == 2) {
  //     pollData.pollChoices[2] = "";

  // }
  // option4.value = 1;
}
function op4() {
  option4.value = 3 - option4.value;
  if (option4.value == 1) {
    pollData.pollChoices[3] = "";
  }
  // if (option4.value == 2 && option3.value == 1 && pollData.pollChoices[2] !== "") {
  //     pollData.pollChoices[2] == pollData.pollChoices[3]
  //     option3.value = 2;
  //     option4.value = 1; 
  // }
}

// function post() {
//   createPoll.value = 3 - createPoll.value;
//   option3.value = 1;
//   option4.value = 1;
//   pollData.date = dt_string;
//   pollData.pollsCreated = numPolls + pollCount;
//   pollCount = pollCount + 1;
//   addFireUser(pollUser, pollData);
//   addFirePublic(pollPublic, pollData);
//   setTimeout(() => {
//     window.location.reload();
//   }, 1000);

// }

async function post() {
  createPoll.value = 3 - createPoll.value;
  option3.value = 1;
  option4.value = 1;
  pollData.date = dt_string;
  pollData.pollsCreated = numPolls + pollCount;
  pollCount = pollCount + 1;

  // Wait for both promises to resolve before reloading the page
  await Promise.all([
    addFireUser(pollUser, pollData),
    addFirePublic(pollPublic, pollData),
  ]);
  window.location.reload();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

</script>

<template>
  <span v-if="isLoggedIn">
    <div class="header">
      <span v-if="createPoll == 1">
        <button @click="plus"> + </button>
      </span>
      <span v-if="createPoll == 2">
        <button @click="plus"> Cancel </button>
        <h1><input type="text" placeholder="Poll Question" v-model="pollData.pollQuestion" class="question" /></h1>
        <h1><input type="text" placeholder="Poll Answer" v-model="pollData.pollChoices[0]" class="answer" /></h1>
        <h1><input type="text" placeholder="Poll Answer" v-model="pollData.pollChoices[1]" class="answer" /></h1>
        <span v-if="option3 == 1">
          <button @click="op3"> + </button>
        </span>
        <span v-if="option3 == 2">
          <div>
            <input style="margin-right: 20px; margin-left: 66px;" type="text" placeholder="Poll Answer"
              v-model="pollData.pollChoices[2]" class="answer" />
            <button @click="op3"> - </button>
          </div>
        </span>
        <br>
        <span v-if="option4 == 1 && option3 == 2">
          <button @click="op4"> + </button>
        </span>
        <span v-if="option4 == 2">
          <div>
            <input style="margin-right: 20px; margin-left: 66px;" type="text" placeholder="Poll Answer"
              v-model="pollData.pollChoices[3]" class="answer" />
            <button @click="op4"> - </button>
          </div>
        </span>
        <br>
        <br>
        <br>
        <div class="header">
          <button @click="post"> Post </button>
        </div>
      </span>
    </div>
    <div v-if="createPoll == 1">
      <h1 style="line-height: 100%;"> Click the + button to create a poll! </h1>
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll">
                <h2 class="pollQuestion">{{ poll.pollQuestion }}</h2>
            </span>
            <span v-if="'pollChoices' in poll">
                <div v-for="(options) in poll.pollChoices">
                    <button class="pollButtons" v-if="options !== ''">{{ options }}</button>
                </div>
                <br>
            </span>
        </div>
        <div>
            <button @click="scrollToTop" class="back-to-top">Back to top</button>
        </div>
    </div>
  </span>
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
  /* Set desired width here */
}

.question:hover,
.question:focus {
  border-color: #1abc9c;
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
  padding: 1.5%;
  display: inline-block;
  width: fit-content;
  justify-content: center;
  margin-top: 5%;
  color: rgb(0, 0, 0);
}

</style>