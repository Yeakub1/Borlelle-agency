import React from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../../../../assets/images/details.png";
import PageBanner from "../../../../Shared/PageBanner/PageBanner";

const SarvicesDetails = () => {
  const services = useLoaderData();
  const { Title } = services;
  return (
    <div className="">
      <PageBanner
        image={banner}
        text={"Services details"}/>
      <div className="max-w-7xl mx-auto px-5">
        <h1>{Title}</h1>
      </div>
    </div>
  );
};

export default SarvicesDetails;
