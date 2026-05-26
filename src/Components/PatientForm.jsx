import React, { useState } from "react";
import axios from "axios";
import { useLanguage } from "./LanguageProvider";

export default function PatientForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    Last_Psychiatric_Provider: "",
    payment: "",
    insuranceCarrier: "",
    memberId: "",
    groupNumber: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post("/api/send", { formType: "patient", ...formData });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHeightClass = props.fullWidth ? "lg:gap-6 gap-1": "gap-6"
  const formWidthClass = props.fullWidth ? "w-full rounded-b-xl  " : "max-w-3xl w-full mb-16";


  const translations = {
    en:{
      medMan:`We will engage in a process of reviewing your psychiatric, medical, and social history. As you see fit, we will also review past records of mental health treatment. Together, we will decide upon what problems we need to treat and how those might fit into mental health diagnoses. However, treatment will be individualized to you as a person, not to your diagnoses. We will explore the many avenues and options that you have on your road to wellness.`,
      ketDiv:`You will engage in a psychiatric evaluation to determine your appropriateness for therapy. You must be engaged with a psychotherapist prior to beginning therapy, and be medically appropriate for therapy (relative contraindications include, but are not limited to, uncontrolled hypertension and primary psychotic disorders such as schizophrenia and Bipolar I disorder). You will then have three preparatory sessions followed by a medicine session and then an integration session. You may then have additional medicine and integration sessions (an average for treatment resistant depression is 4-6 sessions). You will have the opportunity at each step to decide if you want to go forward with treatment, as you will only be charged for services as you receive them. Ketamine Assisted Psychotherapy is not covered by insurance, and rates will be discussed prior to engagement in services.`,
      med:`Medication Mangement`,
      ket:`Ketamine Assisted Pspychotherapy`


    },
    es:{
      medMan:`Llevaremos a cabo un proceso de revisión de su historial psiquiátrico, médico y social. Según considere adecuado, también revisaremos registros anteriores de tratamiento de salud mental. Juntos, decidiremos cuáles son los problemas que necesitamos tratar y cómo estos podrían encajar en diagnósticos de salud mental. Sin embargo, el tratamiento se individualizará según usted como persona, no según sus diagnósticos. Exploraremos las numerosas vías y opciones que tiene en su camino hacia el bienestar.`,
      ketDiv:`"Se llevará a cabo una evaluación psiquiátrica para determinar su idoneidad para la terapia. Debe estar involucrado/a con un psicoterapeuta antes de comenzar la terapia y ser médicamente adecuado/a para la terapia (las contraindicaciones relativas incluyen, entre otras, hipertensión no controlada y trastornos psicóticos primarios como la esquizofrenia y el trastorno bipolar I). A continuación, tendrá tres sesiones preparatorias seguidas de una sesión de medicación y luego una sesión de integración. Posteriormente, puede tener sesiones adicionales de medicación e integración (un promedio para la depresión resistente al tratamiento es de 4 a 6 sesiones). En cada paso, tendrá la oportunidad de decidir si desea continuar con el tratamiento, ya que solo se le cobrará por los servicios que reciba. La Terapia Asistida con Ketamina no está cubierta por el seguro, y las tarifas se discutirán antes de comenzar los servicios.`,
      med:`Gestión de Medicamentos`,
      ket:`Psicoterapia Asistida con Ketamina.`

    }
  }

  const { language, changeLanguage } = useLanguage();

  
  return (
    
    <form
      onSubmit={handleSubmit}
      className={`${formWidthClass} bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 ${formHeightClass} p-5`}
    >
      <div className="font-semibold col-span-1 lg:col-span-2 mx-auto text-3xl">
        Request a Consult
      </div>
      <div className="col-span-1">
              {/* NAME FIELD */}
              <div className="form__group field">
                <input
                  onChange={handleChange}
                  id="name"
                  type="input"
                  name="name"
                  className="form__field"
                  value={formData.name}
                  placeholder=""
                  required
                />
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>
            </div>
            
            {/* PHONE NUMBER FIELD */}
            <div className="form__group field">
              <input
                onChange={handleChange}
                name="number"
                id="number"
                type="input"
                className="form__field"
                value={formData.number}
                placeholder=""
                required
              />
              <label htmlFor="number" className="form__label">
                Phone Number
              </label>
            </div>
            

            {/* EMAIL FIELD */}
            <div className="form__group field">
              <input
              onChange={handleChange}
              name="email"
                id="email"
                type="input"
                className="form__field"
                value={formData.email}
                placeholder=""
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>

            {/* LAST PSYCH FIELD */}
            <div className="form__group field">
              <input
                onChange={handleChange}
                id="Last_Psychiatric_Provider"
                name="Last_Psychiatric_Provider"
                type="input"
                className="form__field"
                value={formData.psych}
                placeholder=""
                required
              />
              <label htmlFor="Last_Psychiatric_Provider" className="form__label">
                Last Psychiatric Provider
              </label>
            </div>

            {/* SERVICE */}
            

            <div className=" col-span-1 form__group field">
              <div>Service(s) Requested:</div>

              <select
              aria-label="Services Requested"
                className="bg-gray-100 w-full text-black rounded-md p-2  outline-black border  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="service"
                value={formData.service}
                name="service"
                required
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Medication Management">
                  Medication Management
                </option>
                <option value="Ketamine">
                  Ketamine Assisted Psychotherapy
                </option>
                <option value="Both">Both</option>
              </select>
            </div>
           
           {/* PAYMENT */}
            <div className=" col-span-1 form__group field">
              <div>Payment Method:</div>

              <select
              aria-label="Payment Method"
              name="payment"
              value={formData.payment}
                onChange={handleChange}
                required
                className="bg-gray-100 w-full text-black rounded-md p-2  outline-black border  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="payment"
              >
                <option value="">Select...</option>
                <option value="Cash">Cash</option>
                <option value="Insurance">Insurance</option>
              </select>
            </div>

            {/* INSURANCE FIELDS (conditional) */}
            {formData.payment === "Insurance" && (
              <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6 border-t pt-4">
                <div className="form__group field">
                  <input
                    onChange={handleChange}
                    id="insuranceCarrier"
                    name="insuranceCarrier"
                    type="text"
                    className="form__field"
                    value={formData.insuranceCarrier}
                    placeholder=""
                    required
                  />
                  <label htmlFor="insuranceCarrier" className="form__label">
                    Insurance Carrier
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    onChange={handleChange}
                    id="memberId"
                    name="memberId"
                    type="text"
                    className="form__field"
                    value={formData.memberId}
                    placeholder=""
                  />
                  <label htmlFor="memberId" className="form__label">
                    Member ID
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    onChange={handleChange}
                    id="groupNumber"
                    name="groupNumber"
                    type="text"
                    className="form__field"
                    value={formData.groupNumber}
                    placeholder=""
                  />
                  <label htmlFor="groupNumber" className="form__label">
                    Group #
                  </label>
                </div>
              </div>
            )}


            {/* MESSAGE */}
            <div className="col-span-1 lg:col-span-2 ">
              Anything else we should know:
              <textarea
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
          disabled={submitting}
          className="rounded-3xl active:scale-95 duration-100 transition hover:bg-red-200 bg-red-50 w-full py-2 px-3 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Submit"}
        </button>
      </div>
      <div className="col-span-2 italic">
        <p>By providing a telephone number and submitting this form, you are consenting to be contacted by SMS text messaging. Message and data rates may apply. You can reply STOP to opt out of further messaging. You are responsible for safeguarding your information in these text messages.</p>
      </div>
      
    </form>
  );
}
