import React from "react";
import ServicesHeader from "../Img/ServicesHeader.jpg";
import { useLanguage } from "../Components/LanguageProvider";
import "../Css/Header.css"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada viverra iaculis. Nulla bibendum ex sem, ut
              vehicula felis dictum a. Nam dapibus tortor a elit pretium porta.
              Nullam non ligula ut felis porttitor imperdiet. Nulla maximus
              metus nibh, ac dapibus sem interdum eu. Maecenas ut nibh mollis
              justo rhoncus sagittis eget at nulla. Donec non sodales nulla. Sed
              sagittis nulla eu lectus elementum, vitae elementum quam lacinia.
              Proin ultrices vehicula neque, a porttitor orci. Curabitur
              scelerisque eget nisi nec elementum. Pellentesque tincidunt vitae
              urna ac cursus. Proin neque arcu, suscipit vel sollicitudin sit
              amet, ultricies dignissim nulla. Nullam cursus, eros nec blandit
              tempor, tellus leo porttitor velit, id convallis nunc lorem id
              ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className=" my-6  h-auto font-semibold text-4xl bg-white">
        <div className="lg:pe-10 ps-10 lg:float-right">
          <h2 className="italic py-6 titleHeader">Ketamine Assisted Psychotherapy</h2>
        </div>
        <div className="w-full xl:flex  ">
          <div className=" lg:w-2/3 mx-auto  p-4 text-xl font-normal">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada viverra iaculis. Nulla bibendum ex sem, ut
              vehicula felis dictum a. Nam dapibus tortor a elit pretium porta.
              Nullam non ligula ut felis porttitor imperdiet. Nulla maximus
              metus nibh, ac dapibus sem interdum eu. Maecenas ut nibh mollis
              justo rhoncus sagittis eget at nulla. Donec non sodales nulla. Sed
              sagittis nulla eu lectus elementum, vitae elementum quam lacinia.
              Proin ultrices vehicula neque, a porttitor orci. Curabitur
              scelerisque eget nisi nec elementum. Pellentesque tincidunt vitae
              urna ac cursus. Proin neque arcu, suscipit vel sollicitudin sit
              amet, ultricies dignissim nulla. Nullam cursus, eros nec blandit
              tempor, tellus leo porttitor velit, id convallis nunc lorem id
              ipsum.
            </p>
          </div>
        </div>
      </div>
      <PatientForm />
    </>
  );
}
