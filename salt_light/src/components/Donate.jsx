import { Header } from "./Header.jsx"
import { listingData } from "../data/data.js"
import { Button } from "./Button.jsx"
import place from '/events/eventsA1.webp'
export function Donate(){

    const data = listingData['blog']
    
    const formatedText = 'Donate'
    
    return (
        <>
            <div className="h-96 sm:h-56 py-6 bg-gray-400 bg-cover bg-center">
                <Header/>
                <div className="text-center text-2xl text-white underline font-nunito mt-20">{formatedText}</div>
            </div>        
            
            <main>
                <div className="flex flex-col justify-center items-center w-8/12 border border-black rounded-2xl text-sm font-geist p-2 m-auto">
                    <div className="w-full">
                        <img src={place} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-base font-lora self-center">Title</div>
                        <div className="text-xs px-2">
                            Contribute to the construction of churches in underserved co...
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-3">
                           <Button name='R 10 ' theme="white" width="w-20"/>
                           <Button name='R 10 ' theme="white" width="w-20"/><Button name='R 10 ' theme="white" width="w-20"/><Button name='R 10 ' theme="white" width="w-20"/>
                        </div>
                    </div>
                </div>
            </main>
       </>
    )
}