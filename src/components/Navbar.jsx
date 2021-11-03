/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';

const Navbar = ({ home, register, articles, aboutus, faq }) => {
  return (
    <>
      <nav className="flex flex-col lg:flex-row rounded-l-lg">
        <Link>
          <div className="flex pb-4 px-28 lg:px-20 lg:my-2">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="bg-red-900 w-auto lg:w-full lg:rounded-l-lg">
          <ul className="flex space-x-10 p-0 lg:px-60 lg:my-2 text-md">
            <li>
              <Link className={home} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={register} to="/register-class">
                Register
              </Link>
            </li>
            <li>
              <Link className={articles} to="/articles">
                Articles
              </Link>
            </li>
            <li>
              <Link className={aboutus} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={faq} to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
