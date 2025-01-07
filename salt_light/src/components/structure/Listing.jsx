import { Outlet, useParams } from "react-router"
import { listingData ,util} from "@data/data.js"
// import { util } from "../data/data.js"
import { useNavigate } from "react-router"

import phone from '/phone.webp'
import email from '/email.webp'
import cross from '/cross.webp'

import React, { useState } from 'react';
export function Listing(){

    const {title} = useParams()
    const {page} = useParams()

    const data = listingData[title || page]
    const navigate = useNavigate()


    function handleNavigation(church){
        navigate(`/pages/${title || page}/${church}`)
    }

    return (
        <>

            <div className="flex flex-col items-center gap-6 py-12">
                {data.map(el=>{
                    return (
                    <div key={el.id} onClick={()=>{
                        handleNavigation(el.name) 
                    }}  className="flex flex-col justify-center items-center w-8/12 border border-black rounded-2xl text-sm font-geist  m-auto mt-10 gap-5">
                        <div className="w-full">
                            <img src={el.imgUrl} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-6 w-full p-2">
                            <span className="text-lg underline font-lora">{util.capitilizeText(el.name)}</span>
                            <span className="text-xs"><span className="font-bold">Location at: </span>{el.location}</span>
                        </div>
                        <div className="flex flex-col p-2t justify-between gap-6 w-full p-2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <img src={phone} alt="phone icon" className="w-5" />
                                    <span className="" >{el.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={email} alt="mail icon" className="w-5" />
                                    <span className="" >{el.contact.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            
            </div>
        </>
    )
}

