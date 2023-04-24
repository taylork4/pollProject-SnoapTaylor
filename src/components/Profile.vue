<script setup lang="ts">
/*--------------------------------------------------------------------------------------------
  Imports and variables
-------------------------------------------------------------------*/
// Import the functions you need from the SDKs you need
import { User } from "firebase/auth";
import { ref, watch } from "vue"
import { RouteLocationNormalized } from 'vue-router';
import 'firebase/firestore';
import { collection, updateDoc, doc, getDoc, getDocs, CollectionReference, query, collectionGroup, QuerySnapshot, where, QueryDocumentSnapshot, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/init.js'

const userUid = ref('');
const userEmail = ref('');
let usId = "";
let newUserUid = "";
let newUserEmail = "";
const filterOptions = ["Favorited Polls  ⭐", "Polls Responded To", "Polls Created", "Statistics"]
let filterSelection = ref("");
let numPolls: number = 0;

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
let favPer = ref(0);
let crPer = ref(0);
let respPer = ref(0);
// let lastName = ref("");
function dataAnalysis(data: any) {
  fn.value = data.firstName; // Read 'firstName' field
  ln.value = data.lastName;
  fav.value = data.favorited;
  cr.value = data.created;
  resp.value = data.responded;

  // Get the total sum of all values
  const totalSum = fav.value.length + cr.value.length + resp.value.length;

  // Calculate the percentages
  favPer.value = fav.value.length / totalSum * 100;
  crPer.value = cr.value.length / totalSum * 100;
  respPer.value = resp.value.length / totalSum * 100;

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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

</script>

<template>
  <span class="header">
    <select v-model="filterSelection">
      <option value="">Filter by</option>
      <option v-for="ops in filterOptions" :value="ops">{{ ops }}</option>
    </select>
  </span>
  <div class="report">
    <h1> This is your profile! </h1>
    <h2> First Name: {{ fn }} </h2>
    <h2> Last Name: {{ ln }}</h2>
    <h2 id="email"></h2>
    <h2 id="userId"></h2>
  </div>
  <div v-if="(filterSelection === 'Filter by' || filterSelection === '')">
    <div v-for="(poll, index) in publicPollData" :key="index">
      <span
        v-if="'pollQuestion' in poll && 'genre' in poll && (fav.includes(poll.id) || resp.includes(poll.id) || cr.includes(poll.id))">
        <h2 class="pollQuestion">
          <span style="top: -5px" class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' :
            '☆' }}</span>
          <span style="top: -5px" class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> ×
          </span>
          {{ poll.pollQuestion }}
        </h2>
      </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll && 'votes' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons"
            v-if="options !== '' && (fav.includes(poll.id) || resp.includes(poll.id) || cr.includes(poll.id))">{{ options
            }}</button>
          <p style="display: inline-block; margin-left: 10px;"
            v-if="options !== '' && Array.isArray(poll.votes) && (fav.includes(poll.id) || resp.includes(poll.id) || cr.includes(poll.id))">
            {{ (100 * (poll.votes[index] / (poll.votes[0] + poll.votes[1] + poll.votes[2] + poll.votes[3]))).toFixed(2)
            }}%
          </p>
        </div>

      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Favorited Polls  ⭐')">
    <div v-for="(poll, index) in publicPollData" :key="index">
      <span v-if="'pollQuestion' in poll && fav.includes(poll.id)">
        <h2>{{ cn(fav) }}</h2>
        <h2 class="pollQuestion">
          <span style="top: -5px" class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' :
            '☆' }}</span>
          <span style="top: -5px" class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> ×
          </span>
          {{ poll.pollQuestion }}
        </h2>
      </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll && 'votes' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== '' && fav.includes(poll.id)">{{ options }}</button>
          <p style="display: inline-block; margin-left: 10px;"
            v-if="options !== '' && Array.isArray(poll.votes) && fav.includes(poll.id)">{{ (100 * (poll.votes[index] /
              (poll.votes[0] + poll.votes[1] + poll.votes[2] + poll.votes[3]))).toFixed(2) }}%</p>
        </div>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Polls Created')">
    <div v-for="(poll, index) in publicPollData" :key="index">
      <span v-if="'pollQuestion' in poll && cr.includes(poll.id)">
        <h2 class="pollQuestion">
          <span style="top: -5px" class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' :
            '☆' }}</span>
          <span style="top: -5px" class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> ×
          </span>
          {{ poll.pollQuestion }}
        </h2>
      </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll && 'votes' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== '' && cr.includes(poll.id)">{{ options }}</button>
          <p style="display: inline-block; margin-left: 10px;"
            v-if="options !== '' && Array.isArray(poll.votes) && cr.includes(poll.id)">{{ (100 * (poll.votes[index] /
              (poll.votes[0] + poll.votes[1] + poll.votes[2] + poll.votes[3]))).toFixed(2) }}%</p>
        </div>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Polls Responded To')">
    <div v-for="(poll, index) in publicPollData" :key="index">
      <span v-if="'pollQuestion' in poll && resp.includes(poll.id)">
        <h2 class="pollQuestion">
          <span style="top: -5px" class="star" @click="toggleFavorite(poll.id, index)">{{ fav.includes(poll.id) ? '★' :
            '☆' }}</span>
          <span style="top: -5px" class="delete" @click="deletePoll(poll.id, index)" v-if="cr.includes(poll.id)"> ×
          </span>
          {{ poll.pollQuestion }}
        </h2>
      </span>
      <span v-if="'pollChoices' in poll && 'genre' in poll && 'votes' in poll">
        <div v-for="(options, index) in poll.pollChoices">
          <button class="pollButtons" v-if="options !== '' && resp.includes(poll.id)">{{ options }}</button>
          <p style="display: inline-block; margin-left: 10px;"
            v-if="options !== '' && Array.isArray(poll.votes) && resp.includes(poll.id)">{{ (100 * (poll.votes[index] /
              (poll.votes[0] + poll.votes[1] + poll.votes[2] + poll.votes[3]))).toFixed(2) }}%</p>
        </div>
      </span>
    </div>
  </div>
  <div v-if="(filterSelection === 'Statistics')">
    <div class="chart">
      <div class="bar-container">
        <button class="bar fav-bar" v-bind:style="{ height: favPer + '%' }">{{ fav.length }}</button>
        <div class="label">Favorites</div>
      </div>
      <div class="bar-container">
        <button class="bar cr-bar" v-bind:style="{ height: crPer + '%' }">{{ cr.length }}</button>
        <div class="label">Created</div>
      </div>
      <div class="bar-container">
        <button class="bar resp-bar" v-bind:style="{ height: respPer + '%' }">{{ resp.length }}</button>
        <div class="label">Responded</div>
      </div>
    </div>
  </div>
  <div>
    <button @click="scrollToTop" class="back-to-top">Back to top</button>
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

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
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

.chart {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 400px;
  /* adjust as needed */
  margin: 20px;
}

.bar-container {
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  justify-content: flex-end;
  margin: 0 75px;
  font-weight: bold;
}

.bar {
  width: 300px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  color: black;
  padding-bottom: 40px;
}

.fav-bar {
  background-color: #FFC857;
}

.cr-bar {
  background-color: #E9724C;
}

.resp-bar {
  background-color: #C5283D;
}

.chart::after {
  content: "";
  display: block;
  height: 5px;
  background-color: #333;
  margin-top: 10px;
}

.label {
  margin-top: 10px;
  font-size: 40px;
  text-align: center;
}

/* Hover effect */
.bar:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

/* Active effect */
.bar:active {
  transform: translateY(0);
  box-shadow: none;
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
  -webkit-text-stroke: 1px black;
  -moz-text-stroke: 1px black;
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
  position: relative;
  /* make the position of the container element relative */
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