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

</script>

<template>
  <h1> This is your profile! </h1>
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