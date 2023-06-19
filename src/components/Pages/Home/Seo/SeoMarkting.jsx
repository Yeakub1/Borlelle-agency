import React, { useEffect } from "react";
import images from "../../../../assets/images/seo.png";
import LazyLoad from "react-lazy-load";
import { BsFillPatchCheckFill } from "react-icons/bs";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const SeoMarkting = () => {
    useEffect(() => {
      Aos.init();
    }, []);
  return (
    <div className="max-w-7xl mx-auto px-5 mt-24">
      <div className="divider w-1/4 mx-auto"> WHO WE ARE </div>
      <div className="md:flex justify-between gap-10 items-center ">
        <div data-aos="zoom-in" className="md:w-1/2">
          <LazyLoad offset={300}>
            <img src={images} alt="" />
          </LazyLoad>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">
            Our Mission is to change Your View for SEO
          </h1>
          <p className="text-xl mt-3">
            Smratseo is a brand of digital agency. Competen novate synergstic
            vortas through forward strategic theme areas Compelling extend super
            was that Proactive myocardinate vertical strategic
          </p>
          <div className="mt-10">
            <div className="flex gap-4">
              <BsFillPatchCheckFill className="text-5xl text-warning" />
              <p className="text-xl">
                If Google can’t crawl your site, it’s not going to rank – but
                that doesn’t mean avoiding Javascript.
              </p>
            </div>
            <div className="flex mt-4 gap-4">
              <BsFillPatchCheckFill className="text-5xl text-primary" />
              <p className="text-xl">
                For businesses which sell products online & and improve their
                product listings in the search results..
              </p>
            </div>
            <div className="flex mt-4 gap-4">
              <BsFillPatchCheckFill className="text-5xl text-success" />
              <p className="text-xl">
                If you’re investing in a new website it’s important to ensure
                it’s built to succeed in the search results too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoMarkting;
