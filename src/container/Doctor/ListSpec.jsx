import React from "react";
import { BiSearch } from "react-icons/bi";
import Container from "../../components/Container";
import { Specialty } from "../../../Data/Data";
import { Link } from "react-router-dom";

function ListSpec() {
  return (
    <div>
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
          <div className=" bg-white p-10 rounded-2xl">
            <h1 className="text-[24px] font-bold mb-[10px]">Doctors</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {Specialty.map((spec) => (
                <div
                  key={spec.letter}
                  className="break-inside-avoid bg-[#0d91a6]/10 p-2 rounded-[10px]"
                >
                  <h2 className="text-[20px] font-bold text-[#0d91a6]">
                    {spec.letter}
                  </h2>
                  <ul className="space-y-1 mt-[10px]">
                    {spec.specialties.map((name, index) => (
                      <li
                        key={index}
                        className="text-neutral-600 hover:text-black"
                      >
                        <Link to={"/doctors/listDocs"}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ListSpec;
