/* eslint-disable indent */
import React from "react";
import { PromoImage, WhyImage } from "../assets";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <header className="px-0 sticky top-0 bg-white">
        <Navbar
          home="text-white font-bold"
          register="text-white"
          articles="text-white"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main>
        <section className="flex flex-row space-x-20">
          <div className="my-32 mx-24 space-y-8">
            <h2 className="text-3xl font-semibold">Kenapa harus belajar Programming ?</h2>
            <button className="bg-red-800 text-white w-40 rounded-lg p-2">Mari kita cari tau</button>
          </div>
          <div>
            <img src={PromoImage} />
          </div>
        </section>
        <section className="flex flex-row space-x-20">
          <div className="mx-10">
            <img src={WhyImage} />
          </div>
          <div className="my-32 mx-28 space-y-8 w-1/2 text-justify">
            <text className="text-xl font-regular tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</text>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
