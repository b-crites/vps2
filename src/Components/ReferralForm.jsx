import React, {useState} from "react";
import axios from "axios";
import { useLanguage } from "../Components/LanguageProvider";



export default function ReferralForm(props){
    const [formData, setFormData] = useState({
        provName: "",
        provNum: "",
        name: "",
        number:"",
        email: "",
        service:"",
        message:""
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Connected")

        try{
            await axios.post("https://formspree.io/moqovldl", formData);
            alert("Form submitted successfully!")
        }catch (err){
            console.err("Error submitting form:", err);
            alert("There was an error submitting the form. Please try again later.")
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]: value});
    };

    const translations = {
      en:{
        title:`60 Second Referral`,
        provName:`Provider's Name`,
        provNum:`Provider's Phone Number`,
        patName:`Patient's Name`,
        patNum:`Patient's Phone Number`,
        patEmail:`Patient's Email`,
        serviceReq:`Service(s) Requested:`,
        message:`Anything else we should know:`,
        submit:`Submit`,
        medBtn:'Medication Management',
        ketBtn:`Ketamine Assisted Psychotherapy`,
        both:`Both`,
        select:`Select...`

      },
      es:{
        title:`Referencia de 60 Segundos`,
        provName:`Nombre del proveedor`,
        provNum:`Número de teléfono del proveedor`, 
        patName:`Nombre del paciente`,
        patNum: `Número de teléfono del paciente`,
        patEmail: `Correo electrónico del paciente`,
        serviceReq:`Servicio(s) solicitado(s):`,
        message:`¿Algo más que debamos saber?`,
        submit:`Enviar`,
        medBtn:`Gestión de Medicamentos`,
        ketBtn:`Psicoterapia Asistida con Ketamina`,
        both:`Ambos`,
        select: `Seleccionar...`
      
      }
    }

    const { language, changeLanguage } = useLanguage();

    const formHeightClass = props.fullWidth ? "lg:gap-6 gap-1" : "gap-6";
    const formWidthClass = props.fullWidth ? "w-full rounded-b-xl" : "max-w-3xl w-full mb-16";

    return(


        <form onSubmit={handleSubmit}
        className={`${formWidthClass} bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 ${formHeightClass} p-5`}>
            <div className="font-semibold col-span-1 lg:col-span-2 mx-auto text-3xl">
                {translations[language].title}
            </div>
            <div className="col-span-1">
              {/* PROVIDER NAME FIELD */}
              <div className="form__group field">
                <input
                  onChange={handleChange}
                  id="provName"
                  type="input"
                  name="provName"
                  className="form__field"
                  value={formData.provName}
                  placeholder=""
                  required
                />
                <label htmlFor="provName" className="form__label">
                {translations[language].provName}
                </label>
              </div>
            </div>
            <div className="form__group field">
              <input
                onChange={handleChange}
                name="provNum"
                id="provNum"
                type="input"
                className="form__field"
                value={formData.provNum}
                placeholder=""
                required
              />
              <label htmlFor="number" className="form__label">
              {translations[language].provNum}
              </label>
            </div>
            <div className="col-span-1">
              {/* NAME FIELD */}
              <div className="form__group field">
                <input
                  onChange={handleChange}
                  id="name"
                  type="input"
                  name="Patient Phone Number: "
                  className="form__field"
                  value={formData.name}
                  placeholder=""
                  required
                />
                <label htmlFor="name" className="form__label">
                {translations[language].patName}
                </label>
              </div>
            </div>
            {/* PHONE NUMBER FIELD */}
            <div className="form__group field">
              <input
                onChange={handleChange}
                name="Phone Number: "
                id="number"
                type="input"
                className="form__field"
                value={formData.number}
                placeholder=""
                required
              />
              <label htmlFor="number" className="form__label">
              {translations[language].patNum}
              </label>
            </div>
            {/* EMAIL FIELD */}
            <div className="form__group field">
              <input
              onChange={handleChange}
              id="email"
              name="email"
                type="input"
                className="form__field"
                value={formData.email}
                placeholder=""
                required
              />
              <label htmlFor="email" className="form__label">
              {translations[language].patEmail}
              </label>
            </div>
            <div className=" col-span-1 form__group field">
              <div>{translations[language].serviceReq}</div>

              <select
              aria-label="Select"
                className="bg-gray-100 w-full text-black rounded-md p-2  outline-black border  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="service"
                value={formData.service}
                name="Services: "
                
                onChange={handleChange}
              >
                <option value={null}>{translations[language].select}</option>
                <option value="Medication Management">
                  {translations[language].medBtn}
                </option>
                <option value="Ketamine">
                {translations[language].ketBtn}
                </option>
                <option value="Both">{translations[language].both}</option>
              </select>
            </div>
              {/* MESSAGE */}
              <div className="col-span-1 lg:col-span-2 ">
              {translations[language].message}
              <textarea
                aria-label="Message"
                onChange={handleChange}
                value={formData.message}
                id="message"
                name="message"  
                className="w-full border bg-gray-100 border-black"
              />
            </div>
            <div className="col-span-1 lg:col-span-2 w-full">
        <button
          type="submit"
          
          className="rounded-3xl active:scale-95 duration-100 transition hover:bg-red-200 bg-red-50 w-full py-2 px-3"
        >
          {translations[language].submit}
        </button>
      </div>
           
        </form>
    )






















}