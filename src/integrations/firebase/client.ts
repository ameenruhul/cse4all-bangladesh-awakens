
// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCjll27HkTHL0MFpR4p-5faGOQuwkBMvFg",
  authDomain: "cse4all.firebaseapp.com",
  projectId: "cse4all",
  storageBucket: "cse4all.firebasestorage.app",
  messagingSenderId: "66041274595",
  appId: "1:66041274595:web:2922958ce0ee9627d225d6",
  measurementId: "G-97D29R9FLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
