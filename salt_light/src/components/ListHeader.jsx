import { useState } from "react";
import { util } from "../data/data"

import { motion } from "framer-motion"; 
import { Link,NavLink, useNavigate} from "react-router";

import { Search } from "./Search.jsx";
import { Header } from "./Header.jsx";

import menu from '/burgerMenu.webp'
import close from '/close.webp'

import { Menu } from "./Menu.jsx";
export function ListHeader({title,results}){

    const [IsOpen,setIsOpen] = useState(false)
    const navigate = useNavigate()

    function toggleMenu(){
        setIsOpen(!IsOpen)
    }
  
    const formatedText = util.capitilizeText(title)
    const dataLength = {results}.results.length
    
    return (
      <>
        <div className="flex flex-col h-96 py-6 bg-gray-400 bg-cover bg-center">
          <Header/>
          <div className="text-center text-2xl text-white underline font-nunito mt-20">{formatedText}</div>
        </div>
      </>
    )
    // return (
    //   <>
    //     <div className="h-34 py-6 bg-header2 bg-cover bg-center flex flex-col">
    //         <div className=" flex flex-row justify-around items-center gap-2 ">
    //             <div className="text-2xl font-geist">{formatedText}</div>
    //             <Link to={'/'} className="border border-black p-2">Home</Link>
    //         </div>
    //         <nav className="flex flex-col justify-center items-center text-black gap-14 p-4">
    //             {/* Toggle Button: Visible only on mobile */}
    //             <div className="menu-toggle sm:hidden flex">
    //               <img
    //                 src={IsOpen ? close : menu}
    //                 alt="Toggle Menu"
    //                 aria-label="Toggle Menu"
    //                 className="max-h-4 min-h-2 min-w-4 cursor-pointer"
    //                 onClick={toggleMenu}
    //               />
    //             </div>

    //             {/* Menu Links */}
    //             <motion.div
    //               initial={{ opacity: 0, y: -20 }}
    //               animate={{ opacity: 1, y: -18 }}
    //               exit={{ opacity: 0, y: -20 }}
    //               transition={{ duration: 0.5 }}
    //             >
    //               <div
    //                 className={`flex flex-row sm:flex-row gap-4 sm:gap-8 sm:text-6xl ${
    //                   IsOpen ? "block" : "hidden sm:flex"
    //                 }`}
    //               >
    //                 {Data.arrData.map((el) => (
    //                   <motion.div
    //                     whileHover={{ scale: 1.05, opacity: 1 }}
    //                     key={el.id}
    //                   >
    //                     <Link
    //                       to={`/listings/${el.name}`}
    //                       className="text-xs font-geist md:opacity-75"
    //                       onClick={()=>{toggleMenu()}}                          
    //                     >
    //                       {util.capitilizeText(el.name)}
    //                     </Link>
    //                   </motion.div>
    //                 ))}
    //               </div>
    //             </motion.div>
    //         </nav>
    //         <Search/>
    //     </div>
    //   </>
    // )
}