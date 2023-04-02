<script setup lang = "ts">
import { ref } from "vue";
import {useRouter} from 'vue-router';
import {createUserWithEmailAndPassword, UserCredential, sendEmailVerification } from "firebase/auth";
import 'firebase/firestore';
import { auth } from '../firebase/init.js'
const router = useRouter();

const email = ref('');
const password = ref('');

  /* Allows user to sign up with email and password */
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
            sendEmailVerification(cred.user);
            console.log("Verification email has been sent to", cred.user?.email);
            router.push({
              name: 'Polls',
              query: {email: cred.user?.email}
            });
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
    <p><button @click="signUp"> Sign Up </button></p>
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