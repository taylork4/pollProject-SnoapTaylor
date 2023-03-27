<script setup lang="ts">
  import { ref, Ref, watchEffect } from "vue";
  import {useRouter} from 'vue-router';
  import 'firebase/auth';

  import { initializeApp } from "firebase/app";
  import { getAuth, signInWithEmailAndPassword, UserCredential, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
  import * as firebase from 'firebase/app';
  import 'firebase/firestore';
  import {db, auth} from '../firebase/init.js'

const router = useRouter();


const email = ref('');
const password = ref('');
const provider = new GoogleAuthProvider();
const loginWGoog = () => {
  signInWithPopup(auth, provider)
  .then((cred: UserCredential) => {
          document.cookie = `userEmail=${cred.user?.email}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;
            console.log("Verification email has been sent to", cred.user?.email);
            console.log('Successfully logged in!');
            router.push({
              name: 'HelloWordle',
              query: {email: cred.user?.email}
            });
        })
            .catch((err: any) => {
            console.error("Oops", err);
        });
      }

  const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
          document.cookie = `userEmail=${cred.user?.email}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;
            console.log("Verification email has been sent to", cred.user?.email);
            console.log('Successfully logged in!');
            router.push({
              name: 'HelloWordle',
              query: {email: cred.user?.email}
            });
        })
            .catch((err: any) => {
            console.error("Oops", err);
        });
    };
    
</script>

<template>
  <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button  @click="login">Login</button></p> <!--:disabled = "signedUp" -->
  <p><button  @click="loginWGoog"> Login with Google </button></p>
  <router-view />
</template>