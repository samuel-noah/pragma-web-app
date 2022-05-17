import React, {useContext, useState, useEffect} from 'react'
import {auth} from './Firebase'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signUp(email, password){
        return createUserWithEmailAndPassword(auth,email, password)
    }

    function logIn (email, password){
        return signInWithEmailAndPassword(auth,email, password)
    }

    function logout(){
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])


    const value = {
        signUp,
        logIn,
        logout,
        currentUser
    }
  return (
    <AuthContext.Provider value={value} >
        {!loading && children}
    </AuthContext.Provider>
  )
}

