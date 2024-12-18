import { useParams } from "react-router"

export function Listing(){
    const {title} = useParams()
    console.log(title);
    return (
        <h1 className="text-3xl text-green-600">{title}</h1>
    )
}