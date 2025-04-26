
import React from "react";

const ProjectCard = ({ image, alt, techStack, title, bgColor }) => {
  return (
    <div
      className={`transition-all duration-500 w-[75rem] h-[30rem] flex p-8 gap-16 hover:bg-[#fb805b] hover:shadow-2xl cursor-pointer ${bgColor}`}
    >
      <div className="w-1/3 h-full rounded-xl overflow-hidden">
        <img src={image} alt={alt} className="h-full object-cover" />
      </div>
      <div className="w-2/3 h-full flex flex-col justify-between">
        <div className="w-full flex mt-4 gap-1">
          {techStack.map((tech, index) => (
            <p
              key={index}
              className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold"
            >
              {tech}
            </p>
          ))}
        </div>
        <h1 className="text-8xl uppercase font-Prata tracking-wider">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
