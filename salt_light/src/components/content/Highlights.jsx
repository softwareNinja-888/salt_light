import React from "react";
import { listingData } from "@data/data.js";
import { useNavigate } from "react-router";
import { pages, util } from "@data/data.js";

export function Highlights() {

    const navigate = useNavigate()

    const highlights = [
        listingData.churches[util.randomIndex(util.getCount(listingData.churches))],
        listingData.events[util.randomIndex(util.getCount(listingData.events))],
        listingData.blog[util.randomIndex(util.getCount(listingData.blog))],
        listingData.donate[util.randomIndex(util.getCount(listingData.donate))],
    ];

    function handleNavigation(highlight) {
        navigate(`/pages/${highlight.type}/${highlight.name}`)
    }

    function handleType(type){
        switch (type) {
            case "churches" :
                return "Add Church";
            case "events" :
                return "Add Event";
            case "donate" :
                return "Add Donation";
            case "blog" :
                return "Add Blog";
            default :
                return "Type not recognized";
        }

    }

    return (
        <div className=" py-10 text-center">
            <h2 className="text-3xl font-poppins text-secondary mb-6">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 ">
                {highlights.map((highlight) => (
                    <div
                        key={`${highlight.name || highlight.title}${highlight.id}`}
                        className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg h-[450px]"
                    >
                        <img
                            src={highlight.imgUrl}
                            alt={highlight.name || highlight.author || highlight.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-poppins">{highlight.name || highlight.title}</h3>
                        <p className="text-gray-600 mt-2 text-start font-roboto">{highlight.description || highlight.mission || highlight.summary}</p>
                        <div className="flex justify-center gap-6 mt-3">
                            <button className="font-nunito text-xs mt-4 px-5 py-2 bg-green-500 text-white rounded hover:bg-blue-600 w-8/12" onClick={()=>{handleNavigation(highlight)}}>
                                Explore
                            </button>
                             <button className="font-nunito text-xs mt-4 px-5 py-2 bg-green-500 text-white rounded hover:bg-blue-600 w-8/12" onClick={()=>{handleNavigation(highlight)}}>
                                {handleType(highlight.type)}
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

