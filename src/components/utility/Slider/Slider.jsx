import React from "react";
import LazyLoad from "react-lazy-load";
import { SwiperSlide } from "swiper/react";
import Lottie from "lottie-react";
import banner from '../../../assets/banner/banner.png'

const Slider = ({  heding, subtitle, fasttitle, secondtitle, thirdtitle, animation }) => {
  return (
    <SwiperSlide className="relative">
      <LazyLoad height={762}>
        <img src={banner} alt="" />
      </LazyLoad>

      <div className="max-w-7xl px-5 mx-auto">
        <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
          <div className="md:w-1/2 text-white">
            <h1 className="md:text-8xl invisible md:visible">
              {fasttitle} <br /> {secondtitle} <br /> {thirdtitle}
            </h1>
            <h1 className="md:hidden text-center text-5xl">{heding}</h1>
            <p className="text-2xl text-center md:text-start mt-8">
              {subtitle}
            </p>
            <div className="text-center md:text-start">
              <button className="px-8 py-2 rounded-full border-0 text-xl hover:bg-black hover:text-white mt-4 btn-primary">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Lottie
              className="md:w-full"
              animationData={animation}
              loop={true}
            />
            ;
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Slider;
