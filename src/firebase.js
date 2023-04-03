import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2cYOQrRtWuJHdiiBIGqwpebH5c8KBFXI",
  authDomain: "chat-1328f.firebaseapp.com",
  databaseURL: "https://chat-1328f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-1328f",
  storageBucket: "chat-1328f.appspot.com",
  messagingSenderId: "149073561909",
  appId: "1:149073561909:web:e240f892d759344b8fe47c",
  measurementId: "G-PBCQ69LR3C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
