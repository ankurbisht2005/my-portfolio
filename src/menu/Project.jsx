import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Project = () => {
  const [projectItems, setProjectItems] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProjectItems(data))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

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
        {projectItems.map((item) => (
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
