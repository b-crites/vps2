import { useState } from "react";
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
    setDropdownOpen(false);
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
    setDropdownOpen(false);
    document.body.style.overflow = "hidden";
  };
  const closeRef = () => {
    setRefOpen(false);
    document.body.style.overflow = "auto";
  };
  // Referral End

  // Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
      refNav: 'Make a Referral',
      portalLogin: 'Patient Portal Login',
      formsNav: 'Forms'
    },
    es: {
      vpsTitle: 'Servicios Psiquiátricos Vélez',
      homeNav: 'Hogar',
      servicesNav: 'Servicios',
      insuranceNav: 'Seguros/Pagos',
      contactNav: 'Contacto',
      patientNav: 'Solicitud del Paciente',
      refNav: 'Hacer una Referencia',
      portalLogin: 'Inicio de Sesión del Portal del Paciente',
      formsNav: 'Formularios'
    },
  };

  const { language, changeLanguage } = useLanguage();

  return (
    <>
      <div className="bg-teal text-white">
        <div className="flex justify-between items-center px-6 py-4">
          <Link to="/" className="text-white font-bold text-lg">
            {translations[language].vpsTitle}
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              aria-label="Home"
              className="py-2 px-3 rounded transition duration-200 hover:bg-red-300"
            >
              {translations[language].homeNav}
            </Link>
            <Link
              to="services"
              aria-label="Services"
              className="py-2 px-3 rounded transition duration-200 hover:bg-red-300"
            >
              {translations[language].servicesNav}
            </Link>
            <Link
              aria-label="Insurance and Payments"
              to="insurance"
              className="py-2 px-3 rounded transition duration-200 hover:bg-red-300"
            >
              {translations[language].insuranceNav}
            </Link>
            <Link
              aria-label="Contact"
              to="contact"
              className="py-2 px-3 rounded transition duration-200 hover:bg-red-300"
            >
              {translations[language].contactNav}
            </Link>

            {/* Forms Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="py-2 px-3 rounded transition duration-200 hover:bg-red-300"
                aria-label="Forms Menu"
              >
                {translations[language].formsNav} ▾
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                  <button
                    onClick={openModal}
                    className="block w-full text-left px-4 py-3 text-black hover:bg-gray-100 transition duration-200"
                  >
                    {translations[language].patientNav}
                  </button>
                  <button
                    onClick={openRef}
                    className="block w-full text-left px-4 py-3 text-black hover:bg-gray-100 transition duration-200"
                  >
                    {translations[language].refNav}
                  </button>
                </div>
              )}
            </div>

            <a
              href="https://www.valant.io/prospectivepatient/VelezPsychiatricSvcs/embedded"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 rounded font-semibold bg-white text-black hover:bg-gray-100 transition duration-200"
              aria-label="Patient Portal Login"
            >
              {translations[language].portalLogin}
            </a>
          </nav>
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
