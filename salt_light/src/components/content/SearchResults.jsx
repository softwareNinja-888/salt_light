import { useSearchParams} from "react-router"
import {Header} from '../structure/Header.jsx'
import {ChurchLocator} from '../helper/ChurchLocator.jsx'

import { listingData } from "@data/data.js";
export function SearchResults(){
    const searchParams = useSearchParams()
    const query = searchParams[0].get('q')
    
    const church = listingData.churches.filter(ch => ch.name.toLowerCase().includes(query.toLowerCase()))

    console.log(church)
    return (

        <div className="">
            <Header/>
            <div className="">
                <ChurchLocator churches={church}/>
            </div>
        </div>
    )
}