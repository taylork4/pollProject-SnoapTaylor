<script setup lang="ts"> 
  import { ref, watch } from 'vue' // used for conditional rendering
  import { useRouter, useRoute, RouteLocationNormalized } from 'vue-router';
  import 'firebase/auth';
  import { User } from 'firebase/auth';
  import 'firebase/firestore';
  import {auth} from './firebase/init.js'
  
  const router = useRouter()
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

const isLoggedIn = ref(true)
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user: User | null) {
      if (user) {
        isLoggedIn.value = true // if we have a user
        userUid.value = user.uid; // store the user UID in the ref       
      } else {
        isLoggedIn.value = false // if we do not
        userUid.value = ''; // clear the user UID ref
      }
  })

  
  async function logUserUid() {
  await new Promise<void>((resolve) => {
    watch(userEmail, (newValue) => {
      newUserEmail = newValue;
      resolve();
    });
  });
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

/* Allows user to sign out and sends them back to the home screen */
const signOut = () => {
    auth.signOut()
    router.push('/')
  }

</script>
<template>
    <div class="navbar">
      <nav class="nav-options">
        <span v-if="isLoggedIn">
          <button @click="signOut"> Logout </button>
        </span>
        <span v-else>
          <router-link to="/SignUp"> Sign Up </router-link> |
          <router-link to="/Login"> Login </router-link>
        </span>
      </nav>
      <div class="email">
        <span v-if= "$route.path !== '/Profile' && $route.path !== '/' && isLoggedIn">
            <router-link to="/Profile"> Profile  </router-link>
        </span>
        <span v-if="$route.path !== '/Polls'  && $route.path !== '/Login' && $route.path !== '/SignUp'">
            <router-link to="/Polls"> Polls </router-link>
        </span>
      </div>
    </div>
  <div v-if="$route.path === '/'">
    <h1 style="color: darkblue; font-size: 50px;">Polls!</h1>
    <h4 style="font-size: large; color: black;">
      Cameron Snoap<br>
      Kyle Taylor
    </h4>
    <span v-if="!isLoggedIn">
        <h2> <br> Click <u>Sign Up</u> if you don't already have an account! </h2>
        <h2> Or, click <u>Login</u> if you do! </h2>
    </span>
    <span v-if="isLoggedIn">
        <h1> <br> Click <u>Polls</u> in the top right corner to </h1>
        <h1> start making some awesome polls! </h1>
    </span>
  </div>
  <router-view />
  <div id="app">
    <PlanetChart/>
  </div>
</template>

<style>
@import url('./style.css');
.navbar {
  display: flex;
  align-items: center;
}

.nav-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}



.email {
  margin-left: auto;
}

 table {
    table-layout: auto; 
    width: 100%;
    border: 4px solid black;
    border-collapse: collapse;
    color: black;
}

th, td {
    border: 2px solid black;
    border-style: solid;
    color: black;
}

th {
    font-family: 'Georgia';
    font-size: large;
    background-color: rgb(48, 160, 251);
    color: black;
}

tr {
    font-family: 'Perpetua';
    font-size: medium;
    color: black;
}

tr:hover td {
    background-color: rgb(98, 242, 175);
} 

tr:nth-child(even) {
    background-color: rgb(228, 228, 228);
}

tr:nth-child(odd) {
    background-color: rgb(158, 226, 255);
} 
</style>