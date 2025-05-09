'use client';

import {
    initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
