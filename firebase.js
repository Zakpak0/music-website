import firebase from "firebase";
import "firebase/storage"
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2yf1YVVW0N_GxlCNFPjC4TG-egPF-7hw",
  authDomain: "the-playlist-music-website.firebaseapp.com",
  databaseURL: "https://the-playlist-music-website-default-rtdb.firebaseio.com",
  projectId: "the-playlist-music-website",
  storageBucket: "the-playlist-music-website.appspot.com",
  messagingSenderId: "1008321328374",
  appId: "1:1008321328374:web:9feef5d2be962d87fa28d7"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()



export { db };
