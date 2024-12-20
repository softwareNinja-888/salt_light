import { Link } from "react-router"

export function Button({name,fontSize='xs',page='/'}){
    const path = (page === 'home') ? '/' : page
    return(
        <Link to={path} className={`flex justify-center  items-center text-${fontSize} border-2 border-white rounded-lg text-white w-20 font-poppins`}>{name}</Link>
    )
}