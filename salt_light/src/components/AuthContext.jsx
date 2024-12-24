// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [IsOpen,setIsOpen] = useState(false)
  const [ActiveUser,setActiveUser] = useState(null)

  function toggleMenu(){
    setIsOpen(!IsOpen)
  }

  function signup(userData){
    setIsLoggedIn(true);
    setActiveUser(userData)
  }

  function logout(){
    setIsLoggedIn(false);
    setActiveUser(null)
  }

  return (
    <AuthContext.Provider value={{ IsLoggedIn, signup, logout,IsOpen,toggleMenu,ActiveUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
    return useContext(AuthContext)
}