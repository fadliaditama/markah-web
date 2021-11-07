/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { GmailIcon, IgIcon, Logo, TiktokIcon } from '../assets';

const Footer = () => {
  return (
    <>
      <footer className="flex flex-row bg-gray-600 h-20 xl:justify-between">
        <div className="flex px-10 bg-white py-4 ">
          <img src={Logo} alt="Logo" className="w-40 h-8" />
        </div>
        <div className="flex space-x-10 px-36 justify-center items-center">
          <div className="flex flex-row">
            <img src={GmailIcon} alt="Gmail Icon" className="w-7 h-5" />
            <span className="text-white ml-2">kelasmarkah</span>
          </div>
          <div className="flex flex-row">
            <img src={IgIcon} alt="Instagram Icon" className="w-5 h-5" />
            <span className="text-white ml-2">kelasmarkah</span>
          </div>
          <div className="flex flex-row">
            <img src={TiktokIcon} alt="Tiktok Icon" className="w-5 h-7" />
            <span className="text-white ml-2">kelasmarkah</span>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
