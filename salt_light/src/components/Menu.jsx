// import { pages } from "../data/data.js";
import { util } from "../data/data.js";
import { Link, NavLink } from "react-router";
import React, { useState } from "react";
import { motion } from "framer-motion";

import menu from "/menuWhite.webp";
import close from "/closeWhite.webp";

export function Menu({ IsOpen, toggleMenu ,list=[],axis='row'}) {
  return (
    <>
      <nav className="flex flex-col justify-center items-center text-white gap-14 p-4">

        {/* Toggle Button: Visible only on mobile */}
        <div className="menu-toggle sm:hidden flex">
          <img
            src={IsOpen ? close : menu}
            alt="Toggle Menu"
            aria-label="Toggle Menu"
            className="max-h-4 min-h-2 min-w-4 cursor-pointer"
            onClick={toggleMenu}
          />
        </div> 

        {/* Menu Links */}

        {/* MOTION TO ANIMATE LINKS */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -18 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`flex flex-${axis} sm:flex-row gap-8 sm:gap-8 sm:text-6xl ${
              IsOpen ? "block" : "hidden sm:flex"
            }`}
          >

            {/* CHECK IF LIST IS EMPTY */}
            {list.length > 0 ? <>
              {
                list.map((el) => (
                  <motion.div
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    key={el.id}
                  >
                      <NavLink
                          to={el.name === 'blog' || el.name === 'donate'? `/${el.name}` : `/listings/${el.name}`}
                          className="text-xs font-geist md:opacity-75"
                        >
                          {util.capitilizeText(el.name)}
                        </NavLink> 
                  </motion.div>
                ))
              }
            </> : null}
          </div>
        </motion.div>
      </nav>
    </>
  );
}