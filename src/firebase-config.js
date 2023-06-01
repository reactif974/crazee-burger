// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firebase configuration
const firebaseConfig = {
  apiKey: process.env.CRAZEE_BURGER_FIREBASE_API_KEY,
  authDomain: process.env.CRAZEE_BURGER_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.CRAZEE_BURGER_FIREBASE_PROJECT_ID,
  storageBucket: process.env.CRAZEE_BURGER_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.CRAZEE_BURGER_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.CRAZEE_BURGER_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
