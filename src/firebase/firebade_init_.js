// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqtnhUtBbm4RVy0o222NF9zgsukZ_suk",
  authDomain: "trees-store.firebaseapp.com",
  projectId: "trees-store",
  storageBucket: "trees-store.firebasestorage.app",
  messagingSenderId: "819944304363",
  appId: "1:819944304363:web:ffb19cc3dfed0eb1e698ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);