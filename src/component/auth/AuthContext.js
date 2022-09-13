import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase/firebase'
import { Navigate } from 'react-router-dom';
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    };

    const logOut = () => {
        return signOut(auth);
    };

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        return (

            <Navigate to="/signup" />
        );
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser.displayName);
            setUser(currentUser);

            localStorage.setItem("login", true);
            localStorage.setItem('token',currentUser.accessToken);

        });
        return () => {
            unsubscribe();
            localStorage.setItem("login",false);
            localStorage.clear();
        
                };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logOut, signIn, googleSignIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
