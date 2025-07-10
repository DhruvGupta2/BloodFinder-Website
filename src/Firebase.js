import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG-oGyOeyVJx-q-vMoRMFg4R_h7m0LjRY",
  authDomain: "bloodfinder-99dd3.firebaseapp.com",
  projectId: "bloodfinder-99dd3",
  storageBucket: "bloodfinder-99dd3.appspot.com", // fixed .app to .com
  messagingSenderId: "89754518953",
  appId: "1:89754518953:web:35f1b5bc2b4b23ab8af0b8",
  measurementId: "G-XXMTSCMHW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
