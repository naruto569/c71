import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDbD60sd-KISE49H3E5uEMSDxd3W9AQ0Lc",
  authDomain: "c-70-a0326.firebaseapp.com",
  projectId: "c-70-a0326",
  storageBucket: "c-70-a0326.appspot.com",
  messagingSenderId: "607602993901",
  appId: "1:607602993901:web:ef550870c1d3a4537fbae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
