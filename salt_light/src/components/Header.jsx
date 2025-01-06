import { Menu } from "./Menu.jsx"
import { Link, useLocation, useParams } from "react-router"
import { useState } from "react"
import { Button } from "./Button.jsx"
import menu from '/burgerMenu.webp'

import { useAuth } from "./AuthContext.jsx"

import { pages, util } from "../data/data.js";

import fish from '/fishWhite.webp'
import { HamburgerMenu } from "./HamburgerMenu.jsx"
export function Header(){

    // TO DYANMICALLY DISPLAY CONTENT

    // MENU STATE

    const [menuOpen, setMenuOpen] = useState(true);
    
    const {IsLoggedIn, login, logout,IsOpen,toggleMenu,ActiveUser} = useAuth()

    const url = useLocation().pathname
    const FormatUrl = url.substring(url.lastIndexOf('/'))
    let page = FormatUrl.slice(FormatUrl.indexOf('/') + 1)

    page = page === '' ? "Home" : util.capitilizeText(page)
    page = page.includes('%') ? '' : page;

    return (
        <>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 text-center">
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
                    {/* <Menu IsOpen={IsOpen} toggleMenu={()=>{toggleMenu()}} list={pages.pagesData} axis={'row'}/> */}

                    <div className="">
                        <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                        {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-poppins">Connecting Believers, Empowering Ministries</h1>
                    <p className="mt-7 text-sm font-geist w-9/12 text-center">Discover churches, Ministries and resources that bring communities closer to Christ. Your journey of faith starts here! </p>
                    <div className="flex justify-center gap-5 mt-8">
                        <button className="mt-6 px-4 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200 text-sm">
                            Find Church Near You
                        </button>
                        <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200 text-sm">
                            Explore Ministries
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div className="flex flex-col h-full py-6 bg-gray-400 bg-cover bg-center"> */}
