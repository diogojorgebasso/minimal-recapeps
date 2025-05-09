"use client";
import { useAuth } from "@/useAuth";

export default function NeedLogin() {
    const { user, pro } = useAuth();

    if (!user && !pro) {
        return <div>You need to be logged in AND PRO to access this page.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.displayName || user.email}!</h1>
            <p>This is a protected page.</p>
        </div>
    );
}