/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import CardKelas from '../components/CardKelas';
import CardKelasDetail from '../components/CardKelasDetail';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const ClassDetail = () => {
  // const openLink = (url) => window.open(url, '_blank')?.focus();
  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
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
        <CardKelasDetail onClick={() => openNewTab('https://forms.gle/8wycrHVmwZfSpgMx7')} />
        <h2 className="font-bold text-2xl p-10 px-40">Kelas Lainnya</h2>
        <div className="grid grid-cols-3 grid-rows-7 gap-y-24 px-28 ml-0 pb-20">
          <CardKelas name="Hello" desc="Video on Demand Penjelasan Kelas 100rb jadi ......" id="/class-detail" />
          <CardKelas name="Hello" desc="Video on Demand Penjelasan Kelas 100rb jadi ......" />
          <CardKelas name="Hello" desc="Video on Demand Penjelasan Kelas 100rb jadi ......" />
        </div>
      </main>
      <footer>
        <Footer />

      </footer>
    </>
  );
};

export default ClassDetail;
