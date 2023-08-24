import React, { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const token = localStorage.getItem('token')
  const isAuth = () => !!token

  useEffect(() => {
    if (isAuth()) {
      const decodedToken = jwt_decode(token)
      setAuth(decodedToken)
    }
  }, [])


  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);