import { Data } from "../App.jsx"
import {util} from '../data/data.js'
import { Link,NavLink} from "react-router";
import React, { useState } from "react";
import { motion } from "framer-motion"; 

import menu from '/burgerMenu.webp'
import close from '/close.webp'

export function Menu({IsOpen,toggleMenu}){

    
    return (
        <>
            <nav className="flex flex-col justify-center items-center text-black gap-14 p-4">
                <div className="menu-toggle  md:hidden flex ">
                    <img src={IsOpen ? `${close}`:`${menu}`} alt="Toggle Menu" aria-label="Toggle Menu" className='max-h-4 min-h-2  min-w-4 cursor-pointer' onClick={toggleMenu}/>
                </div>
                {IsOpen &&
                (<motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:-18}} exit={{opacity:0,y:-20}} transition={{duration:0.5}}>
                    <div className={`${
                        IsOpen ? "block" : "hidden" } flex flex-row md:flex md:mt-0 md:space-x-6 gap-4 `}>     
                            {Data.arrData.map(el=>{
                                return <motion.div whileHover={{scale:1.05, opacity:1 }} >
                                    <NavLink to={`/${el.name}`} className='text-xs font-geist md:opacity-75' key={`${el.id}`}>{util.capitilizeText(el.name)}</NavLink>
                                </motion.div>
                            })}
                    </div>
                </motion.div>)
                }
            </nav>
        </>
        
    )
}