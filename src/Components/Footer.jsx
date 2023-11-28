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
      copyright: 'Velez Psychiatric Services. All rights reserved.',
      ketFooter:`Ketamine for Depression`

    },
    es:{
      companyInfo: 'Información de la Compañía',
      aboutUs: 'Sobre Nosotros',
      services: 'Servicios',
      insurance: 'Seguros/Pagos',
      contact: 'Contacto',
      resources: 'Recursos',
      copyright: 'Servicios Psiquiátricos de Vélez. Reservados todos los derechos.',
      ketFooter:`Ketamina para la Depresión`

    }
  }


  return (
    <footer className="bg-teal border-t-2 border-white absolute mt-auto w-full text-gray-300 p-8">
      <div className=" mx-auto">
        <div className="grid lg:place-items-center grid-cols-1 md:grid-cols-3 gap-4">
          <div className='grid-cols-1s'>
            <h2 className="text-xl font-bold mb-2">{translations[language].companyInfo}</h2>
            <Link
            to="services"
            
            ><div>{translations[language].services}</div>
            </Link>
            <Link to="insurance"><div>{translations[language].insurance}</div></Link>
            <Link to='contact'><div>{translations[language].contact}</div></Link>
            
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{translations[language].resources}</h2>
            <p><a href='https://www.psychologytoday.com/us/blog/new-beginning/202208/introduction-ketamine-assisted-psychotherapy'>Psychology Today</a></p>
            <p><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9207256/'>NCBI</a></p>
            <p><a href='https://www.tandfonline.com/doi/full/10.1080/02791072.2019.1587556'>{translations[language].ketFooter}</a></p>
          </div>
          {/* <div>
            <h2 className="text-xl font-bold mb-2">Patient Portal</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div> */}
        </div>
        <div className="mt-8 text-center">
          &copy;  {translations[language].copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
