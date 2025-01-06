import { useParams } from "react-router";
import { listingData } from "../data/data";
import React, { useState } from 'react';


export function HandleBlog(){

    // BLOG EDITOR 

    const {title} = useParams()

    const data = listingData.blog.filter(el=> el.title === title)[0]
    
    return (

        <>
            <div className="main">
                <div className="">
                    <img src="" alt="profile icon" className="" />
                    <div className="">
                        <div className="">{data.author}</div>
                        <div className="">May 30,2024 . 2 min read</div>
                    </div>
                </div>

                <div className="">
                    <div className="">{data.title}</div>
                    <div className="">{data.summary}</div>
                </div>

                <div className="">
                    <img src={data.imgUrl} alt="blog image" className="" />
                </div>

                <div className="">{data.content}</div>

                <div className="">{data.tags}</div>

            </div>
           
        </>
    )
}