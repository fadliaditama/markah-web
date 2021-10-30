/* eslint-disable indent */
import React from 'react';
import CardListArticle from '../components/CardListArticle';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const ListArticles = () => {
  return (
    <>
      <header className="px-0 sticky top-0 bg-white">
        <Navbar
          home="text-white"
          register="text-white"
          articles="text-white font-bold"
          aboutus="text-white"
          faq="text-white"
        />
      </header>
      <main className="p-10">
        <h1 className="p-5 px-20 py-12 font-bold text-3xl tracking-wider">Daftar Artikel</h1>
        <div className="grid grid-cols-1 grid-rows-1 gap-y-14 px-28 ml-0">
          <CardListArticle name="Kelas Markah" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi. Quisque rhoncus ligula sit amet volutpat condimentum. Aliquam erat volutpat. Phasellus sed tempor nisi, eu imperdiet metus. Nam finibus facilisis vestibulum. Fusce sed diam condimentum, euismod neque aliquet, dignissim nunc. Nam ac aliquet nisl. Suspendisse dapibus ultrices augue." />
          <CardListArticle name="Kelas Markah" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi. Quisque rhoncus ligula sit amet volutpat condimentum. Aliquam erat volutpat. Phasellus sed tempor nisi, eu imperdiet metus. Nam finibus facilisis vestibulum. Fusce sed diam condimentum, euismod neque aliquet, dignissim nunc. Nam ac aliquet nisl. Suspendisse dapibus ultrices augue." />
          <CardListArticle name="Kelas Markah" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi. Quisque rhoncus ligula sit amet volutpat condimentum. Aliquam erat volutpat. Phasellus sed tempor nisi, eu imperdiet metus. Nam finibus facilisis vestibulum. Fusce sed diam condimentum, euismod neque aliquet, dignissim nunc. Nam ac aliquet nisl. Suspendisse dapibus ultrices augue." />
        </div>
        <div className="my-10 flex justify-center items-center">
          <button className="focus:outline-none ml-28  text-white font-bold text-lg bg-red-900 px-16 py-4 rounded-lg lg:ml-9" >LoadMore</button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ListArticles;
