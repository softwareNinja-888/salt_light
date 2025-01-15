// AuthContext.jsx
import React, { createContext, useContext, useState,useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {

  // MANAGE USER/LOGIN
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [ActiveUser,setActiveUser] = useState(null)

  // MENU HANDLING 
  const [menuOpen, setMenuOpen] = useState(false);

  // LOCATION 
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);


  // FUNCTIONS

  // GET LOCATION
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: 40.6782,
            longitude: -73.9442,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(location)

  // SIGNUP/LOGOUT:
  function signup(userData){
    setIsLoggedIn(true);
    setActiveUser(userData)
  }
  function logout(){
    setIsLoggedIn(false);
    setActiveUser(null)
  }



  return (
    <AuthContext.Provider value={{ IsLoggedIn, signup, logout,menuOpen,setMenuOpen,ActiveUser,location }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
    return useContext(AuthContext)
}