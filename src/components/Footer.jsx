/* eslint-disable indent */
import React from "react";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row space-x-2 bg-gray-100">
        <div className="flex px-10 bg-white ">
          <img src={Logo} alt="Logo" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
