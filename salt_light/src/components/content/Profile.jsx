import { useAuth } from "../helper/AuthContext.jsx"
import { Header } from "../structure/Header.jsx" 
import { useNavigate, useParams } from "react-router"
import { listingData } from "@data/data.js";
import { useEffect } from "react";
export function Profile(){
    const {name} = useParams()
    const navigate = useNavigate()
    const {ActiveUser} = useAuth()

    const userExists = listingData.users.some(el=> el.name === name)

    const data = listingData.users.filter(el=>{
        return el.name === ActiveUser
    })

    if(!userExists || data.length === 0){ 
        navigate('/404')
        return null;
    }

    return (
        <>
            <div className="">
                <Header/>
            </div>
            <div className="">
                <div className="font-nunito text-xl px-2 py-4">Welcome back, {data[0].name}</div>
            </div>
            <div className="">

            </div>

        </>
    )
}