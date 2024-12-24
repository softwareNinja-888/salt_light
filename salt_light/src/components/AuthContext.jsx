// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [IsOpen,setIsOpen] = useState(false)
  
  function toggleMenu(){
    setIsOpen(!IsOpen)
  }

  function login(){
    setIsLoggedIn(true);
  }

  function logout(){
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ IsLoggedIn, login, logout,IsOpen,toggleMenu }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
    return useContext(AuthContext)
}