/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { DetailContentImage } from '../assets';
import { Link } from 'react-router-dom';

const CardListArticle = ({ to, name, desc, img }) => {
  return (
    <div className="shadow-xl rounded-md bg-white w-106 h-60 flex flex-col justify-center items-center py-5">
      <div className="flex flex-col lg:flex-row space-x-5 divide-x-4  divide-gray-900">
        <div className="flex flex-col ml-0">
          <img
            className="w-36 h-28 rounded-md object-cover"
            src={img ? img : DetailContentImage}
            alt="food"
          />
          <div className="flex flex-row space-x-24">
            <p className="p-3 text-sm text-gray-500">Date</p>
            <p className="p-3 text-sm text-gray-500">Author</p>
          </div>
          <div className="flex flex-row space-x-5">
            <p className="p-3 -mt-5 text-sm text-gray-500">30 Oktober 2021</p>
            <p className="p-3 -mt-5 text-sm text-gray-500">Dhiya</p>
          </div>
        </div>
        <div className="flex flex-col px-10">
          <h4 className="text-center font-bold w-32 flex justify-center text-xl leading-tight">
            {name}
          </h4>
          <h5 className="text-gray-600 font-normal text-sm w-100 text-justify mt-4"> {desc}</h5>
          <Link to={to} className="bg-red-700 hover:bg-red-900 text-white text-sm text-center w-40 mt-3 rounded-md font-semibold">
            Baca Lebih Dalam
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardListArticle;
