// import { util } from "../data/data.js"

export function ChurchCard(obj){

    const data = obj.obj

    const imgPath = `${data.categories[0].icon.prefix}bg_64${data.categories[0].icon.suffix}`;
    console.log(imgPath)

	return (
        <>
            <div onClick={()=>{
                    handleNavigation(obj.name) 
                    }} className="flex flex-col justify-center items-center w-8/12 border border-black rounded-2xl text-sm font-geist  m-auto mt-10 gap-5">
                        <div className="w-full">
                            <img src={imgPath} alt='image' className="w-full h-64 rounded-t-2xl" loading="lazy"/>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-6 w-full p-2">
                            <span className="text-lg underline font-lora">{data.name}</span>
                            <span className="text-xs"><span className="font-bold">Location at: </span>{data.location.formatted_address}</span>
                        </div>
                        <div className="flex flex-col p-2t justify-between gap-6 w-full p-2">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="">Distance: </span>
                                    <span className="" >{`${data.distance/1000} KM`}</span>
                                </div>
                             
                            </div>
                        </div>

            </div>
        </>
		)
}
