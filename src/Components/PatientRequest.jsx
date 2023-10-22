import React from "react";

const PatientModal = (props) => {
  return (
    <>
      <div className={`${props.isOpen ? 'fixed inset-0 top-0 left-1/4 bg-white w-1/2 h-auto z-50 rounded my-5' : "hidden"}`}>
        <div className="p-5 text-black">
          <div>
            <button className="float-right top-0" onClick={props.onClose}>X</button>
            <h2 className="text-2xl">Patient Request Form</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientModal;
