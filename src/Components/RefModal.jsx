import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ReferralForm from "./ReferralForm";

const RefModal = (props) =>{


    return(
        <>
      <div
      className= {`absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-70 ${props.refOpen ? "visible" : "hidden"}`}>
        <div className="bg-teal pt-5 rounded-xl">
          <button className="float-right scale-150 top-0 pb-2 pe-2 text-white" onClick={props.refClose}><IoIosCloseCircleOutline /></button>
          <h2 className="text-2xl center pt-2 text-white"></h2>
          <div className="mt-4">
            <ReferralForm fullWidth={false} />
          </div>
        </div>
      </div>
    </>
    );
}


export default RefModal