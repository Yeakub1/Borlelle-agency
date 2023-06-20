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
    <div 
      className="w-full bg-[#1A1958] text-white">
      <div className="">
        <footer className="mx-auto max-w-7xl mt-20 grid lg:grid-cols-4 px-4 justify-between footer py-10">
          <div className="">
            <img className="w-40" src={logo} alt="" draggable="false" />
            <p className="text-lg">
              Quisque quis dignissim elit. Aliquam et augue aliquet orci maximus
              convallis id vitae augue. Phasellus elementum commodo aliquet.
            </p>
          </div>
          <div className="">
            {" "}
            <span className="footer-title">Services</span>
            <a href="" className="text-lg ">
              Home
            </a>
            <a href="" className="text-lg ">
              Instructors
            </a>
            <a href="" className="text-lg ">
              Classes
            </a>
            <a href="" className="text-lg ">
              Login
            </a>
          </div>

          <div className="">
            <span className="footer-title uppercase ">Legal</span>
            <li href="" className="text-lg list-none">
              Terms of use
            </li>
            <li href="" className="text-lg list-none">
              Privacy policy
            </li>
            <li href="" className="text-lg list-none">
              Cookie policy
            </li>
          </div>
          <div className="">
            <span className="footer-title">CONTACT INFO</span>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">
                <FaMapMarkerAlt />
              </p>{" "}
              <p>Dhaka, Bangladesh</p>
            </li>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">
                {" "}
                <FaPhoneAlt />
              </p>{" "}
              <p>01308445892</p>
            </li>
            <li href="" className="text-lg flex">
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

