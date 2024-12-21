import { Header } from "./Header.jsx";
import { data, useParams } from "react-router";

import { listingData } from "../data/data.js";
export function Blog(){

    const data = listingData['blog']
    const formatedText = 'Blogs'
    
    return (
        <>
            <div className="h-96 sm:h-56 py-6 bg-gray-400 bg-cover bg-center">
                <Header/>
                <div className="text-center text-2xl text-white underline font-nunito mt-20">{formatedText}</div>
            </div>        
            
            <main>

            </main>


        </>
    )
}