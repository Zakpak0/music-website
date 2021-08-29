import { initializeApp } from "@firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhsXx15JtAegWUoiEVOAjLMVxZrngbuEg",
  authDomain: "the-music-app-2.firebaseapp.com",
  projectId: "the-music-app-2",
  storageBucket: "the-music-app-2.appspot.com",
  messagingSenderId: "709489928479",
  appId: "1:709489928479:web:019f120ed138e99d45e82a",
  measurementId: "G-C6DXTQ3WFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore()



export { db };
