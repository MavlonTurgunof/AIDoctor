import React from "react";
import { BiHeart, BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function DocCard({ data, setOpenModal }) {
  return (
    <div className=" bg-white  flex flex-row justify-start gap-11 mb-4 p-5 py-8 rounded-[10px] shadow-xl">
      <div className=" relative">
        <div className="absolute  border-1 border-[#0E91A5] bg-white p-2 rounded-full top-[-10px] right-[-10px]">
          <BiHeart color="red" className="h-6 w-6" />
        </div>
        <div className="w-32 h-32 rounded-full border-4 border-[#0E91A5] shadow-md shadow-[#0E91A5]">
          <img
            src={`${data.image}`}
            alt="doctor"
            className="object-cover h-full w-full  rounded-full"
          />
        </div>
        <div className="flex gap-2 items-center mt-4">
          <h1 className=" font-regular text-[14px] text-black">
            Rating: {data.rating}
          </h1>
          <FaStar color="#0E91A5" className="h-5 w-5" />
        </div>
      </div>
      <div className="  ">
        <Link to={`/doctor/${data.id}`}>
          <h1 className="font-bold text-[20px]">{data.name}</h1>
        </Link>
        <div className="flex gap-4 text-neutral-600 font-regular text-[16px] mb-2">
          <p>{data.specialties}</p>
        </div>
        <h1 className="text-[16px] mb-2 font-regular">
          Experience: {data.experience}
        </h1>
        <div className="font-regular text-[16px]">
          {data.initialConsultation === 0 ? (
            <p>Initial consultation-------free</p>
          ) : (
            <p>
              Initial consultation-------
              <span className="text-red-500 font-medium">
                {data.initialConsultation}
              </span>
            </p>
          )}
          {data.followUpConsultation === 0 ? (
            <p>Follow-up consultation----free</p>
          ) : (
            <p>
              Follow-up consultation----{" "}
              <span className="text-red-500 font-medium">
                {data.followUpConsultation}
              </span>
            </p>
          )}
        </div>
        <div className="flex gap-5 mt-4">
          <button className="bg-[#0E91A5] text-white py-2 px-3 rounded-md ">
            Call +998...
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="border-[2px] border-[#0E91A5] py-2 px-3 rounded-md hover:bg-[#0E91A5] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            Book consultation
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-start gap-2">
          <img src="/Clinic.svg" alt="" className="h-8 w-8" />
          <h1 className="text-black text-[18px] font-bold">{data.clinic}</h1>
        </div>
        <div className="flex justify-start gap-2 items-center mb-2">
          <img src="/Departure.svg" alt="" className="h-8 w-8" />
          <h1 className="text-[16px]">{data.location}</h1>
        </div>

        <div className="">
          <p className="text-[16px] font-bold">
            Doctor's appointment time at the clinic
          </p>
          <h1 className="text-[16px] font-bold text-[#0E91A5]">
            {data.workingHours}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DocCard;
