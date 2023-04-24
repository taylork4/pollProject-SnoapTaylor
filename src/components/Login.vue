<script setup lang="ts">
  import { ref } from "vue";
  import {useRouter} from 'vue-router';
  import 'firebase/auth';
  import { signInWithEmailAndPassword, UserCredential, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
  import 'firebase/firestore';
  import { auth } from '../firebase/init.js'

const router = useRouter();


const email = ref('');
const password = ref('');
const provider = new GoogleAuthProvider();

/* Allows user to log in with Google */
const loginWGoog = () => {
  signInWithPopup(auth, provider)
  .then((cred: UserCredential) => {
            console.log('Successfully logged in!');
            router.push({
              name: 'Polls',
              query: {email: cred.user?.email}
            });
        })
            .catch((err: any) => {
            console.error("Oops", err);
        });
      }

  /* Allows user to log in with username and password */
  const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
            console.log('Successfully logged in!');
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
  <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button  @click="login">Login</button></p>
  <p><button  @click="loginWGoog"> Login with Google </button></p>
  <router-view />
</template>