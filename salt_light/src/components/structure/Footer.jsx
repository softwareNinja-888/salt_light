import logo from '/logo.webp'
import logo2 from '/logo2.jpeg'
import { SocialLinks } from "../helper/SocialLinks.jsx"



export function Footer(){
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-3 bg-theme text-white py-10 text-center h-96 mt-16">
                <div className="flex items-center justify-center">
                    <img src={logo2} alt="" className="w-64 h-44"/>
                </div>
                <div className="font-lora mb-16">&copy; Copyright Salt&Light Ministries 2025</div>
                {/*<div className="font-lora"></div>*/}
                <SocialLinks/>
            </div>
        </>

    )
}