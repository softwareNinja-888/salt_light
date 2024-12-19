import { Data } from "../App.jsx";
import { util } from "../data/data.js";
import { Link, NavLink } from "react-router";
import React, { useState } from "react";
import { motion } from "framer-motion";

import menu from "/burgerMenu.webp";
import close from "/close.webp";

export function Menu({ IsOpen, toggleMenu }) {
  return (
    <>
      <nav className="flex flex-col justify-center items-center text-black gap-14 p-4">
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -18 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`flex flex-row sm:flex-row gap-4 sm:gap-8 sm:text-6xl ${
              IsOpen ? "block" : "hidden sm:flex"
            }`}
          >
            {Data.arrData.map((el) => (
              <motion.div
                whileHover={{ scale: 1.05, opacity: 1 }}
                key={el.id}
              >
                <NavLink
                  to={`listings/${el.name}`}
                  className="text-xs font-geist md:opacity-75"
                >
                  {util.capitilizeText(el.name)}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
}