import { Header } from "./Header"
import { Footer } from "./Footer.jsx"
import { listingData } from "../data/data"
import { useParams } from "react-router"
import { v4 as uuidv4 } from "uuid"
import { Button } from "./Button.jsx"

import email from '/email.webp'
import phone from '/phone.webp'
export function Events(){

    const {events} = useParams()

    const data = listingData.events

    console.log(events)
    const eventsData = data.find(el=> el.name === events)
    console.log(eventsData)
    return (
        <>

            <div className="">
                <Header/>
            </div>

            <div className="flex items-center justify-center text-2xl py-4 underline font-lora">
                {eventsData.name}
            </div>
            <div className="w-full flex justify-center">
                <img src={eventsData.imgUrl} alt='image' className="w-9/12 h-72 rounded-t-2xl" loading="lazy"/>
            </div>
            <div className="w-full flex justify-center font-nunito text-sm">
                Located at: {eventsData.location}
            </div>
            <div className="text-base font-fira font-bold w-8/12 m-auto flex justify-center items-center mt-8">
                {eventsData.mission}
            </div> 
            <div className="flex flex-col items-center">
                <div className="text-xl font-geist mt-6 underline">Our Services</div>
                <ul className="flex flex-col items-center text-xs py-3">
                    {eventsData.services.map((el,ind)=>{
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
                        {eventsData.contact.phone}
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src={email} alt="" />
                        {eventsData.contact.email}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}