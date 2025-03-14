// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_APIKEY,
  authDomain: "filemanager-bca27.firebaseapp.com",
  projectId: "filemanager-bca27",
  storageBucket: "filemanager-bca27.firebasestorage.app",
  messagingSenderId: "190551625994",
  appId: "1:190551625994:web:eb67636bb18f55926baaf3",
  measurementId: "G-7PD1VKMXFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// let analytics;
// if (typeof window !== "undefined") {
//   isSupported().then((supported) => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }
const db = getFirestore(app);
export {db}