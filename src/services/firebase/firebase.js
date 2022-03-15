import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyJCZ-auzjfWAE-cfPjpxfqYMR2jQzRkw",
  authDomain: "coder-react-app.firebaseapp.com",
  projectId: "coder-react-app",
  storageBucket: "coder-react-app.appspot.com",
  messagingSenderId: "206206983940",
  appId: "1:206206983940:web:c4bb0b31e2c426fe327a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoredb = getFirestore(app)