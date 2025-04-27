import React, { useState, useRef } from "react";

const experienceList = [
  {
    title: "Freelance",
    position: "Freelance projcts",
    timeframe: "2024 - 2025",
    description: [
      "helping businesses to buld the web aplications",
      "building back and front of small/medium applications and deployng on server",
      "helping colleagues and friends building parts of the application",
    ],
    logo: "/dev.png",
    link: "",
  },
  {
    title: "Inexi delivery",
    position: "junior FrontEnd dev",
    timeframe: "Sep 2024 - present",
    description: [
      "maintaining Front end of the website",
      "building responsive ui",
      " managin state in context api",
    ],
    logo: "/inexi.png",
    link: "",
  },
  {
    title: "Ardi insurance",
    position: "Intern - Project based Frontend Dev",
    timeframe: "Nov 2023 - Aug 2024",
    description: [
      "building tha landing page",
      "maintainingasdasjksdflljfmsfnsmdf",
    ],
    logo: "/ardi.png",
    link: "",
  },
  {
    title: "TBC tech",
    position: "Frontend dev Bootcamp",
    timeframe: "Feb 2023 - Jul 2023",
    description: [
      "Active learning react",
      "working with team",
      "maintaining the pages ui",
    ],
    logo: "/tbc.png",
    link: "",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-[50rem]  max-w-4xl mx-auto ">
      {experienceList.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="rounded-full h-10 overflow-hidden object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.position}</p>
              </div>
            </div>
            {/* Right Side */}
            <div className="text-sm text-gray-600">{item.timeframe}</div>
          </div>
          {/* Description */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight:
                activeIndex === index
                  ? contentRefs.current[index]?.scrollHeight
                  : 0,
            }}
          >
            <ul className="mt-4 pl-8 list-disc text-gray-700">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
