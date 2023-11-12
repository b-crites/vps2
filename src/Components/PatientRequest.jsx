import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PatientForm from "./PatientForm";

const PatientModal = (props) => {
  return (
    <div
    className={`fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-70 ${
      props.isOpen ? "visible" : "hidden"
    }`}
  >
    <div className="bg-teal pt-5 rounded-xl">
      <button className="float-right scale-150 top-0 pb-2 pe-2 text-white" onClick={props.onClose}>
        <IoIosCloseCircleOutline />
      </button>
            
      <div className="mt-4">
        <PatientForm fullWidth= {true} />
      </div>
    </div>
  </div>
);
};

export default PatientModal;
