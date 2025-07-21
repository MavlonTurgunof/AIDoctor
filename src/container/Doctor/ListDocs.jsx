import React, { useState } from "react";
import { BiCross, BiSearch, BiStar } from "react-icons/bi";
import { Doctors } from "../../../Data/Data";
import Container from "../../components/Container";
import DoctorCard from "./DoctorCard";
import { RxCross1 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

const data = {
  id: 4,
  name: "Karimova Nodira Shavkatovna",
  specialties: "Pediatrician",
  experience: "9 years",
  category: "Second category",
  clinic: "Mother and Child Center",
  location: "Yakkasaray district, Tashkent, Beshyogoch street, 19",
  landmark: "Opposite TashMI",
  workingHours: "Mon - Fri 09:00-18:00",
  initialConsultation: "90,000 UZS",
  followUpConsultation: "80,000 UZS",
  phone: "+998901234570",
  image: "/portrait/img9.jpeg",
  rating: 4.3,
  profile: {
    title: "About the Doctor",
    degree: "Doctor of Medicine (MD)",
    position: "Surgeon of the highest category",
    memberships: [
      "Independent expert on surgery of the Republic of Kazakhstan",
      "Member of the Society of Bariatric and Metabolic Surgeons of Kazakhstan",
      "Member of the International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO)",
    ],
    education: [
      "2000–2006: Higher School of Public Health, Master's degree in Public Health Management, Kazakh-Russian Medical University",
    ],
    workActivities: [
      "2010–2014: General practice, City Clinical Hospital No. 7, Surgeon",
      "2012–2017: Tau Sunkar Clinic, Head of the Department of Multidisciplinary Surgery",
      "2017: Medical Center 'RADA', Deputy Chief Physician for Surgery",
      "2018–2019: Hospital of the Ministry of Internal Affairs of the Republic of Kazakhstan, Surgeon",
      "2018–Present: Chief Physician, Multidisciplinary Medical Center 'Keruen-Medicus'",
    ],
    refresherCourses: [
      "2007: Obstetrics and Gynecology. Antibiotic therapy in obstetric practice, Higher School of Public Health",
      "2007: Endoscopic surgery, KRMU",
      "2010: Modern approaches in proctology, St. Petersburg",
      "2010: Inflammatory diseases of the rectum, AGIUV",
      "2011: Primary specialization in general surgery, AGIUM",
      "2011: Improving therapy for microvascular complications of diabetes mellitus",
      "2012: Instrumental and innovative principles in surgery, KNMU (Asfendiyarov)",
      "2013: Surgical tactics for mechanical jaundice, Syzganov National Center of Surgery",
      "2014: Portal hypertension issues, KNMU (Asfendiyarov)",
      "2014: Operative mammology and urgent surgery in abdominal oncology, KAZNIIOiR, Almaty",
      "2016: Emergency conditions in surgery, RIPOV Almaty",
      "2016: Chronic venous insufficiency treatment principles, AGIUV",
      "2016: Primary specialization in Oncology (chemotherapy, adult mammology), MINOC",
      "2017: Primary specialization in angiosurgery, Ministry of Emergency Surgery",
      "2017: Procedural issues, MINOC",
      "2019: Pediatric gynecology and endoscopy, Higher School of Public Health",
      "2020: Innovative technologies in angiosurgery, VSHOZ",
      "2020: Oncology and oncological surgery, VSHOZ",
      "2021: Organization of healthcare expert activities (independent expertise), VSHOZ",
    ],
    certificates: [
      "2015: Diagnostics and treatment of chronic venous diseases, KAZMNO Almaty",
      "2016: Hernioplasty anatomy, City Clinical Hospital No. 1 named after Pirogov, Moscow",
      "2016: Minimally invasive treatment methods, State Scientific Center of Proctology, Moscow",
      "2018: Phlebology, First Kazakhstan Venous Forum",
    ],
  },
};

function ListDocs() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="relative">
      <div className="flex justify-center items-center bg-[#013040] pt-[130px] gap-2 pb-[20px]">
        <input
          type="text"
          placeholder="Search Doctors"
          className="px-3 py-2 rounded-[10px] border-[#0E91A5] border-2 bg-white outline-none"
        />
        <select className="bg-[white] px-3 py-2 rounded-[10px] outline-none border-2 border-[#0E91A5] text-[#084d58] font-semibold">
          <option value="1">Tashkent</option>
          <option value="2">Namangan</option>
          <option value="3">Andijon</option>
          <option value="4">Samarqand</option>
        </select>
        <button className="p-2.5 rounded-[10px] bg-[#0d91a6] text-white text-[20px]">
          <BiSearch />
        </button>
      </div>
      <div className="bg-[#F5F5F5] py-10">
        <Container>
          <div className="mx-[100px]">
            <div>
              <h1 className="text-[34px] font-semibold">
                Allergist, Tashkent ({Doctors.length})
              </h1>
              <select className="mt-[15px] bg-white px-3 py-2 rounded-[10px] outline-none border-2 border-[#0E91A5] text-[#084d58] font-semibold">
                <option value="1">By Default</option>
                <option value="2">Rating</option>
                <option value="3">By Price</option>
                <option value="4">Experience</option>
              </select>
            </div>
            <div className=" rounded-2xl p-5 my-4 ">
              <div>
                {Doctors.map((doc) => (
                  <DoctorCard data={doc} setOpenModal={setOpenModal} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

const Modal = ({ setOpenModal }) => {
  return (
    <div className="z-50 fixed inset-0 bg-black/90 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg ">
        <div className="flex flex-row  items-center justify-between border-b-1 border-[#0E91A5] pb-2">
          <h2 className="text-xl font-bold ">Register online</h2>
          <button
            onClick={() => setOpenModal(false)}
            className=" bg-[#0E91A5] p-2 rounded-[4px]"
          >
            <RxCross1 size={15} color="white" />
          </button>
        </div>
        <div className="flex flex-row gap-10 my-4 bg-[#0E91A5]/15 rounded-2xl p-4">
          <div>
            <div className="w-32 h-32 rounded-full border-4 border-[#0E91A5] shadow-md shadow-[#0E91A5]">
              <img
                src={`${data.image}`}
                alt="doctor"
                className="object-cover h-full w-full  rounded-full"
              />
            </div>
            <div className="flex gap-2 items-center mt-4">
              <h1 className=" font-semibold text-[14px] text-black">
                Rating: {data.rating}
              </h1>
              <FaStar color="#0E91A5" className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[20px]">{data.name}</h1>
            <div className="flex gap-4 text-neutral-600 text-[18px] mb-2">
              <p>{data.specialties}</p>
            </div>
            <h1 className="text-[16px] mb-2">Experience: {data.experience}</h1>
            <div className="flex justify-start gap-2 items-center">
              <img src="/Clinic.svg" alt="" className="h-8 w-8" />
              <h1 className="text-[16px] ">{data.clinic}</h1>
            </div>
            <h1 className="font-semibold">Appointment at the clinic</h1>
            <p className="text-red-800 text-[16px]">
              {data.initialConsultation}
            </p>
          </div>
        </div>
        <div className="space-y-3 mt-[10px]">
          <div>
            <label htmlFor="" className="font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="px-3 py-2 border-2 border-[#0E91A5] w-full rounded-[5px] outline-none  focus:shadow-md focus:shadow-[#0E91A5] transition-all duration-500"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="px-3 py-2 border-2 border-[#0E91A5] w-full rounded-[5px] outline-none focus:shadow-md focus:shadow-[#0E91A5] transition-all duration-500"
            />
          </div>
        </div>
        <div className="float-end">
          <button className="bg-[#0E91A5] px-3 py-2 text-white font-medium text-[16px] rounded-[5px] mt-[15px] hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0E91A5]">
            Send Requst
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListDocs;
