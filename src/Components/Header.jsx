import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Css/Header.css";
import PatientModal from "./PatientRequest";
import { Link } from "react-router-dom";
import RefModal from "./RefModal";
import { useLanguage } from "./LanguageProvider";

export default function Header() {

  // Patient Modal
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  // Patient Modal End
// Referral Modal Start
  const [refOpen, setRefOpen] = useState(false);

  const openRef = () => {
    setRefOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeRef = () => {
    setRefOpen(false);
    document.body.style.overflow = "auto";
  };
  // Referral End



  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("-translate-x-full");
    
    
  };
// Language Translations
  const translations = {
    en: {
      vpsTitle: 'Velez Psychiatric Services',
      homeNav: 'Home',
      servicesNav: 'Services',
      insuranceNav: 'Insurance/Payments',
      contactNav: 'Contact',
      patientNav: 'Patient Request',
      refNav: 'Make a Referral'
    },
    es: {
      vpsTitle: 'Servicios Psiquiátricos Vélez',
      homeNav: 'Hogar',
      servicesNav: 'Servicios',
      insuranceNav: 'Seguros/Pagos',
      contactNav: 'Contacto',
      patientNav: 'Solicitud del Paciente',
      refNav: 'Hacer una Referencia'

    },
  };

  

  const { language, changeLanguage } = useLanguage();
  

  return (
    <>
      <div className="bg-teal text-white flex justify-between items-center">
  <a href="#" className="block p-4 text-white font-bold">
    {translations[language].vpsTitle}
  </a>
  <button onClick={showNav} className="p-4" aria-label="Open Navigation">
    <GiHamburgerMenu />
  </button>
</div>

      <div
        ref={navRef}
        className="bg-teal z-20 text-red-50 w-64 space-y-6 py-7 px-2 absolute inset-y-0 transform left-0 -translate-x-full transition duration-200 ease-in-out"
      >
      
        <nav>
          <Link
            to="services"
            aria-label="Services"
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300"
            onClick={showNav}
          >
            {translations[language].servicesNav}
          </Link>
          <Link
          aria-label="Insurance and Payments"
            to="insurance"
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300"
            onClick={showNav}
          >
            {translations[language].insuranceNav}
          </Link>
          <Link
          aria-label="Contact"
            to="contact"
            className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300"
            onClick={showNav}
          >
            {translations[language].contactNav}
          </Link>
          <button
          aria-label="Open Patient Request"
            onClick={openModal}
            className="w-full block mt-2 py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300 bg-white text-black"
          >
            {translations[language].patientNav}
          </button>
          <button
          aria-label="Open Provider Referral"
            onClick={openRef}
            className="w-full block mt-2 py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-300 bg-white text-black"
          >
            {translations[language].refNav}
          </button>
        </nav>
        {/* Language Button */}
        <div className="absolute bottom-0 right-2" aria-label="Change to Spanish">
            <div className="">
                <p>{language === 'es' ? 'English' : 'Español'}</p>
            </div>
          <label className="switch">
            <input type="checkbox" onClick={changeLanguage}  />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Center the PatientModal with backdrop */}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-content">
            <PatientModal isOpen={isOpen} onClose={closeModal} />
          </div>
        </div>
      )}

      {refOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="modal-backdrop" onClick={closeRef}></div>
          <div className="modal-content">
            <RefModal refOpen={refOpen} refClose = {closeRef} />
          </div>
        </div>
      )}
    </>
  );
}
