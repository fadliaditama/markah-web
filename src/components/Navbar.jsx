/* eslint-disable indent */
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Navbar = ({ home, register, articles, aboutus, faq }) => {
  return (
    <>
      <nav className="flex flex-row bg-white rounded-l-lg">
        <Link>
          <div className="flex px-20 my-2 bg-white ">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="rounded-l-lg bg-red-900 w-full">
          <ul className="flex space-x-10 px-60 my-2 text-md">
            <li>
              <Link className={home} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={register} to="/register">
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
