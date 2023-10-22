import { useState } from "react";
import PatientModal from "./PatientRequest";


export default function PatientModalBtn(){

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () =>{
      setIsOpen(true)
    }
  
    const closeModal = () => {
      setIsOpen(false)
    }
  

    return(

      <>
      <button onClick={openModal} className="bg-red-300 p-4">Open</button>
      <PatientModal isOpen={isOpen} onClose={closeModal} />
    </>

    );
}