import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";
import HomeImg from "../Img/HomeDiv.jpg";
import BetterHelp from "../Img/BetterHelp.jpg";
import About from "../Components/About";
import Rocks from "../Img/Rock-services.jpg";
import PatientModalBtn from "../Components/PatientModalBtn";

function Home() {
  return (
    <>
      <div className="homeContainer mb-14">
        <img
          src={HomeImg}
          decoding="async"
          loading="lazy"
          alt="Home Butterfly"
          className="image "
        />

        <div className="text-overlay z-50 rounded-md text-black py-5 px-6">
          <h2 className="titleHeader xl:text-5xl sm:text-4xl md:text-4xl ">
            Velez Psychiatric Services
          </h2>
          <div>
            <p className="titleHeader xl:text-2xl  md:text-xl">
              Medication Management and Ketamine Assisted Psychotherapy
            </p>
          </div>
        </div>
      </div>

      <div className="assistanceContainer w-full xl:py-10 grid grid-cols-1 md:grid-cols-2">
        <div className="titleHeader pt-5 text-xl xl:text-4xl mb-5 md:m-0 ">
          <strong className="z-10 ms-20 xl:ms-44 xl:mt-10 xl:pb-40 col-span-7">
            Need Assistance?
          </strong>
          <div className="better-Container">
            <img
              className=" shadow-2xl z-10 xl:w-6/12 h-auto ms-10  xl:mt-10 w-4/12 "
              src={BetterHelp}
              alt="Feather calmly falling into hand"
            />
            <div className="betterHelp shadow-3xl"></div>
          </div>
        </div>
        <div className="p mx-auto">
          <p>
            Everybody's needs are different and so let us help assist you in the
            right direction with a consultation appointment. Fill out our
            <strong> New Patient Request </strong> form to get started on to
            better wellness.
          </p>
          <button className=" py-2 px-3 relative top-0 left-0 text-lg  bg-teal hover:bg-red-300 text-white transition duration-200 rounded">
            New Patient Request
          </button>
        </div>
      </div>

      <div className="helpContainer mb-16 grid pb-10 grid-cols-1 md:grid-cols-2 w-full">
        <div className=" text-xl text-black">
          <div className="text-3xl titleHeader-dark">
            <h2 className="relative font-semibold ms-10 mt-10 mb-2">
              <span className=" border-b-4 border-solid border-black -bottom-5">
                What We He
              </span>
              lp With:
            </h2>
            <div className="flex flex-col items-center text-xl">
              <ul className=" mt-8 -2 list-disc text-xl">
                <li>Anxiety</li>
                <li>Depression</li>
                <li>Addiction</li>
                <li>Trauma</li>
                <li>and many more..</li>
              </ul>
            </div>
          </div>
          <div className="center text-lg my-10">
            <p className="w-3/4">
              Our psychiatry practice is dedicated to providing a wide range of
              services tailored to meet the unique needs of each individual. We
              offer compassionate and evidence-based care for a variety of
              mental health concerns. Our team of experienced psychiatrists are committed to creating a safe and inclusive
              environment where all people, regardless of their background,
              gender, or identity, are warmly welcomed and accepted. We believe
              in the power of diversity and respect, and we are here to support
              you on your journey towards improved mental health and well-being.
            </p>
          </div>
          <Link to='services'><button className="float-right py-2 px-3 relative top-0 right-1/4 text-lg  bg-white hover:bg-red-300 text-black hover:text-white transition duration-200 rounded">
            Go to Services Page
          </button>
          </Link>
        </div>
        <div>
          <div className=" w-1/2 ms-36 mt-28  h-auto">
            <img className=" shadow-2xl" src={Rocks} alt="Rocks" />
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

export default Home;
