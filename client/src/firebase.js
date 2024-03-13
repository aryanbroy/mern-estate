// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-76606.firebaseapp.com",
  projectId: "mern-estate-76606",
  storageBucket: "mern-estate-76606.appspot.com",
  messagingSenderId: "374199775374",
  appId: "1:374199775374:web:cdaefecca11de7df4cd9df",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
