import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8adrdDRG3jMWV_Alxu7JqfmZgdWLcnmg",
  authDomain: "chat-352ef.firebaseapp.com",
  projectId: "chat-352ef",
  storageBucket: "chat-352ef.appspot.com",
  messagingSenderId: "908482628427",
  appId: "1:908482628427:web:f48e5085d447de2de2b6ce"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore()