import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('jwt')
    if (stored) {
      try {
        const decoded = JSON.parse(atob(stored.split('.')[1])) // JWT decode
        setUser({ id: decoded.id, role: decoded.role })
      } catch (err) {
        console.error('Token decoding failed:', err)
      }
    }
  }, [])

  const login = (token) => {
    localStorage.setItem('jwt', token)
    const decoded = JSON.parse(atob(token.split('.')[1]))
    setUser({ id: decoded.id, role: decoded.role })
  }

  const logout = () => {
    localStorage.removeItem('jwt')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
