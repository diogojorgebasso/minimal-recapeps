import { createContext, useContext } from 'react';

export const AuthContext = createContext({
    user: null,
    pro: false,
});

export const useAuth = () => {
    return useContext(AuthContext);
};
