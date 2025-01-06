import { useParams } from "react-router";
import { listingData } from "../data/data";

export function HandleDonate(){
    const {title} = useParams()

    const data = listingData.donate.filter(el=> el.title === title)
    
    return (
        <h1 className="text-6xl text-red-700">{title}</h1>
    )
}