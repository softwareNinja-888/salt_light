import { Header } from "../structure/Header";
import { MapLocation } from "../helper/MapLocation";

export function NearMe(){
    const locationData = [
        {id:0, name:'grace hill church', lat: 37.7749, lng: -122.4194},
        {id:1, name:'washington park church', lat:39.7817, lng:-89.6501},
      ]

    return(
        <>
            <div className="">
                {/* <Header/> */}
                <MapLocation arr={locationData}/>
            </div>

        </>
    )
}
