
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);

    }
    const logOut = () => {

        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { user, signIn, logOut, createUser, updateUserProfile, loading, googleProviderLogin };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;