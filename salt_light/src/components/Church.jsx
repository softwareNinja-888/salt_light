import { Header } from "./Header"
import { Footer } from "./Footer.jsx"
import { listingData } from "../data/data"
import { useParams } from "react-router"
import { v4 as uuidv4 } from "uuid"
import { Button } from "./Button.jsx"

import email from '/email.webp'
import phone from '/phone.webp'
export function Church(){

    const {church} = useParams()

    const data = listingData.churches

    console.log(church)
    const churchData = data.find(el=> el.name === church)
    console.log(churchData)
    return (
        <>

            <div className="">
                <Header/>
            </div>

            <div className="flex items-center justify-center text-2xl py-4 underline font-lora">
                {churchData.name}
            </div>
            <div className="w-full flex justify-center">
                <img src={churchData.imgUrl} alt='image' className="w-9/12 h-72 rounded-t-2xl" loading="lazy"/>
            </div>
            <div className="w-full flex justify-center font-nunito text-sm">
                Located at: {churchData.location}
            </div>
            <div className="text-base font-fira font-bold w-8/12 m-auto flex justify-center items-center mt-8">
                {churchData.mission}
            </div> 
            <div className="flex flex-col items-center">
                <div className="text-xl font-geist mt-6 underline">Our Services</div>
                <ul className="flex flex-col items-center text-xs py-3">
                    {churchData.services.map((el,ind)=>{
                    return(
                        <li key={uuidv4()}>{el}</li>
                    )
                    }
                    )}
                </ul>
            </div>
            <div className="flex flex-col items-center">          
                <div className="text-xl font-geist mt-6 underline">Contact Us</div>
                {/* <div className="max-w-10">
                    <svg viewBox="0 0 128 128">
                        <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35"   rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                </div> */}
                <div className="mt-5 flex flex-row gap-5">
                    <div className="flex items-center gap-2">
                        <img className="w-5" src={phone} alt="" />
                        {churchData.contact.phone}
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5" src={phone} alt="" />
                        {churchData.contact.email}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}