import React from 'react';
// import { FaArrowRightLong } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServicesData = ({ service }) => {
    const { name, picture, Title } = service;
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} className="w-full h-[330px]" draggable={false} />
        </figure>
        <div className="px-5 text-center">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className=" mt-3">{Title}</p>
          <div className="flex justify-center">
            <button className="px-6 mt-2 mb-4 py-2 bg-primary border-0 flex items-center gap-3 rounded-full text-white">
              Details <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServicesData;