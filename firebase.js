import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, setDoc, getDoc, collection, doc } from "firebase/firestore";
// import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
// const messaging = getMessaging();
// const messagingConfig = {vapidKey: process.env.REACT_APP_VAPID_KEY};
// const publicKey = messagingConfig;

// export const getTheToken = async(setTokenFound) => {
//   let currentToken = "";
//   try {
//     currentToken = await messaging.getToken(publicKey);
//     if (currentToken){
//       setTokenFound(true);
//     } else {
//       setTokenFound(false);
//     }
//   } catch (error) {
//     console.log("An error occurred while retrieving token. ", error);
//   }
  
//   return currentToken;
// };

// export const onMessageListner = () => 
//   new Promise(resolve => {
//     messaging.onMessage(payload => {
//       resolve(payload);
//     });
//   });

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, firestore, setDoc, getDoc, collection, doc };
