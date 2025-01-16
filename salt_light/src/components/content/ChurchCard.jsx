import { util } from "@data/data.js"
import { useEffect } from 'react'

export function ChurchCard(obj){

    const data = obj.obj

    const imgPath = `${data.categories[0].icon.prefix}bg_64${data.categories[0].icon.suffix}`;
    const formatDistance = parseFloat((data.distance/1000).toFixed(1))
    const latitude = data.geocodes.main.latitude
    const longitude = data.geocodes.main.longitude

   async function getLocation(latitude, longitude) {

    const apiKey = '41dc73de086e480abc0482e32ae1c2a3'; 
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch location data');
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
        return data.results[0].formatted;
    } else {
        throw new Error('No location data found for the given coordinates');
    }
    } catch (error) {
        console.error('Error:', error.message);
        return null; // Return null if an error occurs
      }


    };

    console.log(getLocation(latitude, longitude))

	return (
        <>
            <div onClick={()=>{
                    handleNavigation(obj.name) 
                    }} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg h-[450px] w-12/12  ">
                        <div className="w-full">
                            <img src={imgPath} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-6 w-full p-2">
                            <span className="text-md font-poppins text-center">{data.name}</span>
                            {/*<span className="text-sm text-center font-roboto"><span className="font-bold ">Location at: </span>{[getLocation(latitude, longitude)]}</span>*/}
                        </div>
                        <div className="flex flex-col p-2t justify-between gap-6 w-full p-2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2 text-sm font-lora">
                                    <span className="">Distance: </span>
                                    <span className="" >{`${formatDistance} KM`}</span>
                                </div>
                             
                            </div>
                        </div>

            </div>
        </>
		)
}
