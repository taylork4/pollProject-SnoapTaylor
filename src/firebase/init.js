import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAEn441hlz28aSWIZpiyP-Hzg2ts09HoKs",
  authDomain: "polls-snoap-taylor.firebaseapp.com",
  projectId: "polls-snoap-taylor",
  storageBucket: "polls-snoap-taylor.appspot.com",
  messagingSenderId: "800775808502",
  appId: "1:800775808502:web:1775a14231f56cd929d3d7",
  measurementId: "G-YTCEVMCMR0"
};
  
  // Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Create a reactive variable to store the user UID


// init firestore service
const db = getFirestore()
// export default db
export { db, auth }