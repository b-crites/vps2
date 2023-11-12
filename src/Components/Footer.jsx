import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Link } from 'react-router-dom';

function Footer() {

  const { language, changeLanguage } = useLanguage();


  const translations = {
    en: {
      companyInfo: 'Company Info',
      aboutUs: 'About Us',
      services: 'Services',
      insurance: 'Insurance/Payments',
      contact: 'Contact',
      resources: 'Resources',
      copyright: 'Velez Psychiatric Services. All rights reserved.'

    },
    es:{
      companyInfo: 'Información de la Compañía',
      aboutUs: 'Sobre Nosotros',
      services: 'Servicios',
      insurance: 'Seguros/Pagos',
      contact: 'Contacto',
      resources: 'Recursos',
      copyright: 'Servicios Psiquiátricos de Vélez. Reservados todos los derechos.'

    }
  }


  return (
    <footer className="bg-teal border-t-2 border-white absolute mt-auto w-full text-gray-300 p-8">
      <div className=" mx-auto">
        <div className="grid lg:place-items-center grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{translations[language].companyInfo}</h2>
            <Link
            to="
            2services"
            
            >{translations[language].services}
            </Link>
            <Link to="insurance">{translations[language].insurance}</Link>
            <p>{translations[language].insurance}</p>
            <p>{translations[language].contact}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{translations[language].resources}</h2>
            <p><a href='#'>Resource 1</a></p>
            <p><a href='#'>Resource 2</a></p>
            <p><a href='#'>Resource 3</a></p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Patient Portal</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy;  {translations[language].copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
