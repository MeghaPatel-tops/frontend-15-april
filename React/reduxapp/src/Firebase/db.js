// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDoTjCeuWlxBw64rHueTv0pAu_BjYlyiQw",
  authDomain: "ecom-arpril-15.firebaseapp.com",
  projectId: "ecom-arpril-15",
  storageBucket: "ecom-arpril-15.firebasestorage.app",
  messagingSenderId: "417387016819",
  appId: "1:417387016819:web:81adeda49eb8a49c287006",
  measurementId: "G-JM2QLTBXZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const providerGoogle = new GoogleAuthProvider(); 
export const db = getFirestore(app);
