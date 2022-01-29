import { createContext, useContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [session, setSession] = useState({})

  const authProvider = new GoogleAuthProvider()
  const auth = getAuth()

  async function signIn() {
    const result = await signInWithPopup(auth, authProvider)
    const { user } = result
    setSession({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      isAdmin: user.email === 'josee.souzaaa@gmail.com' ? true : false
    })
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
