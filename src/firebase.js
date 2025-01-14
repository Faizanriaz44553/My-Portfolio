import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVRBXAyN77YOH5DbsI2NvEXqpwWSYRhJM",
  authDomain: "portfolio-57f27.firebaseapp.com",
  projectId: "portfolio-57f27",
  storageBucket: "portfolio-57f27.firebasestorage.app",
  messagingSenderId: "755773789518",
  appId: "1:755773789518:web:1e4a17fd6ff6737447ba1f",
  measurementId: "G-HHZF5C11TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc , getDocs};