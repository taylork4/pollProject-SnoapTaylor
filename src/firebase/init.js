import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChY_39qf2UiPfhcYYboh4rnW21nKy1EZQ",
  authDomain: "pollproject-snoaptaylor.firebaseapp.com",
  projectId: "pollproject-snoaptaylor",
  storageBucket: "pollproject-snoaptaylor.appspot.com",
  messagingSenderId: "731430215461",
  appId: "1:731430215461:web:e08e37553454362fbb84cc",
  measurementId: "G-YSVXZHQVFZ"
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