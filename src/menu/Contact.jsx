import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import contact from "../assets/image/contact.png";

const Contact = () => {
  return (
    <section
      className="bg-[#212428] text-white py-16 px-6 md:px-20"
      id="contact"
    >
      <div className="text-center mb-10">
        <p className="text-rose-600 uppercase text-xs font-semibold mb-2">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
          Contact With Me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Left: Profile Card */}
        <div className="bg-[#212428] p-6 rounded-xl shadow-[0_0_20px_rgba(200,200,200,0.08)] flex flex-col items-center max-w-xs w-full">
          <div className="w-64 h-32 mb-4">
            <img
              src={contact}
              alt="Profile"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-1 text-center">
            Abhay Bisht
          </h3>
          <p className="text-sm text-gray-400 mb-3 text-center">
            Junier Web Developer
          </p>
          <p className="text-gray-300 text-xs mb-4 text-center">
            I am available for freelance work. Connect with me via email or call
            in to my account.
          </p>
          <p className="text-xs mb-1 text-center">
            Phone: <span className="text-rose-500">+91 9758667719</span>
          </p>
          <p className="text-xs mb-4 text-center">
            Email:{" "}
            <span className="text-rose-500">ankurbisht799@gmail.com</span>
          </p>
          <p className="text-xs text-gray-400 mb-2">FIND WITH ME</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#2a2b2e] p-2 rounded-md hover:bg-rose-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-[#2a2b2e] p-2 rounded-md hover:bg-rose-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#2a2b2e] p-2 rounded-md hover:bg-rose-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 w-full">
          <div className="bg-[#212428] p-6 rounded-xl shadow-[0_0_20px_rgba(200,200,200,0.08)] space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-[#191B1E] p-3 rounded-md focus:outline-none text-sm border-b-2 border-transparent focus:border-rose-600 transition"
              />
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="bg-[#191B1E] p-3 rounded-md focus:outline-none text-sm border-b-2 border-transparent focus:border-rose-600 transition"
              />
            </div>
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-[#191B1E] p-3 rounded-md w-full focus:outline-none text-sm border-b-2 border-transparent focus:border-rose-600 transition"
            />
            <input
              type="text"
              placeholder="SUBJECT"
              className="bg-[#191B1E] p-3 rounded-md w-full focus:outline-none text-sm border-b-2 border-transparent focus:border-rose-600 transition"
            />
            <textarea
              placeholder="YOUR MESSAGE"
              rows={5}
              className="bg-[#191B1E] p-3 rounded-md w-full focus:outline-none text-sm border-b-2 border-transparent focus:border-rose-600 transition resize-none"
            ></textarea>
            <button className="bg-[#2a2b2e] px-6 py-3 rounded-md hover:bg-rose-600 transition text-sm font-semibold">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
