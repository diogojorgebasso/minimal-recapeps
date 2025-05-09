'use client';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = getApps().length === 0
    ? initializeApp()
    : getApps()[0];
console.log("app instance", app)
export const firebaseApp = initializeApp(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
