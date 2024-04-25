// src/database/firestoreService.js

import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

// Function to add a document to the 'userForms' collection
export const addUserForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "userForms"), formData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Returns the document ID
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Throws an error to be caught by the calling function
  }
};
