'use client';

import { useState, useEffect } from 'react';
import { AuthContext } from './useAuth';
import { setCookie, deleteCookie } from "cookies-next";
import { onIdTokenChanged } from './auth';

export function AuthProvider({ children, initialUser }) {
    const [user, setUser] = useState(initialUser);
    const [pro, setPro] = useState(false);

    useEffect(() => {
        return onIdTokenChanged(async (user) => {
            console.log("User changed", user?.toJSON());
            if (user) {
                const idToken = await user.getIdToken();
                await setCookie("__session", idToken);
            } else {
                await deleteCookie("__session");
            }
            if (initialUser?.uid === user?.uid) {
                return;
            }
            window.location.reload();

        });
    }, [initialUser]);

    return (
        <AuthContext.Provider
            value={{
                user,
                pro: pro ?? false,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


