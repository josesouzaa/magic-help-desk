import { createContext, useContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router'
import { api } from '../services/api'
import { app } from '../services/firebaseConfig'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [session, setSession] = useState({})
  const route = useRouter()

  const authProvider = new GoogleAuthProvider()
  const auth = getAuth()

  async function signIn() {
    const result = await signInWithPopup(auth, authProvider)
    const { user } = result

    const response = await api.get('/admins')
    const { admins } = response.data

    setSession({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      isAdmin: admins.find((admin) => admin.email === user.email) ? true : false
    })

    if (admins.find((admin) => admin.email === user.email)) {
      route.push(`/admin/${user.uid}`)
    } else {
      route.push(`/user/${user.uid}`)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, setSession, session }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
