import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";
import HomeImg from "../Img/VelezHomeDiv.jpg";
import About from "../Components/About";
import { useLanguage } from "../Components/LanguageProvider";
import { RiMedicineBottleLine } from "react-icons/ri";
import { BiBrain } from "react-icons/bi";
import PatientForm from "../Components/PatientForm";
import ReferralForm from "../Components/ReferralForm";

function Home() {
  const translations = {
    en: {
      needAssistanceTitle: `Need Assistance?`,
      needAssistanceMessage: `
      Everybody's needs are different and so let us help assist you in the right direction with a consultation appointment. Fill out our New Patient Request form to get started on to better wellness.`,
      homeNewPatient: "New Patient Request",
      helpTitle1: "What We He",
      helpTitle2: "lp With:",
      helpMessage: `Our psychiatry practice is dedicated to providing a wide range of services tailored to meet the unique needs of each individual. We offer compassionate and evidence-based care for a variety of mental health concerns. Our team of experienced psychiatrists are committed to creating a safe and inclusive environment where all people, regardless of their background, gender, or identity, are warmly welcomed and accepted. We believe in the power of diversity and respect, and we are here to support you on your journey towards improved mental health and well-being. `,
      anxiety: "Anxiety",
      depression: "Depression",
      addiction: "Addiction",
      trauma: "Trauma",
      manyMore: "And many more",
      servicesBtn: "Go to Services Page",
      homeTitle:`Eugene's Medication Management and Ketamine Assisted Psychotherapy`,
      homeDescription:'At Velez Psychiatric Services, we believe in giving you the help you desire.',
      consultBtn:'Book a Consultation',
      medManage:'Medication Management',
      ketDiv:'Ketamine Assisted Psychotherapy',
      medInfo:`Experience the precision of personalized mental health care
      through detailed interview with a review of your history and
      past treatment. Find peace of mind in a treatment plan crafted
      specifically for you that takes into account all aspects of your
      persona.`,
      ketInfo:`Explore the possibilities for healing and growth with Ketamine
      Assisted psychotherapy, and emerging field in mental health.
      Embrace transformative healing in a safe, supportive space,
      tailored to your particular needs.`

    },
    es: {
      needAssistanceTitle: "¿Necesita Ayuda?",
      needAssistanceMessage:
        "Las necesidades de cada persona son diferentes, por eso permítanos ayudarlo en la dirección correcta con una cita de consulta. Complete nuestro formulario de Solicitud de paciente nuevo para comenzar a lograr un mejor bienestar.",
      homeNewPatient: "Solicitud de Nuevo Paciente",
      helpTitle1: "En qué Ayu",
      helpTitle2: "damos:",
      helpMessage:
        "Nuestra práctica de psiquiatría se dedica a brindar una amplia gama de servicios diseñados para satisfacer las necesidades únicas de cada individuo. Ofrecemos atención compasiva y basada en evidencia para una variedad de problemas de salud mental. Nuestro equipo de psiquiatras experimentados está comprometido a crear un entorno seguro e inclusivo donde todas las personas, independientemente de su origen, género o identidad, sean bienvenidas y aceptadas calurosamente. Creemos en el poder de la diversidad y el respeto, y estamos aquí para apoyarlo en su viaje hacia una mejor salud mental y bienestar.",
      anxiety: "Ansiedad",
      depression: "Depresión",
      addiction: "Adiccion",
      trauma: "Trauma",
      manyMore: "Y muchos mas",
      servicesBtn: "Ir a la página de servicios",
      homeTitle: 'Gestión de Medicamentos de Eugene y Psicoterapia Asistida con Ketamina',
      homeDescription:`En Velez Psychiatric Services, creemos en brindarte la ayuda que deseas.`,
      consultBtn:'Agenda una Consulta',
      medManage:`Gestión de Medicamentos`,
      ketDiv:`Psicoterapia Asistida con Ketamina`,
      medInfo:`Experimenta la precisión de la atención personalizada en salud mental a través de una entrevista detallada con una revisión de tu historial y tratamientos previos. Encuentra tranquilidad en un plan de tratamiento diseñado específicamente para ti, que tiene en cuenta todos los aspectos de tu persona.`,
      ketInfo:`Explora las posibilidades de curación y crecimiento con la psicoterapia asistida con ketamina, un campo emergente en la salud mental. Acepta una curación transformadora en un espacio seguro y de apoyo, adaptado a tus necesidades particulares.`,

    },
  };

  const { language, changeLanguage } = useLanguage();

  const bubbleTimeValues = [
    17, 25, 19, 12, 28, 15, 21, 14, 23, 11, 30, 20, 26, 13, 24, 18, 27, 22, 16,
    29, 38, 10, 41, 5, 55, 69,
  ];

  const targetDiv = useRef(null);

  const scrollToDiv = () => {
    targetDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="homeContainer">
        <div className="image-container">
          <img
            src={HomeImg}
            alt="Mountains"
            className="image lg:scale-100 lg:-translate-y-52 -translate-y-0  "
          />
        </div>

        <div className="text-overlay z-10 rounded-md text-black px-6">
          <h2 className="titleHeader xl:text-5xl font-semibold text-3xl ">
          {translations[language].homeTitle}
          </h2>

          <div className="relative float-left lg:w-1/2 lg:pt-S pt-8">
            <h2 className=" font-semibold lg:text-2xl text-xl  titleHeader roboto">
            {translations[language].homeDescription}
            </h2>
            <button
              onClick={scrollToDiv}
              className="block py-2.5 px-4 rounded transition duration-200 bg-teal text-white hover:bg-red-300 mt-10 active:scale-95"
            >
              {translations[language].consultBtn}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 text-center ">
        <Link to="services">
          <div className="diagonal bg-white hover:text-white py-10">
            <div className="logoScale center pb-5">
              <RiMedicineBottleLine />
            </div>
            <div className="text-2xl ">
              <h2 className="headerUnderline">{translations[language].medManage}</h2>
            </div>
            <div className="w-1/2 font-semibold text-xl mx-auto pt-10">
              <p>
              {translations[language].medInfo}
              </p>
            </div>
          </div>
        </Link>

        <Link to="services">
          <div className="transition bg-red-300 hover:bg-blue-950 duration-300 bubbleContainer hover:text-white py-10">
            <div className="bubble">
              {bubbleTimeValues.map((value, index) => (
                <span key={index} style={{ "--i": value }}></span>
              ))}
            </div>

            <div className="logoScale center pb-5">
              <BiBrain />
            </div>
            <div className="text-2xl ">
              <h2 className="headerUnderline font-semibold">
              {translations[language].ketDiv}
              </h2>
            </div>
            <div className="w-1/2 mx-auto font-semibold text-xl pt-10">
              <p>
              {translations[language].ketInfo}
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div>
        <About />
      </div>
      <div ref={targetDiv}>
        <PatientForm fullWidth={false} />
      </div>
    </>
  );
}

export default Home;
