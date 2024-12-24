import { Link } from "react-router"

export function Button({name,fontSize='xs',width='small',page='/', theme='black'}){
    const path = (page === 'home') ? '/' : page
    return(
        <Link to={path} className={`flex justify-center  items-center text-${fontSize} border-2  rounded-lg  ${width === 'small' ? 'w-20' : width} ${theme === 'black' ? 'border-white text-white': 'border-black text-black' } font-poppins`}>{name}</Link>
    )
}