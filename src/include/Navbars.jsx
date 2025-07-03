import React, { useState } from "react";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <nav className="fixed top-0 left-0 w-full h-20 shadow-md bg-[#1A1A1A] text-white z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-500">PORTFOLIO</h1>

            <div className="hidden md:flex space-x-10">
              {["home", "about", "project", "resume", "contact"].map((item) => (
                <Link
                  key={item}
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-rose-600"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      )}

      {/* Mobile view */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2A2A2A] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4">
          {["home", "about", "project", "resume", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-rose-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto p-4 border-t border-gray-700">
          <h3 className="text-sm font-semibold mb-2">Find Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-500"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-500"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:ankurbisht799@gmail.com"
              className="hover:text-rose-500"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbars;
