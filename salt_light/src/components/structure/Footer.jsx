import logo from '/logo.webp'
import logo2 from '/logo2.jpeg'

export function Footer(){
    return (
        <>
            <div className="bg-theme text-white py-10 text-center h-96 mt-16">
                <div className="flex items-center justify-center">
                    <img src={logo2} alt="" className="w-64 h-44"/>
                </div>
                <div className="font-lora">&copy; Copyright 2025 Bayanda Dlamini</div>
                <div className="font-lora">Salt&Light Ministries</div>
            </div>
        </>

    )
}