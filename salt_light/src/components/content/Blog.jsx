import { listingData } from "@data/data.js";
import { useNavigate } from "react-router";
export function Blog(){

    const navigate = useNavigate()
    const data = listingData['blog']
    const formatedText = 'Blogs'

    function handleNavigation(title){
        navigate(`/pages/blog/${title}`)
    }
    
    return (
        <>
            <main>
                {data.map(el=>{
                   return( <div key={el.id} onClick={()=>{handleNavigation(el.title)}} className="flex flex-col justify-center items-center w-8/12 border border-black rounded-2xl text-sm font-geist  m-auto mt-10 gap-5">
                        <div className="w-full">
                            <img src={el.imgUrl} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                        </div>

                        <div className="flex flex-col gap-2 p-2">
                            <div className="text-base font-lora self-center">{el.title}</div>
                            <div className="text-xs px-2 font-nunito">
                                {el.summary}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-around font-nunito">
                                    <div className="font-lora">{el.author}</div>
                                    <div className="">{el.date}</div>
                                </div> 
                            </div>
                        </div>
                     </div> )
                })}
            </main>


        </>
    )
}