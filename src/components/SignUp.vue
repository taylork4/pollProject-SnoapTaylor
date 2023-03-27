<script setup lang = "ts">
import { ref, Ref } from "vue";
import {useRouter} from 'vue-router';
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, UserCredential, sendEmailVerification } from "firebase/auth";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {db, auth} from '../firebase/init.js'
const router = useRouter();


//example
const email = ref('');
const password = ref('');

    const submit = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
            sendEmailVerification(cred.user);
            console.log("Verification email has been sent to", cred.user?.email);
            router.push({
              name: 'HelloWordle',
              query: {email: cred.user?.email}
            });
            // auth.signOut();
        })
            .catch((err: any) => {
            console.error("Oops", err);
        });
    };


</script>

<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="submit">Submit</button></p>
    
    
    <router-view />
  </template>

<style scoped>
 .buttons {
   display: flex;
   align-items: center;
   justify-content: right;
   grid-gap: 8px;
 }
</style>