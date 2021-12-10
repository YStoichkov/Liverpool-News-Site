import { createContext } from 'react'
import { useContext } from 'react';

export const AuthContext = createContext()

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}