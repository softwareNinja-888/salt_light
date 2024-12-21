import { Menu } from "./Menu.jsx"
import { Link } from "react-router"
import { useState } from "react"
import { Search } from "./Search.jsx"
import { Button } from "./Button.jsx"

import { pages } from "../data/data.js";

// import { motion } from "motion"

import fish from '/fishWhite.webp'
export function Header(){

    // FOR MENU
    const [IsOpen,setIsOpen] = useState(false)

    // TO DYANMICALLY DISPLAY CONTENT
    const [LoggedIn,setLoggedIn] = useState(false)

    // FUNCTIONS TO TOGGLE STATES
    function toggleMenu(){
        setIsOpen(!IsOpen)
    }
    function toggleLogin(){
      setLoggedIn(!LoggedIn)
    }

    return (
        <>
            <div className="sm:flex sm:flex-row sm:justify-around">
                <div className="flex justify-between px-2 mb-8">

                    {/* LOGO */}
                    <div className="flex flex-row-reverse items-center gap-1 cursor-pointer">
                        <img src={fish} alt="fish logo" className="w-5 h-5 rotate-180" />
                        <Link to={'/'} className="text-2xl font-nunito text-white">Salt&amp;Light</Link>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-2">
                        {LoggedIn ? <Button name={'Profile'} fontSize="sm" page="/profile"/> : <>
                            <Button name="Log in" page="/login"/>
                            <Button name="Sign Up" page="/signin"/>
                        </>}
                    </div>
                </div>           

                {/* MENU */}
                <Menu IsOpen={IsOpen} setIsOpen={setIsOpen} toggleMenu={()=>{toggleMenu()}} list={pages.pagesData} axis={'row'}/>

            </div>
            
            <div className="">

                {/* SEACRH */}
                <Search/>
            </div>

        </>
    )
}