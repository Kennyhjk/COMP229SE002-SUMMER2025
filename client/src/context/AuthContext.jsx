import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('jwt'); 
    if (storedToken) {
      try {
        const decoded = JSON.parse(atob(storedToken.split('.')[1]));
        setUser({ id: decoded.id, role: decoded.role });
      } catch (err) {
        console.error('Token decoding failed:', err);
        sessionStorage.removeItem('jwt'); 
      }
    }
  }, []);

  const login = (token) => {
    sessionStorage.setItem('jwt', token); 
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser({ id: decoded.id, role: decoded.role });
    } catch (err) {
      console.error('Login decoding error:', err);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('jwt'); 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
