import { Outlet } from "react-router"
import { ListHeader } from "./ListHeader.jsx"
import { useParams } from "react-router"
import { listingData } from "../data/data.js"
export function ListRoot(){

    const {title} = useParams()

    const data = listingData[title]

    return (
        <>
            <ListHeader title={title} results={data}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}