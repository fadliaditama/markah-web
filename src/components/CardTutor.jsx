/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { DetailContentImage } from '../assets';
const CardTutor = ({ img, name, description }) => {
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
          <h5 className="text-black font-bold text-2xl mt-5 ml-5"> {name}</h5>
          <h5 className="text-gray-400 font-medium mt-3 ml-5 "> Description: </h5>
        </div>
        <div>
          <h5 className="text-gray-400 font-semibold mt-3 ml-5 text-justify mx-10">{description} </h5>
        </div>
      </div>
    </section>
  );
};

export default CardTutor;
