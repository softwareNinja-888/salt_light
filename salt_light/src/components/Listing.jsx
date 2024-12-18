import { useParams } from "react-router"

export function Listing(){
    const {title} = useParams()
    return (
        <h1 className="text-3xl text-green-600">{title}</h1>
    )
}