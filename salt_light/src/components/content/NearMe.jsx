import { Header } from "../structure/Header";
import { useAuth } from '../helper/AuthContext.jsx'
import { ChurchCard } from '../content/ChurchCard.jsx'
import { useNavigate } from "react-router"


import React, { createContext, useContext, useState,useEffect } from 'react';


export function NearMe(){

      const {location} = useAuth()
      const [churches, setChurches] = useState([]);
      const [loading, setLoading] = useState(true); 

      const clientId = '4IOCBXOFMZB3WZLZDJPS0H1LA34L2AEBDY5PKICLI2QBXS5X' 
      const clientSecret = 'ADUUN43DGZC025KHIE2UJ5FRCG31YGY0MAAIVTLYGSFIIIJE';

    const accessToken = 'fsq3mzkG2XmmvIXQUOrx42d196QKW3b+JZa6PjqLN/bpH7k=';
    const radius = 5000; // 5 km radius

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `${accessToken}`,
        },
    }


    useEffect(() => {
        async function fetchChurches() {
            setLoading(true); // Start loading before fetching
            try {
                const response = await fetch(
                    `https://api.foursquare.com/v3/places/search?ll=${location.latitude},${location.longitude}&query=church&radius=${radius}`,
                    options
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const churchList = data.results; // Corrected to match Foursquare v3 response structure

                setChurches(churchList); // Set churches state with the fetched data
                setLoading(false); // Stop loading after fetching is complete
            } catch (error) {
                console.error('Error fetching churches:', error);
                setLoading(false); // Stop loading even if an error occurs
            }
        }

        fetchChurches();
    }, [location.latitude, location.longitude, radius, accessToken]); 

    console.log(churches)
    
    const navigate = useNavigate()


    function handleNavigation(church){
        navigate(`/pages/${title || page}/${church}`)
    }

    if (loading) {
        return <div>Loading churches...</div>;
    }

    return(
        <>
             <div className="">  
             {churches.map(el=>{
                return <ChurchCard key={el.fsq_id} obj={el}/>
               })}
            </div>

        </>
    )
}

