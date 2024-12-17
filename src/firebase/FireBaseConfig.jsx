// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq178s4niTs-3V7UZlByEyU-EfIyhU4Vg",
  authDomain: "e-commerce-5eff5.firebaseapp.com",
  projectId: "e-commerce-5eff5",
  storageBucket: "e-commerce-5eff5.firebasestorage.app",
  messagingSenderId: "514638047125",
  appId: "1:514638047125:web:7052a5a005ccdccb57789c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app)
const auth=getAuth(app)

export {fireDB ,auth}