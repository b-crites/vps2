import { useState } from "react";



export default function Card({name, title, image, preview, content}){


    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  

    return(

        <div className="xl:w-1/4 w-2/3  bg-white rounded-lg shadow-lg overflow-hidden xl:flex xl:flex-col xl:justify-center xl:items-center">
            <div className="">
            <div>
                <img className="object-center object-cover h-auto w-full" src= {image} alt={`${name}'s Photo`} />
            </div>
            <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
                <p className="text-base text-gray-400 font-normal">{title}</p>

            </div>
            <div className="text-lg px-2">
              {isExpanded ? preview : content}
            </div>
            <a className="float-right hover:underline-offset-2 hover:underline font-semibold cursor-pointer me-5" onClick={toggleExpansion}>{isExpanded ? 'Read More' : 'Read Less'}</a>
            </div>

        </div>


    );
}