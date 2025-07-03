import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import portfolio1 from "../assets/image/portfolio.jpg";
import portfolio2 from "../assets/image/portfolio-2.jpg";
import portfolio3 from "../assets/image/portfolio-3.jpeg";
import portfolio4 from "../assets/image/portfolio-4.jpeg";
import portfolio5 from "../assets/image/portfolio-5.jpeg";
import portfolio6 from "../assets/image/portfolio-6.jpeg";

const portfolioData = [
  {
    id: 1,
    title: "NFT Dashboard Application Development.",
    type: "Gallery",
    image: portfolio1,
    isProtected: false,
    isExternal: false,
  },
  {
    id: 2,
    title: "Travel App Design Creativity & Application.",
    type: "External Link",
    image: portfolio2,
    isProtected: false,
    isExternal: true,
  },
  {
    id: 3,
    title: "Online Food Delivery Mobile App Design.",
    type: "External Link",
    image: portfolio3,
    isProtected: false,
    isExternal: true,
  },
  {
    id: 4,
    title: "Crypto Wallet UI/UX Interface Design.",
    type: "Gallery",
    image: portfolio4,
    isProtected: false,
    isExternal: false,
  },
  {
    id: 5,
    title: "Fitness Tracker App with Daily Goals.",
    type: "External Link",
    image: portfolio5,
    isProtected: false,
    isExternal: true,
  },
  {
    id: 6,
    title: "Protected Admin Dashboard Access.",
    type: "Password Protected",
    image: portfolio6,
    isProtected: true,
    isExternal: false,
  },
];

const Project = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className="min-h-screen bg-[#212428] text-white px-4 py-10"
      id="project"
    >
      <h3 className="text-center text-rose-600 uppercase text-sm mb-2">
        Visit My Project and Keep Your Feedback
      </h3>
      <h1 className="text-center text-4xl font-bold text-gray-200 mb-12 text-4xl md:text-5xl font-bold leading-tight">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="bg-[#212428] p-4 rounded-2xl shadow-[0_0_20px_rgba(200,200,200,0.08)] flex flex-col justify-between text-gray-400"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mb-4 object-cover"
              />
            )}
            <div className="text-rose-600 text-sm uppercase mb-2">
              {item.type}
            </div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <div className="flex items-center justify-between mt-3 text-gray-400 text-sm">
              <div>{item.isExternal && <ExternalLink size={18} />}</div>
              <button onClick={() => toggleLike(item.id)}>
                {likedItems[item.id] ? (
                  <AiFillHeart className="text-red-500 text-xl" />
                ) : (
                  <AiOutlineHeart className="text-gray-400 text-xl" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
