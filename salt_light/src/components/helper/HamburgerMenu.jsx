import close from '/new/closeWhite.webp'
import github from '/github.webp'
import insta from '/insta.png'
import linkedin from '/linkedin.png'

import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../helper/AuthContext"

export function HamburgerMenu({ menuOpen, setMenuOpen }){

  // AUTH CONTEXT

  const {IsLoggedIn, login, logout,IsOpen,toggleMenu,ActiveUser} = useAuth()

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
   

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-100 z-40"
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
          <a href="/pages/blog" className="hover:underline">Blogs</a>
          <a href="/pages/events" className="hover:underline">Events</a>
          <a href="/pages/donate" className="hover:underline">Donate</a>
          <a href="/pages/churches" className="hover:underline">Churches</a>
            {IsLoggedIn ? <a href={`/profile/${ActiveUser}`}>Profile</a>:
                          <>
                            <a href="/signup">Login/SignUp</a>
                          </>
            }  
        </nav>
        <div className="flex space-x-4 mt-16 gap-5">
          <a href="#" className="w-10">
            <img src={github} alt="github logo" className="" /> 
          </a>
          <a href="#" className="w-10">
            <img src={linkedin} alt="github logo" className="w-20" />           
          </a>
          <a href="#" className="w-10">
            <img src={insta} alt="github logo" className="" />           
          </a>
        </div>
      </motion.div>
    </>
  );
};
