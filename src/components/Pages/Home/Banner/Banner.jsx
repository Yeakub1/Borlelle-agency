import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Animation from "../../../../assets/animated/home.json";
import Seo from "../../../../assets/animated/seo.json";
import Analysis from "../../../../assets/animated/Analysis.json";
import Marketing from "../../../../assets/animated/marketing.json";
import Ppc from "../../../../assets/animated/ppc.json";
import Development from "../../../../assets/animated/development.json";
import Slider from "../../../utility/Slider/Slider";

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
        <SwiperSlide>
          <Slider
            fasttitle={"Content"}
            secondtitle={"Marketing"}
            heding={"Content Marketing"}
            subtitle={
              "You can provide the answers that your potential customers are trying to find, so you can become the industry."
            }
            animation={Animation}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            fasttitle={"Search"}
            secondtitle={"Engine"}
            thirdtitle={"Optimization"}
            heding={"Search Engine Optimization"}
            subtitle={
              "Rank Your Local Business With SEO. Our approach to SEO is uniquely built around what we know works and what we know doesnt work."
            }
            animation={Seo}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            fasttitle={"Data"}
            secondtitle={"Analysis"}
            heding={"Data Analysis"}
            subtitle={
              "Create and manage top-performing social campaigns and start developing a dedicated customer fan base."
            }
            animation={Analysis}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            fasttitle={"Social"}
            secondtitle={"Marketing"}
            heding={" Social Marketing"}
            subtitle={
              "Create and manage top-performing social campaigns and start developing a dedicated customer fan base."
            }
            animation={Marketing}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            fasttitle={"PPC"}
            secondtitle={"Marketing"}
            heding={" PPC Marketing"}
            subtitle={
              " Create, publish, and promote engaging content to generate more traffic and build a dedicated community."
            }
            animation={Ppc}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            fasttitle={"Web"}
            secondtitle={"Development"}
            heding={" Web Development"}
            subtitle={
              " You can provide the answers that your potential customers are trying to find, so you can become the industry."
            }
            animation={Development}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
