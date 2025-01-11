import close from '/new/closeWhite.webp'

import insta from '/instagram.png'
import x from '/x.png'
import facebook from '/facebook.png'

import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../helper/AuthContext"
import { useNavigate } from "react-router"

export function HamburgerMenu({ menuOpen, setMenuOpen }){

  // AUTH CONTEXT

  const {IsLoggedIn, login, logout,ActiveUser} = useAuth()

  // Animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const navigate = useNavigate()

  function handleNavigation(path){
    navigate(path)
    setMenuOpen()
  }
   

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-theme bg-opacity-100 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={close} onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg text-fontColor font-poppins items-center">
          <div onClick={()=>{handleNavigation("/pages/blog")}} className="hover:underline">Blogs</div>
          <div onClick={()=>{handleNavigation("/pages/events")}}className="hover:underline">Events</div>
          <div onClick={()=>{handleNavigation("/pages/donate")}} className="hover:underline">Donate</div>
          <div onClick={()=>{handleNavigation("/pages/churches")}} className="hover:underline">Churches</div>
            {IsLoggedIn ? <div onClick={()=>{handleNavigation(`profile/${ActiveUser}`)}}>Profile</div>:
                          <>
                            <div onClick={()=>{handleNavigation("/signup")}}>Login/SignUp</div>
                          </>
            }  
        </nav>
        <div className="flex space-x-4 mt-16 gap-5">
          <a href="#" className="w-10">
            <img src={facebook} alt="facebook logo" className="" /> 
          </a>
          <a href="#" className="w-10">
            <img src={x} alt="x logo" className="w-20" />           
          </a>
          <a href="#" className="w-10">
            <img src={insta} alt="insta logo" className="" />           
          </a>
        </div>
      </motion.div>
    </>
  );
};
