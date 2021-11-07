/* eslint-disable linebreak-style */
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
      <main className="lg:p-10">
        <h1 className="text-center lg:p-5 lg:px-20 py-12 font-bold text-3xl tracking-wider">Daftar Kelas</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-7 gap-y-24 ml-0 pl-8 lg:pl-24 2xl:pl-72">
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
