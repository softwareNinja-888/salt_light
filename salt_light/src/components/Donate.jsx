import { listingData } from "../data/data.js"
import { util } from "../data/data.js"
import { Button } from "./Button.jsx"

import { v4 as uuidv4 } from "uuid"
export function Donate(){

    const data = listingData['donate']
    
    return (
        <>      
            <main>
                {data.map(el=>{
                   return( 
                    <div key={el.id} className="flex flex-col justify-center items-center w-8/12 border border-black rounded-2xl text-sm font-geist  m-auto mt-10 gap-5">
                        <div className="w-full">
                            <img src={el.imgUrl} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-base font-lora self-center">{el.title}</div>
                            <div className="text-xs px-2">
                                {el.summary}
                            </div>
                            <div className="grid grid-cols-2 mt-4 gap-3 py-2">
                                {el.amountOptions.map(option=>{
                                    return(
                                        <Button name={util.formatMoney(option,'ZAR')} theme="white" width="w-28"  key={uuidv4()}/>
                                    )
                                })}
                            </div>
                        </div>
                     </div> )
                })}
            </main>
       </>
    )
}