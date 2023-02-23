// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMfbNfJya9eIyAcenC3ALgGtzQ9DbNQw8",
  authDomain: "sunglass-73c24.firebaseapp.com",
  projectId: "sunglass-73c24",
  storageBucket: "sunglass-73c24.appspot.com",
  messagingSenderId: "804908030343",
  appId: "1:804908030343:web:8d7576d8fe39f5b2005b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) 
export default auth;
