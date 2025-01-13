import { Header } from "../structure/Header"

export function AboutUs(){
    return (
        <>
            <div className="">
                <Header/>
                <div className="flex flex-col items-center gap-5 py-5">
                    <div className="text-xl text-center font-poppins">
                        About Us
                    </div>
                    <div className="w-10/12 font-roboto text-center">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you
                    </div>
                    <div className="border-2 border-green-500 text-sm font-roboto py-1 px-8">
                        Learn More
                    </div>

                </div>

                <div className="">
                    
                </div>
            </div>
        </>
    )
}