// src/database/config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGMOE28_mfxGcdjxpUsa4dnrnx_-K5YeE",
  authDomain: "book-app-web.firebaseapp.com",
  projectId: "book-app-web",
  storageBucket: "book-app-web.appspot.com",
  messagingSenderId: "104785164409",
  appId: "1:104785164409:web:83fa90e5ddccdd6963bca8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
