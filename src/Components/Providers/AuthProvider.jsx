/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    





    const handleUpdateProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authentications =  {
        user, loading , createUser, signInUser, logOut, handleUpdateProfile
    }
    return ( 
       <AuthContext.Provider value={authentications}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
