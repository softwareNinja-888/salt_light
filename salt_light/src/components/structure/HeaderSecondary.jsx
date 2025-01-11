// import { Link, useLocation, useParams } from "react-router"
// import { useState } from "react"
// import { useNavigate } from "react-router"

// import menu from '/new/lightMenu.webp'

// import { useAuth } from '../helper/AuthContext.jsx'

// import { HamburgerMenu } from "../helper/HamburgerMenu.jsx"
// import { Search } from "../helper/Search.jsx"


// import { pages, util } from "@data/data.js";

// import fish from '/fish.webp'
// import logo from '/logo.webp'

// export function HeaderSecondary(){

//     const navigate = useNavigate()

//     const {IsLoggedIn, login, logout,menuOpen, setMenuOpen,ActiveUser} = useAuth()


//     function home(){
//         navigate('/')
//     }


//     function handleRedirect(e){
//         e.target.innerText === 'Explore Ministries' ? navigate('/pages/churches') : navigate('/pages/nearme');
//     }


//     const background = ['bg-header','bg-header1','bg-header2','bg-header3','bg-header4',]
//     const index = background.length - 1


//     const url = useLocation().pathname
//     const FormatUrl = url.substring(url.lastIndexOf('/'))
//     let page = FormatUrl.slice(FormatUrl.indexOf('/') + 1)

//     page = page === '' ? "Home" : util.capitilizeText(page)
//     page = page.includes('%') ? '' : page;

//     console.log(page)

// 	return (
//         <>
//             <div className="relative text-white py-10 text-center">
 
//                 <div className="sm:flex sm:flex-row sm:justify-around mb-10 z-100">
                   

//                     <div className="flex items-center justify-between px-3 mb-2 z-100">
//                         {/* LOGO */}
                    
//                         <div>
//                             <img src={logo} alt="fish logo" className=" h-10" onClick={home}/>
//                         </div>
                        
//                         {/* BUTTONS */}

//                         <div className="">
//                             <img  src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
//                             {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
//                         </div>
                        
//                     </div>                    
//                 </div>
//                 <div className={` relative flex flex-col justify-center items-center ${background[util.randomIndex(index)]} bg-bottom-left bg-cover py-20`}>
//                     <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
//                     <div className="relative z-10 text-center flex flex-col justify-center items-center">
//                         <div className="">
//                             Search for {page}
//                         </div>
//                         <Search/>
//                     </div>
                
                    
//                 </div>
//             </div>
//         </>
// 	)
// }