// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT12Y-eyisLSvw6fDKdkjDmqvmnlBL0JA",
  authDomain: "chat-f00c7.firebaseapp.com",
  projectId: "chat-f00c7",
  storageBucket: "chat-f00c7.appspot.com",
  messagingSenderId: "916017692167",
  appId: "1:916017692167:web:f63705180544864f29f4a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()