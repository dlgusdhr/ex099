// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzv5fz2GIDH1yHgBunPB45ATyqHqMW81U",
  authDomain: "react01-3b5e6.firebaseapp.com",
  projectId: "react01-3b5e6",
  storageBucket: "react01-3b5e6.appspot.com",
  messagingSenderId: "634974334140",
  appId: "1:634974334140:web:eb3434a0854da8187674b9",
  measurementId: "G-NMMQLTSDBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);