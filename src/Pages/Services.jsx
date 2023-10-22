import React from "react";
import ServicesHeader from "../Img/ServicesHeader.jpg"





export default function Services() {


    return(
<>
        {/*  We want to list services, then list benefits of therapy and who can benefit from therapy. */}
        {/* Services*/}
        <img src={ServicesHeader}   decoding="async"
          loading="lazy" alt="Man looking out at ocean" />
            <h1 className="italic text-6xl text-white py-10 ">Services</h1>
        <div className="w-full h-auto bg-white">
        
        <h2>Ketamine</h2>
            
        </div>



       {/*  Benefits of Therapy*/}


       {/*   Who can benefit from therapy */}

        </>

    );
}