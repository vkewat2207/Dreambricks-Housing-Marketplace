// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtC-2Wy0O8p2Cvygk0B2A7B6t1t5Jxq5s",
  authDomain: "dreambricks-c5158.firebaseapp.com",
  projectId: "dreambricks-c5158",
  storageBucket: "dreambricks-c5158.appspot.com",
  messagingSenderId: "72440289034",
  appId: "1:72440289034:web:c788540bb92be7ffc24cf3",
  measurementId: "G-6Q1F6XYL2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
