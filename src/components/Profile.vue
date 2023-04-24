<script setup lang="ts">
/*--------------------------------------------------------------------------------------------
  Imports and variables
-------------------------------------------------------------------*/
// Import the functions you need from the SDKs you need
import { User } from "firebase/auth";
import { ref, defineProps, computed, withDefaults, Ref, watch } from "vue"
import { useRoute, RouteLocationNormalized } from 'vue-router';
import 'firebase/firestore';
import {collection, addDoc, updateDoc, DocumentReference, DocumentSnapshot, setDoc, doc, getDoc, getDocs, CollectionReference, query, collectionGroup, QuerySnapshot, where, QueryDocumentSnapshot, deleteDoc } from 'firebase/firestore';
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
const userEmail = ref('');
let usId = "";
let newUserUid = "";
let newUserEmail = "";
const filterOptions = ["Favorited Polls  ⭐", "Polls Responded To", "Polls Created", "Statistics"]
let filterSelection = ref("");
let numPolls: number = 0;

let prData: {
    firstName: string;
    lastName: string;
    created: Array<string>;
    responded: Array<string>;
    favorited: Array<string>;
}

async function fetchData(em: string) {
  const docRef = doc(db, "profile", em);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data) {
        dataAnalysis(data);
    } else {
      console.log("No data found in document!");
    }
  } else {
    console.log("No such document!");
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


const isLoggedIn = ref(true)
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user: User | null) {
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
      console.log(`userEmail changed from ${oldValue} to ${newValue}`);
      newUserUid = newValue;
      resolve();
    });
  });

  console.log(`New userEmail value: ${newUserEmail}`);
  fetchData(newUserEmail);
}

function setUserId(user: User | null) {
  if (user) {
    userUid.value = user.uid;
    userEmail.value = user.email || '';
    usId = user.uid;
  } else {
    userUid.value = '';
    userEmail.value = '';
    usId = '';
  }
}

auth.onAuthStateChanged(setUserId);
logUserUid();
console.log(`New value ${newUserUid}`)
let fn = ref('');
let ln = ref('');
let fav = ref<string[]>([]);
let cr = ref<string[]>([]);
let resp = ref<string[]>([]);
// let lastName = ref("");
function dataAnalysis(data: any) {
    fn.value = data.firstName; // Read 'firstName' field
    ln.value = data.lastName;
    fav.value = data.favorited;
    cr.value = data.created;
    resp.value = data.resp;
    // console.log("Favorites: ", fav.value.slice());
    
    
    const userIdElement = document.getElementById("userId");
    const emailElement = document.getElementById("email");
    // Update the UI with the data
    if (userIdElement && emailElement) {
        userIdElement.textContent = "User ID: " + newUserUid
        emailElement.textContent = "Email: " + newUserEmail
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

async function deletePoll(pollID: string, index: number) {
    const allPollRef = doc(db, "polls/public/allPolls", pollID);
    const allPollDoc = await getDoc(allPollRef);
    if (confirm("Are you sure you want to delete your poll?")) {
        if (allPollDoc.exists()) {
            await deleteDoc(allPollRef);
        }
    }
}

function cn(val: any) {
    console.log(val);
}
</script>

<template>
  <span class="header">
    <select v-model="filterSelection">
      <option value="">Filter by</option>
      <option v-for="ops in filterOptions" :value="ops">{{ ops }}</option>
    </select>
  </span>
    <br>
    <div class="report">
        <h1> This is your profile! </h1>
        <h2> First Name: {{ fn }} </h2>
        <h2> Last Name: {{ ln }}</h2>
        <h2 id="email"></h2>
        <h2 id="userId"></h2>
    </div>
    <br>
    <br>
    <div v-if="(filterSelection === 'Filter by' || filterSelection === '')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll && 'genre' in poll">
            <h2 class="pollQuestion">
                <span class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' : '☆' }}</span>
                <span class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> × </span>
                {{ poll.pollQuestion }}
            </h2>
            </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== ''">{{ options }}</button>
        </div>
        <br>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Statistics')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll">
            <h2 class="pollQuestion">
                <span class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' : '☆' }}</span>
                <span class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> × </span>
                    {{ poll.pollQuestion }}
            </h2>
            </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== ''">{{ options }}</button>
        </div>
        <br>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Favorited Polls  ⭐')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll && fav.includes(poll.id)">
                <h2>{{ cn(fav) }}</h2>
            <h2 class="pollQuestion">
                <span class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' : '☆' }}</span>
                <span class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> × </span>
                    {{ poll.pollQuestion }}
            </h2>
            </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== '' && fav.includes(poll.id)">{{ options }}</button>
        </div>
        <br>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Polls Created')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll && cr.includes(poll.id)">
            <h2 class="pollQuestion">
                <span class="star" @click="toggleFavorite(poll.id, index)">★</span>
                <span class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> × </span>
                    {{ poll.pollQuestion }}
            </h2>
            </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== ''  && cr.includes(poll.id)">{{ options }}</button>
        </div>
        <br>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Polls Responded To')">
        <div v-for="(poll, index) in publicPollData" :key="index">
            <span v-if="'pollQuestion' in poll && resp.includes(poll.id)">
            <h2 class="pollQuestion">
                <span class="star" @click="toggleFavorite(poll.id, index)">★</span>
                <span class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> × </span>
                    {{ poll.pollQuestion }}
            </h2>
            </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== ''  && resp.includes(poll.id)">{{ options }}</button>
        </div>
        <br>
      </span>
    </div>
  </div>
  <!-- <img src="./assets/profIcon.png" alt=""> -->
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

.delete {
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  font-size: 24px;
  cursor: pointer;
  padding: 1%;
}

.star {
  position: absolute;
  top: 0;
  right: 18px;
  color: gold;
  font-size: 24px;
  cursor: pointer;
  padding: 1%;
}

.delete {
  color: red;
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
  cursor: default;
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

 .report {
   background-color: darkseagreen;
   padding: 20px;
   font-size: 20px;
   border: 5px dashed black;
   color: black;
 }


 select {
  border-radius: 8px;
  border: 2px solid transparent;
  border-color: #3498db;
  padding: 10px;
  font-size: 24px;
  color: #a5d7f8;
  outline: none;
  margin-bottom: 40px;
  /* background-color: rgb(189, 189, 189); */
  transition: border-color 0.2s ease-in-out;
  width: 25%;
  text-align: center;
}

</style>