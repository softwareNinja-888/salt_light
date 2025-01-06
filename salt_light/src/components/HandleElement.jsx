import { useParams } from "react-router"
import { listingData } from "../data/data"
import { v4 as uuidv4 } from "uuid"
import {ChurchLocator} from './ChurchLocator'

import phone from '/phone.webp'
import email from '/email.webp'


export function HandleElement(){
    const {element} = useParams()

    const churches = listingData.churches
    const events = listingData.events

    const data = churches.find(el=> el.name === element) || events.find(el=> el.name === element)

    return (
        <>

        <div className="flex items-center justify-center text-2xl py-4 underline font-lora">
                {data.name}
            </div>
            <div className="w-full flex justify-center">
                <img src={data.imgUrl} alt='image' className="w-9/12 h-72 rounded-t-2xl" loading="lazy"/>
            </div>
            <div className="w-full flex justify-center font-nunito text-sm">
                Located at: {data.location}
            </div>
            <div className="text-base font-fira font-bold w-8/12 m-auto flex justify-center items-center mt-8">
                {data.mission}
            </div> 
            <div className="flex flex-col items-center">
                <div className="text-xl font-geist mt-6 underline">Our Services</div>
                <ul className="flex flex-col items-center text-xs py-3">
                    {data.services.map((el,ind)=>{
                    return(
                        <li key={uuidv4()}>{el}</li>
                    )
                    }
                    )}
                </ul>
            </div>
            <div className="flex flex-col items-center">          
                <div className="text-xl font-geist mt-6 underline">Contact Us</div>
                <div className="mt-5 flex flex-row gap-5">
                    <div className="flex items-center gap-2">
                        <img className="w-5" src={phone} alt="" />
                        {data.contact.phone}
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src={email} alt="" />
                        {data.contact.email}
                    </div>
                </div>
            </div>

            <div className="flex gap-10 flex-col">
                <div className="text-xl text-center font-geist mt-6 underline">Church Location</div>
                <ChurchLocator churches={[data]}/>
            </div>
        </>
    )
}