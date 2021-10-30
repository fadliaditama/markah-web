/* eslint-disable indent */
import React from 'react';
import CardListClass from '../components/CardListClass';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const ListClass = () => {
  return (
    <>
      <header className="px-0 sticky top-0 bg-white">
        <Navbar
          home="text-white"
          register="text-white font-bold"
          articles="text-white"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main className="p-10">
        <h1 className="p-5 px-20 py-12 font-bold text-3xl tracking-wider">Daftar Kelas</h1>
        <div className="grid grid-cols-3 grid-rows-7 gap-y-24 px-28 ml-0">
          <CardListClass />
          <CardListClass />
          <CardListClass />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ListClass;
