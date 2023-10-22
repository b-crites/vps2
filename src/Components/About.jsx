import { useState } from "react";
import MelaniePic from "../Img/Melanie.jpg";
import AlfredoPic from "../Img/Alfredo.jpg";
import CappyPic from "../Img/Cappy.jpg";
import Card from "./Card";

export default function ReadMore() {
  const data = [
    {
      name: "Alfredo Velez",
      title: "Psychiatrist, MD",
      image: AlfredoPic,
      preview:
        "Dr. Velez is a board-certified psychiatrist who trained at the Temple University School of Medicine and completed a psychiatric residency at Maricopa Integrated Health Systems...",
      content:
        "Dr. Velez is a board-certified psychiatrist who trained at the Temple University School of Medicine and completed a psychiatric residency at Maricopa Integrated Health Systems. He is also a graduate of the CIIS Psychedelic Assisted Therapies and Research program. This training and subsequent experiences have given him the ability to help patients evaluate their psychedelic therapy options. He also speaks Spanish fluently. Dr. Velez can help provide a safe environment to discuss mental health symptoms and past treatment history to help determine the best course of action. Dr. Velez is a firm believer in gathering in depth knowledge from the patient, and, with their permission, other information sources like family members. He has the ability to synthesize a large amount of information to determine an appropriate diagnosis and collaboratively works with his patients to develop a comprehensive treatment plan.",
    },
    {
        name: 'Melanie Kawashima Velez',
        title: 'Psychiatric-Mental Health NP',
        image:MelaniePic,
        preview: 'Melanie Kawashima Velez is a psychiatric mental health nurse practitioner (PMHNP) in a community mental health agency in Eugene, Oregon. Her post-doctoral work focused ...',
        content:'Melanie Kawashima Velez is a psychiatric mental health nurse practitioner (PMHNP) in a community mental health agency in Eugene, Oregon. Her post-doctoral work focused on psychedelic-assisted psychotherapy. Currently she is one of only a few practitioners offering ketamine-assisted psychotherapy to individuals served by Medicaid in the United States. Dr. Kawashima Velez is a graduate of the California Institute of Integral Studies Center for Psychedelic Therapies & Research program (2022) and is an instructor with the Subtle Winds Psilocybin Facilitator Training Program focusing on community-supported wellness and harm reduction. Melanie received psychedelic/ketamine assisted psychotherapy training from CIIS, Temenos Center, and Polaris Insight Center. For the past two decades she has offered volunteer psychedelic harm reduction support and now also offers integration services and ketamine assisted psychotherapy in her private practice at Velez Psychiatric Services. Dr. Melanie Velez PMHNP also works at the Center for Family Development offering psychiatric medication management and therapy for adult & child psychiatry, addiction medicine, and the perinatal psychiatry programs.'
    }, 
    {
        name:'Capulet',
        title:'Therapy Frenchie',
        image: CappyPic,
        preview:'Capulet is a certified therapy animal. She has completed canine good ...',
        content:'Capulet is a certified therapy animal. She has completed canine good citizenship training. Her presence is optional during intake and medication management appointments.'
    }
  ];

  return (
    <>
      <div className="xl:float-right mb-10 ms-8 text-3xl xl:text-5xl font-semibold xl:mb-20 xl:me-60 text-white">
        <h2>Meet Our Team</h2>
      </div>
      <div className="center w-full mb-10 xl:flex xl:justify-center flex-wrap xl:items-center xl:space-x-7 space-y-4 xl:space-y-0">
        {data.map((data, index) => (

            <Card key={index} name={data.name} title={data.title} image={data.image} preview={data.preview} content={data.content} />
        ))
        
        }
      </div>
    </>
  );
}
