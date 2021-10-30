/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentImage } from '../assets';
const CardArtikel = ({ name, id, img, desc }) => {
  return (
    <div>
      <Link
        to={id}
        className="space-y-2 shadow-xl rounded-2xl bg-white w-full h-84 flex flex-col justify-center items-center py-10"
      >
        <img
          className="w-35 h-35 rounded-md object-cover"
          src={img ? img : ContentImage}
          alt="food"
        />
        <h4 className="text-center flex-1 font-bold w-20 flex justify-center text-xl leading-tight">
          {name}
        </h4>
        <h5 className="text-gray-600 font-medium px-10 py-5">{desc}</h5>
      </Link>
    </div>
  );
};

export default CardArtikel;
