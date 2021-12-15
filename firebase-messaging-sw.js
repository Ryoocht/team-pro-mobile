// import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, onBackgroundMessage } from "firebase/messaging/sw";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };

// initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseConfig);

// onBackgroundMessage(messaging, payload => {
//     console.log("Received background message ", payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body
//     };

//     return self.ServiceWorkerRegistration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// });