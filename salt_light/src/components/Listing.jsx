import { useParams } from "react-router"
import { listingData } from "../data/data.js"
import { util } from "../data/data.js"
import { ListRoot } from "./ListRoot.jsx"

import phone from '/phone.webp'
import cross from '/cross.webp'

export function Listing(){

    const {title} = useParams()

    const data = listingData[title]

    return (
        <>
            {/* <h1 className="text-3xl text-red-600">{title}</h1> */}
            <div className="flex flex-col items-center gap-6">
                {data.map(el=>{
                    return (
                    <div className="flex flex-col items-center justify-center w-6/12 border border-black rounded-2xl text-sm font-geist">
                        <div className="w-full">
                            <img src={cross} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                        </div>
                        <div className="flex justify-between gap-6 w-full p-2">
                            <span className="">{util.capitilizeText(el.name)}</span>
                            <span className="">{el.location}</span>
                        </div>
                        <div className="flex flex-col p-2 gap-2">
                            <div className="flex items-center gap-2">
                                <img src={phone} alt="phone icon" className="w-5" />
                                <span className="" >{el.contact}</span>
                            </div>
                            <div className="">{el.services}</div>
                        </div>
                    </div>
                    )
                })}
                {/* 
            <svg viewBox="0 0 128 128">
            <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
            </svg>
           */}
            </div>
        </>
    )
}

