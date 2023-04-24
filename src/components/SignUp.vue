<script setup lang = "ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import {createUserWithEmailAndPassword, UserCredential, sendEmailVerification } from "firebase/auth";
import {DocumentReference, setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase/init.js'
const router = useRouter();

/* Firebase passing stuff */
    let prData: {
        firstName: string;
        lastName: string;
        created: Array<string>;
        responded: Array<string>;
        favorited: Array<string>;
    } = {
        firstName: "",
        lastName: "",
        created: [],
        responded: [],
        favorited: []
    }

    const email = ref('');
    const password = ref('');
    
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


  /* Allows user to sign up with email and password */
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
            sendEmailVerification(cred.user);
            console.log("Verification email has been sent to", cred.user?.email);
            const pr = doc(db, `profile/${email.value}`);
            // Set the name of the document to the email value
            setDoc(pr, { name: email.value })
            setFire(pr, prData);
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
    <p><input type="text" placeholder="First Name" v-model="prData.firstName" /></p>
    <p><input type="text" placeholder="Last Name" v-model="prData.lastName" /></p>
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