import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import banner from "../../../../assets/banner/banner.png";
import Lottie from "lottie-react";
import Animation from "../../../../assets/animated/home.json";
import Seo from "../../../../assets/animated/seo.json";
import Analysis from "../../../../assets/animated/Analysis.json";
import Marketing from "../../../../assets/animated/marketing.json";
import Ppc from "../../../../assets/animated/ppc.json";
import Development from "../../../../assets/animated/development.json";

const Banner = () => {
  return (
    <div className="w-full justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={banner} alt="" />
          <div className="max-w-7xl px-5 mx-auto">
            <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
              <div className="md:w-1/2 text-white">
                <h1 className="md:text-8xl invisible md:visible">
                  Content <br /> Marketing
                </h1>
                <h1 className="md:hidden text-center text-5xl">
                  Content Marketing
                </h1>
                <p className="text-2xl text-center md:text-start mt-8">
                  You can provide the answers that your potential customers are
                  trying to find, so you can become the industry.
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
                  animationData={Animation}
                  loop={true}
                />
                ;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner} alt="" />
          <div className="max-w-7xl px-5 mx-auto">
            <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
              <div className="md:w-1/2 text-white">
                <h1 className="md:text-8xl invisible md:visible">
                  Search <br /> Engine <br /> Optimization
                </h1>
                <h1 className="md:hidden text-center text-5xl">
                  Search Engine Optimization
                </h1>
                <p className="text-2xl text-center md:text-start mt-8">
                  Rank Your Local Business With SEO. Our approach to SEO is
                  uniquely built around what we know works and what we know
                  doesn’t work.
                </p>
                <div className="text-center md:text-start">
                  <button className="px-8 py-2 rounded-full border-0 text-xl hover:bg-black hover:text-white mt-4 btn-primary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Lottie className="md:w-full" animationData={Seo} loop={true} />
                ;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner} alt="" />
          <div className="max-w-7xl px-5 mx-auto">
            <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
              <div className="md:w-1/2 text-white">
                <h1 className="md:text-8xl invisible md:visible">
                  Data <br /> Analysis
                </h1>
                <h1 className="md:hidden text-center text-5xl">
                  Data Analysis
                </h1>
                <p className="text-2xl text-center md:text-start mt-8">
                  Create and manage top-performing social campaigns and start
                  developing a dedicated customer fan base.
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
                  animationData={Analysis}
                  loop={true}
                />
                ;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner} alt="" />
          <div className="max-w-7xl px-5 mx-auto">
            <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
              <div className="md:w-1/2 text-white">
                <h1 className="md:text-8xl invisible md:visible">
                  Social <br /> Marketing
                </h1>
                <h1 className="md:hidden text-center text-5xl">
                  Social Marketing
                </h1>
                <p className="text-2xl text-center md:text-start mt-8">
                  Create and manage top-performing social campaigns and start
                  developing a dedicated customer fan base.
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
                  animationData={Marketing}
                  loop={true}
                />
                ;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner} alt="" />
          <div className="max-w-7xl px-5 mx-auto">
            <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
              <div className="md:w-1/2 text-white">
                <h1 className="md:text-8xl invisible md:visible">
                  PPC <br /> Marketing
                </h1>
                <h1 className="md:hidden text-center text-5xl">
                  PPC Advertising
                </h1>
                <p className="text-2xl text-center md:text-start mt-8">
                  Create, publish, and promote engaging content to generate more
                  traffic and build a dedicated community.
                </p>
                <div className="text-center md:text-start">
                  <button className="px-8 py-2 rounded-full border-0 text-xl hover:bg-black hover:text-white mt-4 btn-primary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Lottie className="md:w-full" animationData={Ppc} loop={true} />
                ;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner} alt="" />
          <div className="max-w-7xl px-5 mx-auto">
            <div className="max-w-7xl mx-auto absolute top-0 banner-text md:flex  justify-between items-center m-auto">
              <div className="md:w-1/2 text-white">
                <h1 className="md:text-8xl invisible md:visible">
                  Web <br /> Development
                </h1>
                <h1 className="md:hidden text-center text-5xl">
                  Web Development
                </h1>
                <p className="text-2xl text-center md:text-start mt-8">
                  You can provide the answers that your potential customers are
                  trying to find, so you can become the industry.
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
                  animationData={Development}
                  loop={true}
                />
                ;
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
