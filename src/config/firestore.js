// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdFrEpziPfKsgnqwHHNpM-K_DiIu60en4",
  authDomain: "athens-firestore955.firebaseapp.com",
  projectId: "athens-firestore955",
  storageBucket: "athens-firestore955.appspot.com",
  messagingSenderId: "187705219301",
  appId: "1:187705219301:web:8f1472d10e8428e9b41c0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Getting the database from the app
export const db = getFirestore(app);