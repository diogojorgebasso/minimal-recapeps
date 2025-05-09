"use client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/clientApp";

export default function Login() {
    const signInWithGoogle = async (event) => {
        event.preventDefault();
        signInWithPopup(auth, new GoogleAuthProvider())
    }
    return (
        <form >
            <input type="button" onClick={signInWithGoogle} value="Sign in with Google" />
        </form>
    )
}
