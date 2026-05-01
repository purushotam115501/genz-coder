import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// ====== YAHAN APNI FIREBASE CONFIGURATION DALEIN ======
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};
// =======================================================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Make globals for other scripts to use
window.fbAuth = auth;
window.fbDb = db;
window.fbCreateUser = createUserWithEmailAndPassword;
window.fbSignIn = signInWithEmailAndPassword;
window.fbOnAuthStateChanged = onAuthStateChanged;
window.fbSignOut = signOut;
window.fbDoc = doc;
window.fbSetDoc = setDoc;
window.fbGetDoc = getDoc;
