import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import player1 from "../assets/image/player1.png";

const Footer = () => {
  return (
    <footer className="bg-[#212428] rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-0">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={player1} className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Abhay Bisht
              </span>
            </a>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#2a2b2e] p-2 rounded-md hover:bg-rose-600 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#2a2b2e] p-2 rounded-md hover:bg-rose-600 transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#2a2b2e] p-2 rounded-md hover:bg-rose-600 transition"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline me-4 md:me-6 hover:text-rose-600"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6 hover:text-rose-600"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6 hover:text-rose-600"
              >
                Licensing
              </a>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline hover:text-rose-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Abhay Bisht
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
