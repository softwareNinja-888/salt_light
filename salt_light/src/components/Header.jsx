import { Menu } from "./Menu.jsx"
import { Link } from "react-router"
import { useState } from "react"
// import { motion } from "motion"
import fish from '/fish.png'
export function Header(){

    const [IsOpen,setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!IsOpen)
    }

    return (
        <>
            <div className="flex justify-center">
                
                {/* LOGO */}

                <div className="flex flex-row-reverse justify-center items-center gap-2 ">
                    <img src={fish} alt="fish logo" className="w-10 rotate-180" />
                    <span className="text-xl font-nunito">Salt &amp; Light</span>
                </div>

             
            </div>           

            {/* MENU */}

            <Menu IsOpen={IsOpen} setIsOpen={setIsOpen} toggleMenu={()=>{toggleMenu()}}/>

        </>
    )
}