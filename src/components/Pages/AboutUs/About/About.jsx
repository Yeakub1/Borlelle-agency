import React, { useEffect } from 'react';
import banner from "../../../../assets/banner/about.png";
import PageBanner from '../../../Shared/PageBanner/PageBanner';
import Lottie from "lottie-react";
import about from "../../../../assets/animated/about-us.json";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
   useEffect(() => {
     Aos.init();
   }, []);
    return (
      <div className="max-w-7xl mx-auto px-5">
        <PageBanner image={banner} />
        <div className="md:flex items-center mt-20">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Who We are</h1>
            <p className="text-lg mt-3">
              Progravida nibh vel velit auctor alinean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis
              bibendum auctor. Progravida nibh vel velit auctor alinean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequat
              ipsum,Lorem Ipsum.lorem quis bibendum auctor.
            </p>
            <p className="mt-4 text-lg">
              Progravida nibh vel velit auctor alinean sollicitudin, lorem quis
              bibendum auctor.
            </p>
          </div>
          <div data-aos="zoom-in-down" className="md:w-1/2">
            <Lottie className="md:w-full" animationData={about} loop={true} />
          </div>
        </div>
      </div>
    );
};

export default About;