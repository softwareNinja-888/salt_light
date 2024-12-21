import { Link } from "react-router"

export function Button({name,fontSize='xs',width='small',page='/'}){
    const path = (page === 'home') ? '/' : page
    return(
        <Link to={path} className={`flex justify-center  items-center text-${fontSize} border-2 border-white rounded-lg text-white ${width === 'small' ? 'w-20' : width} font-poppins`}>{name}</Link>
    )
}