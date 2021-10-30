/* eslint-disable indent */
import React from 'react';
import { DetailContentImage } from '../assets';
import { Link } from 'react-router-dom';
const CardKelasDetail = ({ img, link, titleClass, price, desc }) => {
  return (
    <section className="py-20 px-10">
      <div className="bg-white w-105 h-100 mx-36 shadow-lg border-gray-700 border-2">
        <div className="flex flex-row space-x-7 mx-7 p-10">
          <img
            className="w-80 h-50 rounded-md object-cover"
            src={img ? img : DetailContentImage}
            alt="food"
          />
          <div className="flex flex-col">
            <h5 className="text-black font-bold text-2xl mt-20 ml-20"> Title {titleClass}</h5>
            <h5 className="text-black font-semibold text-lg ml-20 "> IDR {price}</h5>
          </div>
        </div>
        <div>
          <h5 className="text-black font-semibold text-lg ml-20 ">Description: </h5>
          <p className="px-20">{desc} </p>
        </div>
        <div className="flex flex-col mt-44 px-20">
          <Link to={link} className="bg-red-700 p-3 hover:bg-red-900 text-center text-white w-36 rounded-md font-semibold">
            <span className="">Daftar</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardKelasDetail;
