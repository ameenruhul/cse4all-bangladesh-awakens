
// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2XK3VlXEaiboV2LRZcgXU_BDiZx5WZGE",
  authDomain: "cse4all-demo.firebaseapp.com",
  projectId: "cse4all-demo",
  storageBucket: "cse4all-demo.appspot.com",
  messagingSenderId: "735811195594",
  appId: "1:735811195594:web:d03ced41d911b05f1958bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
