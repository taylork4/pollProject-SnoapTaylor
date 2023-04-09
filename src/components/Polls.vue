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
/* Firebase passing stuff */
const gs = doc(db, 'profile/user')
// const wordsColl = doc(db, 'wordleWords/words')
let docData: {
    email: string;
    username: string;
    userId: string;
    firstName: string;
    lastName: string;
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
let createPoll = 0;

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


const profRef = collection(db, "gameStats");

getDocs(profRef).then((profSnapshot) => {
  const gameStatsPromises = profSnapshot.docs.map((profDoc) => {
    const newUserIdRef = collection(profDoc.ref, newUserUid);
    return getDocs(newUserIdRef).then((newUserIdSnapshot) => {
      const newUserIdData = newUserIdSnapshot.docs.map((newUserIdDoc) => {
        return { ...newUserIdDoc.data(), id: newUserIdDoc.id };
      });
      return { ...profDoc.data(), id: profDoc.id, newUserId: newUserIdData };
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
//   numGames = newUserIdArray[0].length as number //Code to get number of documents in subcollection (USE FOR GAME NUMBER)
})
.catch((err) => {
  console.log(err.message);
});


auth.onAuthStateChanged(setUserId);
logUserUid();
console.log(`New value ${newUserUid}`)

function plus() {
    createPoll = 1;
    console.log(createPoll);
}

function cancel() {
    createPoll = 0;
    console.log(createPoll);
}


// const post = () => {
//     createPoll = true;
// }

</script>

<template>
    <span v-if="isLoggedIn">
        <div class="header">
            <span v-if="createPoll == 0">
                <button @click="plus"> + </button>
            </span>
            <span v-if="createPoll > 1">
                <button @click="cancel"> Cancel </button>
            </span>
        </div>
        <div v-if="createPoll == 0">
            <h1> Click the + button to create a poll! </h1>
            <h2> Or, feel free to </h2>
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