import { Link, useLocation, useParams } from "react-router"
import { useState } from "react"
import { useNavigate } from "react-router"

import menu from '/new/lightMenu.webp'

import { useAuth } from '../helper/AuthContext.jsx'

import { HamburgerMenu } from "../helper/HamburgerMenu.jsx"

import { pages, util } from "@data/data.js";

import fish from '/fish.webp'
import logo from '/logo.webp'

export function Header(){

    // TO DYANMICALLY DISPLAY CONTENT

    const navigate = useNavigate()

    // MENU STATE

    const [menuOpen, setMenuOpen] = useState(false);
    
    const {IsLoggedIn, login, logout,IsOpen,toggleMenu,ActiveUser} = useAuth()

    const url = useLocation().pathname
    const FormatUrl = url.substring(url.lastIndexOf('/'))
    let page = FormatUrl.slice(FormatUrl.indexOf('/') + 1)

    page = page === '' ? "Home" : util.capitilizeText(page)
    page = page.includes('%') ? '' : page;


    // HANDLE FIND CHURCH

    function handleRedirect(e){
        console.log(e)
        e.target.innerText === 'Explore Ministries' ? navigate('/pages/churches') : navigate('/pages/nearme');
    }

    function home(){
        navigate('/')
    }

    return (
        <>
            <div className="relative text-white py-10 text-center">
 
                <div className="sm:flex sm:flex-row sm:justify-around mb-10 z-100">
                   

                    <div className="flex items-center justify-between px-3 mb-2 z-100">
                        {/* LOGO */}
                    
                        <div>
                            <img src={logo} alt="fish logo" className=" h-10" onClick={home}/>
                        </div>
                        
                        {/* BUTTONS */}

                        <div className="">
                            <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                            {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
                        </div>
                        
                    </div>                    
                </div>
                <div className=" relative flex flex-col justify-center items-center bg-header bg-bottom-left bg-cover py-20">
                    <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
                    <div className="relative z-10 text-center flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-poppins">Connecting Believers, Empowering Ministries</h1>
                        <p className="mt-7 text-sm font-geist w-9/12 text-center">Discover churches, Ministries and resources near you. Your journey of faith starts here! </p>
                        <div className="flex justify-center gap-5 mt-8">
                            <button onClick={handleRedirect} className="mt-6 px-4 py-3 bg-green-500 text-white rounded shadow-lg hover:bg-gray-200 text-sm">
                                Find Church Near You
                            </button>
                            <button onClick={handleRedirect} className="mt-6 px-4 py-3 bg-green-500 text-white rounded shadow-lg hover:bg-gray-200 text-sm">
                                Explore Ministries
                            </button>
                        </div>
                    </div>
                
                    
                </div>
            </div>
        </>
    )
}

