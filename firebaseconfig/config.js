// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRP3tJclxHgjLwOSNmKJv8K68UUBroWwQ",
  authDomain: "etsmovie-1d29a.firebaseapp.com",
  projectId: "etsmovie-1d29a",
  storageBucket: "etsmovie-1d29a.appspot.com",
  messagingSenderId: "932246559337",
  appId: "1:932246559337:web:d60e3199fa6d103e2d20f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
