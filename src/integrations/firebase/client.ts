
// Firebase configuration
import { initializeApp, getApps } from 'firebase/app';
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

// Initialize Firebase - only initialize if no apps exist to prevent duplicate error
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Only initialize analytics in browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };
