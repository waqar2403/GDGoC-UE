
// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDHVzC-2KP53oOozdhJskH38kMngp8UIJs",
  authDomain: "gdgocue.firebaseapp.com",
  projectId: "gdgocue",
  storageBucket: "gdgocue.firebasestorage.app",
  messagingSenderId: "996237960138",
  appId: "1:996237960138:web:73f925f50c69991be42533"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };