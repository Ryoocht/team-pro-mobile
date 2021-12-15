// import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage } from "firebase/messaging/sw";

// const firebaseConfig = {
//     apiKey: "AIzaSyCoyeUfHwMTPVwmCF6dEtxjK7GzAabgfr8",
//     authDomain: "moonward-teampro.firebaseapp.com",
//     projectId: "moonward-teampro",
//     storageBucket: "moonward-teampro.appspot.com",
//     messagingSenderId: "963647731245",
//     appId: "1:963647731245:web:1482735259a26ecc2e2aa4"
// };

// initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseConfig);

// onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body
//     };

//     return self.ServiceWorkerRegistration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// });