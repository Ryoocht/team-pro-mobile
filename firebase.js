import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoyeUfHwMTPVwmCF6dEtxjK7GzAabgfr8",
  authDomain: "moonward-teampro.firebaseapp.com",
  projectId: "moonward-teampro",
  storageBucket: "moonward-teampro.appspot.com",
  messagingSenderId: "963647731245",
  appId: "1:963647731245:web:1482735259a26ecc2e2aa4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, firestore, setDoc, doc };