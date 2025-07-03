import React, { useState } from "react";
import player1 from "../assets/image/player1.png";

const designSkills = [
  {
    name: "Photoshop",
    about:
      "I use Photoshop to create eye-catching graphics, banners, and creative edits that bring ideas to life and give every project a professional touch.",
  },
  {
    name: "Figma",
    about:
      "With Figma, I design clean, modern UI/UX prototypes that help clients visualize and refine their products before development, ensuring better user experience.",
  },
  {
    name: "Adobe XD",
    about:
      "Adobe XD helps me quickly craft and test interactive prototypes, speeding up design iterations and improving communication with developers and stakeholders.",
  },
  {
    name: "Adobe Illustrator",
    about:
      "I create vector-based illustrations, icons, and logos in Illustrator, adding unique, scalable visuals that enhance brand identity and design consistency.",
  },
  {
    name: "Design",
    about:
      "Design is my creative outlet; it lets me transform ideas into digital experiences, blending color, typography, and layout to tell a compelling visual story.",
  },
];

const devSkills = [
  {
    name: "HTML",
    about:
      "I build well-structured, semantic HTML layouts that form the foundation of responsive and accessible websites.",
  },
  {
    name: "CSS",
    about:
      "Using CSS, I craft beautiful, modern designs that look great across devices, focusing on responsiveness and clean code.",
  },
  {
    name: "JavaScript",
    about:
      "JavaScript adds interactivity and life to my websites, from dynamic content updates to smooth animations and engaging user experiences.",
  },
  {
    name: "PHP",
    about:
      "With PHP, I create dynamic backend logic, manage databases, and build custom features to power complex web applications.",
  },
  {
    name: "Reactjs",
    about:
      "React allows me to develop fast, component-based user interfaces with modern state management and clean, reusable code.",
  },
];

const SkillItem = ({ name, about }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-sm uppercase text-gray-300 font-semibold hover:text-rose-500 transition"
      >
        {name}
        <span className="text-rose-500">{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-1 text-gray-400 text-xs">{about}</p>}
    </div>
  );
};

const About = () => {
  return (
    <section className="bg-[#212428] text-white py-16 px-6 md:px-20" id="about">
      {/* Top section:  text & image */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-pink-500">
          <img
            src={player1}
            alt="Myself"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-sm leading-6">
            I’m a passionate web developer trained in modern technologies like
            HTML, CSS, JavaScript, React, and Laravel. I enjoy building
            responsive, user-friendly websites and I’m constantly learning new
            tools to improve.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-rose-600 text-sm font-semibold mb-1">Features</h3>
          <h2 className="text-2xl font-bold mb-6">Design Skills</h2>
          {designSkills.map((skill, idx) => (
            <SkillItem key={idx} name={skill.name} about={skill.about} />
          ))}
        </div>
        {/* Development skills */}
        <div>
          <h3 className="text-rose-600 text-sm font-semibold mb-1">Features</h3>
          <h2 className="text-2xl font-bold mb-6">Development Skills</h2>
          {devSkills.map((skill, idx) => (
            <SkillItem key={idx} name={skill.name} about={skill.about} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
