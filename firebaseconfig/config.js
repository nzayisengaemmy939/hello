// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlah9sq1m_m4GOM_MRFJCkXMaF20_FWS8",
  authDomain: "movies-5b90a.firebaseapp.com",
  projectId: "movies-5b90a",
  storageBucket: "movies-5b90a.appspot.com",
  messagingSenderId: "990504828631",
  appId: "1:990504828631:web:24fcc8f7424574b3fc3a92",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
