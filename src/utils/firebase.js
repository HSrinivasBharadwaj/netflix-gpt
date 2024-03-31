// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpBjmQUuikp7542-9fX9Yuu8TFadEOavI",
  authDomain: "netflix-gpt-c1699.firebaseapp.com",
  projectId: "netflix-gpt-c1699",
  storageBucket: "netflix-gpt-c1699.appspot.com",
  messagingSenderId: "952163510064",
  appId: "1:952163510064:web:6e19544bb541b72761caf5",
  measurementId: "G-XREC4FDSYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()