import React, { useState } from "react";
import axios from "axios";

export default function PatientForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service:"",
    Last_Psychiatric_Provider:"",
    message: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Connected")
    
    try {
      await axios.post("https://formspree.io/xeqbozql", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHeightClass = props.fullWidth ? "gap-1": "gap-6"
  const formWidthClass = props.fullWidth ? "w-full rounded-b-xl  " : "lg:w-1/3 mb-16";
  
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
                className="bg-gray-100 w-full text-black rounded-md p-2  outline-black border  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="service"
                value={formData.service}
                name="service"
                
                onChange={handleChange}
              >
                <option value={null}>Select...</option>
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
              value={formData.payment}
                onChange={handleChange}
                className="bg-gray-100 w-full text-black rounded-md p-2  outline-black border  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="payment"
              >
                <option value={null}>Select...</option>
                <option value="Medication Management">Cash</option>
                <option value="Ketamine">Insurance</option>
              </select>
            </div>
            

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
          
          className="rounded-3xl active:scale-95 duration-100 transition hover:bg-red-200 bg-red-50 w-full py-2 px-3"
        >
          Submit
        </button>
      </div>
      
    </form>
  );
}
