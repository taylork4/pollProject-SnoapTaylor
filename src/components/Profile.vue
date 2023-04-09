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
const userEmail = ref('');
let usId = "";
let newUserUid = "";
let newUserEmail = "";

let prData: {
  firstName: string;
  lastName: string;
  age: number;
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


function dataAnalysis(data: any) {
    const firstName = data.firstName; // Read 'firstName' field
    const lastName = data.lastName; // Read 'lastName' field
    const age = data.age; // Read 'age' field

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Age:", age);
    
    const firstNameElement = document.getElementById("firstName");
      const lastNameElement = document.getElementById("lastName");
      const ageElement = document.getElementById("age");
    // Update the UI with the data
    if (firstNameElement && lastNameElement && ageElement) {
        firstNameElement.textContent = "First Name: " + firstName;
        lastNameElement.textContent = "Last Name: " + lastName;
        ageElement.textContent = "Age: " + age;
    }
    // document.getElementById("firstName").textContent = "First Name: " + firstName;
    // document.getElementById("lastName").textContent = "Last Name: " + lastName;
    // document.getElementById("age").textContent = "Age: " + age;
}




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
// Define the collection and query
// Define the collection and query

// const docRef = doc(db, "profile", `${newUserEmail}`);
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

// Call the function to fetch the data

</script>

<template>
    <h1> This is your profile! </h1>
    <h2 id="firstName"></h2>
    <h2 id="lastName"></h2>
    <h2 id="age"></h2>
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

</style>