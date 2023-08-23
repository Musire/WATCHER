import React, { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const token = localStorage.getItem('token')

  const isAuthenticated = () => !!token;

  useEffect(() => {
    if (isAuthenticated()) {
      const decodedToken = jwt_decode(token)
      let { id, name } = decodedToken

      setAuth({ id, name })
    } 
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);