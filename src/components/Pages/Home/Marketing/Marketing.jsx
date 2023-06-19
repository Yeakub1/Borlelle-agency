import React, { useEffect } from 'react';
import images from "../../../../assets/images/Minimalist Digital .png";
import { BsCheckCircle } from "react-icons/bs";
import LazyLoad from 'react-lazy-load';
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Marketing = () => {
    useEffect(() => {
      Aos.init();
    }, []);
    return (
      <div className="max-w-7xl mx-auto px-5 mt-20">
        <div className="md:flex justify-between items-center">
          <div data-aos="fade-down-right" className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              Best Digital Marketing Solution
            </h1>
            <p className="text-lg mt-5">
              Progravida nibh vel velit auctor alinean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis
              bibendum auctor.
            </p>
            <div className="mt-5 font-semibold">
              <p className="text-xl gap-5 flex items-center">
                <BsCheckCircle className="hover:bg-blue-800 hover:rounded-full hover:text-white" />
                Simply dummy text of the Lorem Ipsum is printing.
              </p>
              <p className="text-xl gap-5 mt-3 flex items-center">
                <BsCheckCircle className="hover:bg-blue-800 hover:rounded-full hover:text-white" />
                Dummy text of the printing and typesetting industry.
              </p>
              <p className="text-xl gap-5 mt-3 flex items-center">
                <BsCheckCircle className="hover:bg-blue-800 hover:rounded-full hover:text-white" />
                Text of the printing and typesetting industry.
              </p>
              <p className="text-xl gap-5 mt-3 flex items-center">
                <BsCheckCircle className="hover:bg-blue-800 hover:rounded-full hover:text-white" />
                Ipsum has been the industry's standard dummy.
              </p>
            </div>
          </div>
          <div data-aos="fade-down-left" className="md:w-1/2">
            <LazyLoad offset={300}>
              <img src={images} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
};

export default Marketing;