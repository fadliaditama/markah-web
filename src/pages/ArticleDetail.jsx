/* eslint-disable indent */
import React from 'react';
import { PromoImage } from '../assets';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CardArtikel from '../components/CardArtikel';
const ArticleDetail = () => {
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
        <section className="flex flex-row py-10 space-x-80 justify-center">
          <div className="py-20">
            <h1 className="font-bold text-5xl tracking-widest">Judul</h1>
            <div className="flex flex-row space-x-8 py-5">
              <p className="font-semibold text-md tracking-widest">Tanggal: 30 October 2021 </p>
              <p className="font-semibold text-md tracking-widest">Penulis: Kelas Markah </p>
            </div>
          </div>
          <img
            className="w-60 h-60 rounded-md object-cover"
            src={PromoImage}
            alt="food"
          />
        </section>
        <div className="w-full h-3 bg-gray-900"></div>
        <section>
          <p className="text-justify p-20 text-lg tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas risus enim, eget euismod mauris rhoncus at. Quisque sit amet est imperdiet, bibendum metus eget, ullamcorper libero. Nulla facilisi. Quisque rhoncus ligula sit amet volutpat condimentum. Aliquam erat volutpat. Phasellus sed tempor nisi, eu imperdiet metus. Nam finibus facilisis vestibulum. Fusce sed diam condimentum, euismod neque aliquet, dignissim nunc. Nam ac aliquet nisl. Suspendisse dapibus ultrices augue.

            Integer tincidunt gravida nisl, viverra gravida mauris tempor vitae. Proin volutpat nisi nisl, nec tempus urna ultricies finibus. Fusce lobortis erat ac lorem dapibus, vel vehicula nibh molestie. Cras condimentum condimentum arcu, vitae venenatis orci congue sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sagittis placerat magna, eget suscipit metus ultrices auctor. Morbi ultricies mollis tincidunt. Donec vitae maximus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut aliquet ipsum, vitae placerat tellus. Nulla nisi erat, consequat ac hendrerit at, hendrerit non sem. Etiam laoreet pellentesque molestie. Aenean eu aliquam orci, nec pharetra lorem. Donec pretium hendrerit ullamcorper. In nec justo id magna fermentum accumsan vitae sit amet quam.

          </p>
        </section>
        <section className="bg-gray-900 py-10 h-full w-full">
          <h1 className="text-2xl text-center text-white font-bold mb-10">Artikel</h1>
          <div className="grid grid-cols-3 grid-rows-7 gap-x-10 gap-y-24 px-28 ml-0">
            <CardArtikel name="Hello" desc="Video on Demand Penjelasan Kelas 100rb jadi ......" id="/article-detail" />
            <CardArtikel name="Hello" desc="Video on Demand Penjelasan Kelas 100rb jadi ......" />
            <CardArtikel name="Hello" desc="Video on Demand Penjelasan Kelas 100rb jadi ......" />
          </div>
          <div className="my-10 flex justify-center items-center">
            <button className="focus:outline-none ml-28  text-white font-bold text-lg bg-red-900 px-16 py-4 rounded-lg lg:ml-9" >LoadMore</button>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ArticleDetail;
