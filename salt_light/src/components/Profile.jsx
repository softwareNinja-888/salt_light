import { useAuth } from "./AuthContext.jsx"
import { Header } from "./Header.jsx" 
import { useParams } from "react-router"
export function Profile(){
    const {name} = useParams()

    const {ActiveUser} = useAuth()

    return (
        <>
            <div className="">
                <Header/>
            </div>
            <div className="text-6xl text-red-700">{ActiveUser}</div>
        </>
    )
}