"use client";
import { auth } from "@/clientApp";
import { signInWithGoogle } from "../../auth";

export default function Login() {
    const handleWithGoogle = async (event) => {
        event.preventDefault();
        signInWithGoogle()
    }
    return (
        <form >
            <input type="button" onClick={handleWithGoogle} value="Sign in with Google" />
        </form>
    )
}
