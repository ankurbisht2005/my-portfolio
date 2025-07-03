import React, { useState, useEffect } from "react";
import player1 from "../assets/image/player1.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiJavascript, SiPhp, SiReact } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const HeroSection = () => {
  const words = ["Developer", "UI/UX Designer", "Freelancer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section className="bg-[#212428] text-white py-20 px-6 md:px-16" id="home">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            Welcome to my world
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            Hi, I’m <span className="text-rose-600">ABHAY BISHT</span>
          </h1>
          <h1 className="text-4xl md:text-3xl font-semibold text-gray-300 h-10">
            a <span className="text-white text-4xl md:text-3xl">{text}</span>
            <span className="blinking-cursor text-rose-500">|</span>
          </h1>
          <p className="mt-6 text-gray-400 text-base leading-relaxed">
            I use animation as a third dimension by which to simplify
            experiences and guide through every interaction. I’m not adding
            motion just to spruce things up, but doing it in ways that matter.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {/* find with me  */}
            <div>
              <p className="uppercase text-xs text-gray-400 mb-3">
                Find with me
              </p>
              <div className="flex gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 flex items-center justify-center rounded-lg
                    bg-[#1e1f24] shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                    hover:bg-rose-600 hover:shadow-[0_6px_20px_rgba(244,63,94,0.6)]
                    transition-all duration-300"
                  >
                    <Icon className="text-xl text-gray-300 hover:text-white transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/*  my skills */}
            <div>
              <p className="uppercase text-xs text-gray-400 mb-3">My Skills</p>
              <div className="flex gap-3">
                {[DiJavascript1, SiPhp, SiReact].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 flex items-center justify-center rounded-lg
                    bg-[#1e1f24] shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                    hover:bg-rose-600 hover:shadow-[0_6px_20px_rgba(244,63,94,0.6)]
                    transition-all duration-300"
                  >
                    <Icon className="text-xl text-gray-300 hover:text-white transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right side: Image  */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative mb-6 md:mb-0">
          <div className="absolute w-72 h-72 bg-rose-500 opacity-30 rounded-full blur-3xl right-0 md:right-0 z-0"></div>
          <img
            src={player1}
            alt="ABHAY BISHT"
            className="relative z-10 w-80 h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
