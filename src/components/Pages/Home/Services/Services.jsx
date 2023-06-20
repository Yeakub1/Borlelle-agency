import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData';
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
   useEffect(() => {
     Aos.init();
   }, []);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
    .then(data=> setServices(data))
  },[])
  return (
    <div className="max-w-7xl mx-auto px-5 mt-24 mb-20">
      <div className="divider w-1/4 mx-auto"> Our Services </div>
      <h1 className="text-center text-4xl font-bold">
        You Take Growth For Business
      </h1>
      <p className="text-center text-lg mt-4">
        Our strategy includes consistently evolving, to ensure we’re <br />{" "}
        producing exceptional SEO for business.
      </p>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="grid md:grid-cols-3 gap-10 mt-10 justify-center">
        {services.map((service) => (
          <ServicesData key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;