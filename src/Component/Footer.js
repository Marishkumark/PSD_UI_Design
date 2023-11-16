import React from "react";
import "../home.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <div className="padding">
        <h1 className="gradient-word">CONTACT US</h1>
        <h2 className="title provide">
          CONTACT US <span className="blue">TODAY</span>
        </h2>
        <div className="footer-flex">
          <div className="f-detail">
            <div className="icon">
              <MdLocationPin className="w-9 h-9 mx-auto" />
            </div>
            <p className="mx-auto text-center mt-3 text-xs md:text-base">
              123, abc Street, Chennai
            </p>
          </div>
          <div className="f-detail">
            <div className="icon">
              <FaPhoneAlt className="w-8 h-8 mx-auto" />
            </div>
            <p className="mx-auto text-center mt-3 text-xs md:text-base">
              +91 91235 67890
            </p>
          </div>
          <div className="f-detail">
            <div className="icon">
              <IoMail className="w-8 h-8 mx-auto" />
            </div>
            <p className="mx-auto text-center mt-3 text-xs md:text-base">
              Support@mail.com
            </p>
          </div>
        </div>
      </div>
      <div className="f-container">
        <p className="text-center pt-3 text-xs md:text-base">
          © All rights reserved @2025
        </p>
      </div>
    </div>
  );
}
