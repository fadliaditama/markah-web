/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { DetailContentImage } from '../assets';
import { Link } from 'react-router-dom';
const CardListClass = ({ img, link, titleClass, desc }) => {
  return (
    <section className="py-5 px-0">
      <div className="bg-white w-80 h-100 mx-0 shadow-lg border-gray-700 rounded-lg border-2">
        <div className="flex flex-row space-x-7 mx-14 p-0">
          <img
            className="w-52 h-50 rounded-md object-cover"
            src={img ? img : DetailContentImage}
            alt="food"
          />
        </div>
        <div className="w-65 h-3 mx-5 rounded-xl bg-gray-900"></div>
        <div className="">
          <h5 className="text-black font-bold text-2xl mt-5 ml-5"> Title {titleClass}</h5>
          <h5 className="text-gray-400 font-medium mt-3 ml-5 "> Penjelasan Kelas</h5>
        </div>
        <div>
          <h5 className="text-gray-400 font-semibold mt-3 ml-5 ">- {desc} </h5>
        </div>
        <div className="flex flex-col mt-44 px-20">
          <Link to={link} className="bg-red-700 p-3 hover:bg-red-900 text-center text-white w-36 rounded-md font-semibold">
            <span className="">See Detail</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardListClass;
