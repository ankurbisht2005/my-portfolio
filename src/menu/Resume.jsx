import React from "react";

const resumeData = {
  education: [
    {
      title: "Bachelor of Computer Applications",
      institute: "Doon Group Of Institute (2022 – 2025)",
      description:
        "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
      grade: "3.90/4",
    },
    {
      title: "12th",
      institute: "Inter Collage Kimsar (2021 – 2022)",
      description:
        "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
      grade: "80%",
    },
  ],
  traning: [
    {
      title: "Web Development",
      company: "COMPUTER GURU TRAINING INSTITUTE",
      description:
        "Computer Guru Training Institute offers practical web development training, teaching HTML, CSS, JavaScript, and frameworks for real-world project building.",
      location: "Rishikesh",
    },
    {
      title: "Web Developer & Trainer",
      company: "Illika Softtech",
      description:
        "A popular destination with a growing number of highly qualified homegrown graduates, securing a role in Malaysia isn’t easy.",
      location: "Rishikesh",
    },
  ],
};

const ResumeSection = () => {
  return (
    <section
      className="bg-[#212428] text-white py-16 px-6 md:px-20"
      id="resume"
    >
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
        My Resume
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-rose-600 text-sm mb-2">2010 - 2025</h2>
          <h3 className="text-2xl font-semibold mb-6">Education Quality</h3>
          <div className="space-y-6 border-l border-gray-600 pl-6">
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-[#212428] p-6 rounded-xl shadow-md"
              >
                <div className="absolute -left-[1.1rem] top-6 w-3 h-3 bg-rose-600 rounded-full"></div>

                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">{edu.title}</h4>
                </div>

                <p className="text-sm text-gray-400">{edu.institute}</p>
                <hr className="my-4 border-gray-700" />
                <p className="text-m text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-rose-600 text-sm mb-2">2024 - 2025</h2>
          <h3 className="text-2xl font-semibold mb-6">Training & Internship</h3>
          <div className="space-y-6 border-l border-gray-600 pl-6">
            {resumeData.traning.map((job, idx) => (
              <div
                key={idx}
                className="relative bg-[#212428] p-6 rounded-xl shadow-md"
              >
                <div className="absolute -left-[1.1rem] top-6 w-3 h-3 bg-rose-600 rounded-full"></div>

                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl   font-semibold">{job.title}</h4>
                  <span className="text-sm bg-gray-800 text-rose-500 px-2 py-1 rounded">
                    {job.location}
                  </span>
                </div>

                <p className="text-sm text-gray-400">{job.company}</p>
                <hr className="my-4 border-gray-700" />
                <p className="text-m text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
