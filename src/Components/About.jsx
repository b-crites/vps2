import { useState } from "react";
import MelaniePic from "../Img/Melanie.jpg";
import AlfredoPic from "../Img/Alfredo.jpg";
import CappyPic from "../Img/Cappy.jpg";
import Card from "./Card";
import { useLanguage } from "./LanguageProvider";

export default function ReadMore() {
  const { language, changeLanguage } = useLanguage();
  
  const translations = {
    en:{
      meetTeam: 'Meet Dr. Velez',
      alfredoName: 'Alfredo Velez',
      alfredoTitle: 'Psychiatrist, MD',
      alfredoPreview: 'Dr. Velez is a board-certified psychiatrist who trained at the Temple University School of Medicine and completed a psychiatric residency at Maricopa Integrated Health Systems...',
      alfredoContent: 'Dr. Velez is a board-certified psychiatrist who trained at the Temple University School of Medicine and completed a psychiatric residency at Maricopa Integrated Health Systems. He is also a graduate of the CIIS Psychedelic Assisted Therapies and Research program. This training and subsequent experiences have given him the ability to help patients evaluate their psychedelic therapy options. He also speaks Spanish fluently. Dr. Velez can help provide a safe environment to discuss mental health symptoms and past treatment history to help determine the best course of action. Dr. Velez is a firm believer in gathering in depth knowledge from the patient, and, with their permission, other information sources like family members. He has the ability to synthesize a large amount of information to determine an appropriate diagnosis and collaboratively works with his patients to develop a comprehensive treatment plan.',
      melanieName: 'Melanie Kawashima Velez',
      melanieTitle: 'Psychiatric-Mental Health NP',
      melaniePreview: 'Melanie Kawashima Velez is a psychiatric mental health nurse practitioner (PMHNP) in a community mental health agency in Eugene, Oregon. Her post-doctoral work focused ...',
      melanieContent: 'Melanie Kawashima Velez is a psychiatric mental health nurse practitioner (PMHNP) in a community mental health agency in Eugene, Oregon. Her post-doctoral work focused on psychedelic-assisted psychotherapy. Currently she is one of only a few practitioners offering ketamine-assisted psychotherapy to individuals served by Medicaid in the United States. Dr. Kawashima Velez is a graduate of the California Institute of Integral Studies Center for Psychedelic Therapies & Research program (2022) and is an instructor with the Subtle Winds Psilocybin Facilitator Training Program focusing on community-supported wellness and harm reduction. Melanie received psychedelic/ketamine assisted psychotherapy training from CIIS, Temenos Center, and Polaris Insight Center. For the past two decades she has offered volunteer psychedelic harm reduction support and now also offers integration services and ketamine assisted psychotherapy in her private practice at Velez Psychiatric Services. Dr. Melanie Velez PMHNP also works at the Center for Family Development offering psychiatric medication management and therapy for adult & child psychiatry, addiction medicine, and the perinatal psychiatry programs.',
      cappyName:'Capulet',
      cappyTitle: 'Therapy Frenchie',
      cappyPreview: 'Capulet is a certified therapy animal. She has completed canine good ...',
      cappyContent: 'Capulet is a certified therapy animal. She has completed canine good citizenship training. Her presence is optional during intake and medication management appointments.'
      
    },
    es:{
      meetTeam: 'Conozca al Dr. Vélez',
      alfredoName: 'Alfredo Vélez',
      alfredoTitle: 'Psiquiatra, MD',
      alfredoPreview: 'El Dr. Vélez es un psiquiatra certificado que se capacitó en la Facultad de Medicina de la Universidad de Temple y completó una residencia psiquiátrica en Maricopa Integrated Health Systems...',
      alfredoContent: 'El Dr. Vélez es un psiquiatra certificado que se capacitó en la Facultad de Medicina de la Universidad de Temple y completó una residencia psiquiátrica en Maricopa Integrated Health Systems. También se graduó del programa de Investigación y Terapias Asistidas Psicodélicas del CIIS. Esta formación y las experiencias posteriores le han dado la capacidad de ayudar a los pacientes a evaluar sus opciones de terapia psicodélica. También habla español con fluidez. El Dr. Vélez puede ayudar a brindar un entorno seguro para analizar los síntomas de salud mental y el historial de tratamientos anteriores para ayudar a determinar el mejor curso de acción. El Dr. Vélez cree firmemente en recopilar conocimientos profundos del paciente y, con su permiso, de otras fuentes de información, como los miembros de la familia. Tiene la capacidad de sintetizar una gran cantidad de información para determinar un diagnóstico apropiado y trabaja en colaboración con sus pacientes para desarrollar un plan de tratamiento integral.',
      melanieName: 'Melanie Kawashima Vélez',
      melanieTitle: 'NP Psiquiátrico-Salud Mental',
      melaniePreview: 'Melanie Kawashima Vélez es enfermera practicante de salud mental psiquiátrica (PMHNP) en una agencia comunitaria de salud mental en Eugene, Oregon. Su trabajo postdoctoral se centró...', 
      melanieContent: 'Melanie Kawashima Vélez es enfermera practicante de salud mental psiquiátrica (PMHNP) en una agencia comunitaria de salud mental en Eugene, Oregon. Su trabajo postdoctoral se centró en la psicoterapia asistida por psicodélicos. Actualmente, es una de los pocos profesionales que ofrece psicoterapia asistida con ketamina a personas atendidas por Medicaid en los Estados Unidos. El Dr. Kawashima Vélez se graduó del programa de Investigación y Terapias Psicodélicas del Instituto de Estudios Integrales de California (2022) y es instructor del Programa de Capacitación de Facilitadores de Psilocibina de Vientos Sutiles que se enfoca en el bienestar apoyado por la comunidad y la reducción de daños. Melanie recibió capacitación en psicoterapia asistida por psicodélicos/ketamina de CIIS, Temenos Center y Polaris Insight Center. Durante las últimas dos décadas ha ofrecido apoyo voluntario para la reducción de daños psicodélicos y ahora también ofrece servicios de integración y psicoterapia asistida con ketamina en su práctica privada en Velez Psychiatric Services. La Dra. Melanie Vélez PMHNP también trabaja en el Centro para el Desarrollo Familiar y ofrece terapia y manejo de medicamentos psiquiátricos para psiquiatría de adultos y niños, medicina para adicciones y programas de psiquiatría perinatal.',
      cappyName: 'Capulet',
      cappyTitle: 'Terapia Francesa',
      cappyPreview: 'Capulet es un animal de terapia certificado. Ha completado bien canino...',
      cappyContent: 'Capulet es un animal de terapia certificado. Ha completado el entrenamiento de buena ciudadanía canina. Su presencia es opcional durante las citas de admisión y manejo de medicamentos.'


      
      
      
    }
  }
  const data = [
    {
      name: `${translations[language].alfredoName}`,
      title: `${translations[language].alfredoTitle}`,
      image: AlfredoPic,
      preview: `${translations[language].alfredoPreview}`,
      content:`${translations[language].alfredoContent}`
    }
  ];

  return (
    <>
      <div className="text-center pt-14 mb-10 text-3xl xl:text-5xl font-semibold xl:mb-20 text-white">
        <h2>{translations[language].meetTeam}</h2>
      </div>
      <div className="flex justify-center w-full mb-10 px-4">
        {data.map((data, index) => (

            <Card key={index} name={data.name} title={data.title} image={data.image} preview={data.preview} content={data.content} horizontal={true} />
        ))

        }
      </div>
    </>
  );
}
