import { createContext, useContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../services/firebaseConfig'
import { useRouter } from 'next/router'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [session, setSession] = useState({})
  const route = useRouter()

  const authProvider = new GoogleAuthProvider()
  const auth = getAuth()

  async function signIn() {
    const result = await signInWithPopup(auth, authProvider)
    console.log(result)
    const { user } = result
    setSession({
      id: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      isAdmin: user.email === 'josee.souzaaa@gmail.com' ? true : false
    })

    if (user.email === 'josee.souzaaa@gmail.com') {
      route.push(`/admin/${user.uid}`)
    } else {
      route.push(`/user/${user.uid}`)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, session }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
