import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import '../Css/Header.css';
import PatientModal from "./PatientRequest";
import { Link } from "react-router-dom";
import RefModal from "./RefModal";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);

        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'
    }

    const [refOpen, setRefOpen] = useState(false)

    const openRef = () =>{
        setRefOpen(true);
        document.body.style.overflow = 'hidden'
    }
    const closeRef = () => {
        setRefOpen(false);
        document.body.style.overflow = 'auto'
    }
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("-translate-x-full");
    }

    return (
        <>
            <div className="bg-teal text-white flex justify-between">
                <a href="#" className="block p-4 text-white font-bold"></a>
                <button onClick={showNav} className="p-4">
                    <GiHamburgerMenu />
                </button>
            </div>

            <div ref={navRef} className="bg-teal z-20 text-red-50 w-64 space-y-6 py-7 px-2 absolute inset-y-0 transform left-0 -translate-x-full transition duration-200 ease-in-out">
                <a className="text-white flex items-center space-x-2 px-4" href="#">Velez Psychiatric Services</a>
                <nav>
                    <Link to="" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300" onClick={showNav}>Home</Link>
                    <Link to="services" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300" onClick={showNav}>Services</Link>
                    <Link to="insurance" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300" onClick={showNav}>Insurance/Payments</Link>
                    <Link to="contact" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300" onClick={showNav}>Contact</Link>
                    <button onClick={openModal} className="w-full block mt-2 py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300 bg-white text-black">Patient Request</button>
                    <button onClick={openRef} className="w-full block mt-2 py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300 bg-white text-black">Make a Referral</button>
                </nav>
            </div>

            {/* Center the PatientModal with backdrop */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-backdrop" onClick={closeModal}></div>
                    <div className="modal-content">
                        <PatientModal isOpen={isOpen} onClose={closeModal} />
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-content">
                    <RefModal  isOpen={refOpen} onClose={closeRef} />
                </div>
            </div>
            )}
        </>
    );
}
