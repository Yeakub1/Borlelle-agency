import React from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../../../../assets/images/details.png";

const SarvicesDetails = () => {
  const services = useLoaderData();
  const { Title } = services;
  return (
    <div className="">
      <div
        className="w-full banner-bg text-white relative"
        style={{
          backgroundImage: `url("${banner}")`,
        }}
      >
        <h1 className="text-5xl font-bold italic top-1/2 left-1/2 absolute -translate-x-1/2 ">
          Services Details
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <h1>{Title}</h1>
      </div>
    </div>
  );
};

export default SarvicesDetails;
