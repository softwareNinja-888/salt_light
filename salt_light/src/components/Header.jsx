import { Menu } from "./Menu.jsx"
import { Link, useLocation, useParams } from "react-router"
import { useState } from "react"
import { Search } from "./Search.jsx"
import { Button } from "./Button.jsx"

import { useAuth } from "./AuthContext.jsx"

import { pages, util } from "../data/data.js";

// import { motion } from "motion"

import fish from '/fishWhite.webp'
export function Header(){


    // FOR MENU
    // const [IsOpen,setIsOpen] = useState(false)

    // TO DYANMICALLY DISPLAY CONTENT
    const {IsLoggedIn, login, logout,IsOpen,toggleMenu,ActiveUser} = useAuth()

    const url = useLocation().pathname
    const FormatUrl = url.substring(url.lastIndexOf('/'))
    let page = FormatUrl.slice(FormatUrl.indexOf('/') + 1)

    page = page === '' ? "Home" : util.capitilizeText(page)
    page = page.includes('%') ? '' : page;


    // FUNCTIONS TO TOGGLE STATES

    return (
        <>
            <div className="flex flex-col h-full py-6 bg-gray-400 bg-cover bg-center">
            <div className="sm:flex sm:flex-row sm:justify-around">
                <div className="flex justify-between px-2 mb-2">

                    {/* LOGO */}
                    <div className="flex flex-row-reverse items-center gap-1 cursor-pointer">
                        <img src={fish} alt="fish logo" className="w-5 h-5 rotate-180" />
                        <Link to={'/'} className="text-2xl font-nunito text-white">Salt&amp;Light</Link>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-2">
                    
                        {IsLoggedIn ? <Button name={ActiveUser} fontSize="sm" page={`/profile/${ActiveUser}`} width="w-32"/> : <>
                            <Button name="Log in" page="/login"/>
                            <Button name="Sign Up" page="/signup"/>
                        </>}
                    </div>
                </div>           

                {/* MENU */}
                <Menu IsOpen={IsOpen} toggleMenu={()=>{toggleMenu()}} list={pages.pagesData} axis={'row'}/>

            </div>
            
            <div className="">
                {/* SEACRH */}
                <Search/>
            </div>

            
            <div className="text-center text-2xl text-white underline font-nunito mt-20">{page === 'Search' ? `${page} Results` :page}</div>

        </div>
        </>
    )
}

