import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {verses,util} from '@data/data.js'

export function Verse(){

	const [verse, setVerse] = useState('');
    const [reference, setReference] = useState('');

    const verseData = verses.list
    const dataLen = verseData.length - 1

      useEffect(() => {
        // Fetch daily verse using fetch API
        async function fetchVerse(){
            try {
                const response = await fetch(`https://bible-api.com/${verseData[util.randomIndex(dataLen)]}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setVerse(data.text);
                setReference(data.reference);
            } catch (error) {
                console.error('Error fetching daily verse:', error);
            }
        };
        fetchVerse();
    }, []);

	return(
		<>
			<section className="bg-theme text-white py-16 px-6 md:px-16 lg:px-24">
				<h2 className="text-xl font-poppins mb-4 text-center">Bible Verse To Remember</h2>
            	<p className="text-sm font-roboto  text-center mb-2">{verse}</p>
            	<p className="text-xs font-nunito  text-center">- {reference}</p>
			</section>
		</>
	)
}
