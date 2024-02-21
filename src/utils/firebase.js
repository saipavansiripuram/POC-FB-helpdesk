// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QaSjwt1kaykWE8H0ZeXCcZehwEYcbT8",
  authDomain: "rp-assignment.firebaseapp.com",
  projectId: "rp-assignment",
  storageBucket: "rp-assignment.appspot.com",
  messagingSenderId: "1047858664722",
  appId: "1:1047858664722:web:bb19eca0e1c17fc12d0fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
