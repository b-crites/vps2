import React from "react";
import InsurancePic from "../Img/InsurancePic.jpg"
import PatientForm from "../Components/PatientForm";




export default function Insurance() {




    return(
        <>
        <div className="insuranceContainer">
        <img
          src={InsurancePic}
          decoding="async"
          loading="lazy"
          alt="People jumping in the air"
          className="insuranceScale"
        />
      </div>
      <div className="center">
      <h1 className="italic text-6xl text-white py-10">Insurance</h1>
      </div>


      <div className=" lg:w-1/2 w-10/12 text-2xl bg-white rounded-md mx-auto mb-14 p-5">
        <div className="mx-auto">
            <h2 className="w-full lg:text-3xl text-2xl center font-semibold">Accepted Insurances</h2>
        <ul className=" list-inside list-disc">
            <li>Dmap</li>
            <li>FCH/LifeStance</li>
            <li>Health Net</li>
            <li>Medicare</li>
            <li>Regence/BCBS</li>
            <li>Pacific Source OHP and Commercial</li>
            <li>Trillium OHP</li>
            <li>Providence Out of network (Network in Process)</li>
            <li>(MHN in Process 9-2023)</li>
        </ul>
        </div>
      </div>

      <div className="text-white py-5  w-1/2 mx-auto">
        <h2 className="text-3xl font-semibold ">Please Note</h2>
        <div className=" text-center pt-6 text-2xl">
            <p>
                Any appointments not cancelled at least 24 hours in advance will be charged $150. Insurance does not pay for these charges.
            </p>
        </div>
      </div>
      <div className="text-white  w-1/2 mx-auto py-5">
        <h2 className="text-3xl font-semibold">Billing questions?</h2>
        <div className=" text-center pt-6 text-2xl">
            <p>
                If you have any questions regarding your bill, please contact us at xxx-xxx-xxxx or email us at xxxxx@email.com
            </p>
        </div>
      </div>

      <PatientForm />       
        
        
        </>


    );
}