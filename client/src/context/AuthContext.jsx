import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      try {
        const decoded = JSON.parse(atob(storedToken.split('.')[1])); // JWT decode
        setUser({ id: decoded.id, role: decoded.role });
      } catch (err) {
        console.error('Token decoding failed:', err);
        localStorage.removeItem('jwt'); // 잘못된 토큰 제거
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('jwt', token);
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser({ id: decoded.id, role: decoded.role });
    } catch (err) {
      console.error('Login decoding error:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
