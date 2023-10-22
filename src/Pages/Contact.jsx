import React from "react";
import ContactHeader from "../Img/ContactHeader.jpg"




export default function Contact() {




    return(
        <>
        <div className="w-full">
            <img className="w-full" src={ContactHeader} alt="Couple standing in a field at sunset" />
        </div>
        
            <div className="text-white">
                <div className="center">
                    <h1 className="italic text-6xl text-white py-10 ">Contact</h1>
                </div>

                <div className="mb-14 center text-white">
                    <p><strong>In case of emergency: </strong>contact the White Bird 24-hour crisis line for free by dialing 541-687-4000 or 1-800-422-7558.</p>
                </div>
                <div className="center mb-10">
                    <p><strong>Additional resources:</strong>
                    <ul className=" space-y-10">
                        <li>Lane Behavioral Health</li>
                        <li>Resource</li>
                        <li>Resource</li>
                        <li>Resource</li>
                    </ul>
                    </p>
                    </div>
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.5482434450305!2d-123.10495532341618!3d44.07203632524072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11fc513cecf31%3A0xdbe643bd02cc293c!2sVelez%20Psychiatric%20Services!5e0!3m2!1sen!2sus!4v1696979981548!5m2!1sen!2sus"
      width="100%"
      height="300"
      className="mx-auto"
      style={{ border: 0 }}
      allowFullScreen
      decoding="async"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
            </div>
        
        </>
    );
}