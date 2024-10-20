// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIJRnrpk042_jbguleR0SPAxvM7ItYulU",
  authDomain: "expo-firebase-8bd85.firebaseapp.com",
  projectId: "expo-firebase-8bd85",
  storageBucket: "expo-firebase-8bd85.appspot.com",
  messagingSenderId: "901351049028",
  appId: "1:901351049028:web:469266fdecd42183f5f911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);