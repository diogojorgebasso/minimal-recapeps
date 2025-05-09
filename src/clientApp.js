'use client';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_m7G_oi55_JSJyvcStM0tTCpa4E8DIuI",
    authDomain: "mvp-recapeps.firebaseapp.com",
    projectId: "mvp-recapeps",
    storageBucket: "mvp-recapeps.firebasestorage.app",
    messagingSenderId: "480894225286",
    appId: "1:480894225286:web:fd922cff005eff849b7a07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseApp = initializeApp();
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
