import React from "react";
import ServicesHeader from "../Img/ServicesHeader.jpg";
import { useLanguage } from "../Components/LanguageProvider";
import "../Css/Header.css";
import PatientForm from "../Components/PatientForm";

export default function Services() {
  const translations = {
    en: {
      servicesTitle: "Services",
      whoWeHelp: "Who We Help",
      servicesMessage: `Psychiatry is a field of medicine that offers valuable support and treatment to individuals facing a wide range of mental health challenges. It is important to emphasize that seeking help from a psychiatrist is not limited by age, gender, background, or any other factor. No one should ever feel discouraged from reaching out for assistance with their mental health concerns. Whether it's managing stress, dealing with mood disorders, or addressing more complex issues, psychiatry offers a safe and welcoming environment for individuals to explore and address their emotional well-being. Seeking help from a psychiatrist is a courageous step towards a healthier, happier, and more fulfilling life, and it is available to anyone who needs it.`,
    },

    es: {
      servicesTitle: "Servicios",
      whoWeHelp: "A Quién Ayudamos",
      servicesMessage:
        "La psiquiatría es un campo de la medicina que ofrece apoyo y tratamiento valiosos a personas que enfrentan una amplia gama de desafíos de salud mental. Es importante enfatizar que buscar ayuda de un psiquiatra no está limitado por la edad, el sexo, los antecedentes ni ningún otro factor. Nadie debería jamás sentirse desanimado a la hora de buscar ayuda con sus problemas de salud mental. Ya sea que se trate de controlar el estrés, tratar trastornos del estado de ánimo o abordar problemas más complejos, la psiquiatría ofrece un entorno seguro y acogedor para que las personas exploren y aborden su bienestar emocional. Buscar la ayuda de un psiquiatra es un paso valiente hacia una vida más sana, feliz y plena, y está disponible para cualquiera que la necesite.",
    },
  };

  const { language, changeLanguage } = useLanguage();
  return (
    <>
      <div className="serviceContainer">
        <img
          src={ServicesHeader}
          decoding="async"
          loading="lazy"
          alt="Man looking out at ocean"
          className="serviceScale"
        />
      </div>
      <h1 className="italic text-6xl text-white py-10">
        {translations[language].servicesTitle}
      </h1>
      <div className=" my-6 w-full h-auto font-semibold text-4xl bg-white">
        <div className=" w-1/2 ps-10">
          <h2 className="italic py-6 titleHeader">Medication Management</h2>
        </div>
        <div className="w-full xl:flex  ">
          <div className=" lg:w-2/3 w-4/5 mx-auto  p-4 text-xl font-normal">
            <p>
              We will engage in a process of reviewing your psychiatric,
              medical, and social history. As you see fit, we will also review
              past records of mental health treatment. Together, we will decide
              upon what problems we need to treat and how those might fit into
              mental health diagnoses. However, treatment will be individualized
              to you as a person, not to your diagnoses. We will explore the
              many avenues and options that you have on your road to wellness.
            </p>
          </div>
        </div>
      </div>
      <div className=" my-6  h-auto font-semibold text-4xl bg-white">
        <div className="lg:pe-10 ps-10 lg:float-right">
          <h2 className="italic py-6 titleHeader">
            Ketamine Assisted Psychotherapy
          </h2>
        </div>
        <div className="w-full xl:flex  ">
          <div className=" lg:w-2/3 mx-auto  p-4 text-xl font-normal">
            <p>
              You will engage in a psychiatric evaluation to determine your
              appropriateness for therapy. You must be engaged with a
              psychotherapist prior to beginning therapy, and be medically
              appropriate for therapy (relative contraindications include, but
              are not limited to, uncontrolled hypertension and primary
              psychotic disorders such as schizophrenia and Bipolar I disorder).
              You will then have three preparatory sessions followed by a
              medicine session and then an integration session. You may then
              have additional medicine and integration sessions (an average for
              treatment resistant depression is 4-6 sessions). You will have the
              opportunity at each step to decide if you want to go forward with
              treatment, as you will only be charged for services as you receive
              them. Ketamine Assisted Psychotherapy is not covered by insurance,
              and rates will be discussed prior to engagement in services.
            </p>
          </div>
        </div>
      </div>
      <PatientForm />
    </>
  );
}
