// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-XZLVp13jBIrw_Vc-gahSUIBcBiXvU8M",
  authDomain: "netflixgpt-f759a.firebaseapp.com",
  projectId: "netflixgpt-f759a",
  storageBucket: "netflixgpt-f759a.appspot.com",
  messagingSenderId: "313507533203",
  appId: "1:313507533203:web:e49e64d289dc0b39d1d866",
  measurementId: "G-M99R0YQN95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
