import { Header } from "../structure/Header.jsx"
import { Menu } from "../helper/Menu.jsx";
import { Link } from "react-router"
import { pages } from "@data/data.js";
import { UserForm } from "../helper/Form.jsx";

import fish from '/fishWhite.webp'
import place from '/place.webp'

import { useAuth } from "../helper/AuthContext.jsx";
export function SignUp(){

    const {IsLoggedIn,login,logout,IsOpen,toggleMenu} = useAuth()


    return (
        <>
            <div className="flex flex-col h-96 py-6 bg-gray-400 bg-cover bg-center">
                <div className="sm:flex sm:flex-row sm:justify-around">
                    <div className="flex justify-between px-2 mb-8">

                        {/* LOGO */}
                        <div className="flex flex-row-reverse items-center gap-1 cursor-pointer">
                            <img src={fish} alt="fish logo" className="w-5 h-5 rotate-180" />
                            <Link to={'/'} className="text-2xl font-nunito text-white">Salt&amp;Light</Link>
                        </div>
                    </div>           

                    {/* MENU */}
                    <Menu IsOpen={IsOpen} toggleMenu={()=>{toggleMenu()}} list={pages.pagesData} axis={'row'}/>

                </div>

                <div className="text-center text-2xl text-white underline font-nunito mt-20">Sign Up</div>

                <div className="">
                    <UserForm/>
                </div>
            </div>
        </>
    )

}

