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
        <div className="">
          <Header/>
          <div className="text-center text-2xl underline font-nunito mt-10">{formatedText}</div>
        </div>
      </>
    )
}