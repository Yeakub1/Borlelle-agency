import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../../assets/logo/faveicon.png";

const Footer = () => {
    
  return (
    <div className="w-full bg-[#1A1958] text-white">
      <div className="">
        <footer className="mx-auto max-w-7xl mt-20 grid lg:grid-cols-4 px-4 justify-between footer py-10">
          <div className="">
            <img className="w-40" src={logo} alt="" draggable="false" />
            <p className="text-lg">
              Our approach to SEO is uniquely built around what we know
              works…and what we know doesn’t work. With over 200 verified
              factors in play.
            </p>
          </div>
          <div className="">
            {" "}
            <span className="footer-title">Useful Links</span>
            <a href="" className="text-lg ">
              About us
            </a>
            <a href="" className="text-lg ">
              Services
            </a>
            <a href="" className="text-lg ">
              Projects
            </a>
            <a href="" className="text-lg ">
              Our Team
            </a>
            <a href="" className="text-lg ">
              Contact Us
            </a>
          </div>

          <div className="">
            <span className="footer-title uppercase ">Our Service</span>
            <li href="" className="text-lg list-none">
              SEO Optimization
            </li>
            <li href="" className="text-lg list-none">
              Content Marketing
            </li>
            <li href="" className="text-lg list-none">
              Enterprise SEO
            </li>
            <li href="" className="text-lg list-none">
              National SEO
            </li>
            <li href="" className="text-lg list-none">
              International SEO
            </li>
          </div>
          <div className="">
            <span className="footer-title">CONTACT INFO</span>
            <li href="" className="text-lg flex items-center">
              <p className="text-slate-500 mr-3">
                <FaMapMarkerAlt />
              </p>{" "}
              <p>Dhaka, Bangladesh</p>
            </li>
            <li href="" className="text-lg flex items-center">
              <p className="text-slate-500 mr-3">
                {" "}
                <FaPhoneAlt />
              </p>{" "}
              <p>01308445892</p>
            </li>
            <li href="" className="text-lg flex items-center">
              <p className="text-slate-500 mr-3">
                <FaEnvelope />
              </p>{" "}
              <p>borlelle@info.com</p>
            </li>
            <li href="" className="text-2xl flex">
              <a href="">
                {" "}
                <FaFacebook className="mr-4" />
              </a>
              <a href="">
                {" "}
                <FaTwitter className="mr-4" />
              </a>
              <a href="">
                <FaInstagram className="mr-4" />
              </a>
              <a href="">
                <FaLinkedin className="mr-4" />
              </a>
            </li>
          </div>
        </footer>
        <div className="footer footer-center pb-4 ">
          <p>Copyright © 2023 - All right reserved by Borlelle Agency</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

