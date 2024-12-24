import { Header } from "./Header.jsx"
import { listingData } from "../data/data.js"
export function Donate(){

    const data = listingData['blog']
    
    const formatedText = 'Donate'
    
    return (
        <>
            <div className="h-96 sm:h-56 py-6 bg-gray-400 bg-cover bg-center">
                <Header/>
                <div className="text-center text-2xl text-white underline font-nunito mt-20">{formatedText}</div>
            </div>        
{/*             
            <main>

            </main> */}
       </>
    )
}