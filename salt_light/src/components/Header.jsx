import { Menu } from "./Menu.jsx"
import { Link } from "react-router"
import { useState } from "react"
import { Search } from "./Search.jsx"
// import { motion } from "motion"
import fish from '/fish.webp'
export function Header(){

    const [IsOpen,setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!IsOpen)
    }

    return (
        <>
            <div className="sm:flex sm:flex-row sm:justify-around">
                <div className="flex justify-center">

                    {/* LOGO */}

                    <div className="flex flex-row-reverse justify-center items-center gap-3 cursor-pointer">
                        <img src={fish} alt="fish logo" className="w-10 h-10 rotate-180" />
                        <span className="text-3xl font-nunito">Salt&amp;Light</span>
                    </div>



                </div>           

                {/* MENU */}

                <Menu IsOpen={IsOpen} setIsOpen={setIsOpen} toggleMenu={()=>{toggleMenu()}}/>
            </div>
            <div className="">
                {/* SEACRH */}
                <Search/>
            </div>

        </>
    )
}