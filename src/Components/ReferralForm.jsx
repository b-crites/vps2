import React, {useState} from "react";
import axios from "axios";



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



    return(


        <form onSubmit={handleSubmit}
        className="bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 rounded-b-xl">
            <div className="font-semibold col-span-1 lg:col-span-2 mx-auto text-3xl">
                60 Second Referral
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
                 Provider's Name
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
                Provider's Phone Number
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
                  Patient's Name
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
                Patient's Phone Number
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
                Patient's Email
              </label>
            </div>
            <div className=" col-span-1 form__group field">
              <div>Service(s) Requested:</div>

              <select
                className="bg-gray-100 w-full text-black rounded-md p-2  outline-black border  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="service"
                value={formData.service}
                name="Services: "
                
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
    )






















}