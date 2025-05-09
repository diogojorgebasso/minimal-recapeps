'use client';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp();
export const firebaseApp = initializeApp(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
