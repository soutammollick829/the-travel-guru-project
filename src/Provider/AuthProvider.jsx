/* eslint-disable react/prop-types */
import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/__firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
const registerUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
    const authInfo = {
        registerUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;