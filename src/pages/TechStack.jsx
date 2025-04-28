import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import StackBox from "./../components/StackBox"
import TextFade from "../components/TextFade";


const frontend = [
  {
    title: "html",
    icon: "html5",
  },
  {
    title: "css",
    icon: "css3",
  },
  {
    title: "js",
    icon: "js",
  },
  {
    title: "typescript",
    icon: "typescript",
  },
  {
    title: "react",
    icon: "reactjs",
  },
  {
    title: "next",
    icon: "nextjs2",
  },
  {
    title: "reactQuery",
    icon: "reactquery",
  },
  {
    title: "bootstrap",
    icon: "bootstrap5",
  },
  {
    title: "framer",
    icon: "framer",
  },
  {
    title: "Gsap",
    icon: "gsap",
  },
  {
    title: "redux",
    icon: "redux",
  },
  {
    title: "sass",
    icon: "sass",
  },
  {
    title: "Tailwind",
    icon: "tailwindcss",
  },
];

const backend = [
  {
    title: "nodejs",
    icon: "nodejs",
  },
  {
    title: "express",
    icon: "mongodb",
  },
  {
    title: "mongodb",
    icon: "mongodb",
  },
  {
    title: "mongoose",
    icon: "mongoose",
  },
  {
    title: "mysql",
    icon: "mysql",
  },
  {
    title: "postgresql",
    icon: "postgresql",
  },
  {
    title: "prisma",
    icon: "prisma",
  },
  {
    title: "postman",
    icon: "postman",
  },
];

const other = [
  {
    title: "git",
    icon: "git",
  },
  {
    title: "github",
    icon: "github",
  },
  {
    title: "i18next",
    icon: "i18next",
  },
];

const TechStack = () => {
  return (
    <section className="pb-[8rem] font-PlayfairDisplay bg-gradient-to-t from-[#E8E8E8] to-white  px-[10rem] h-auto w-full hidden sm:flex items-center justify-center ">
      <TextFade className="flex flex-col gap-8">
        {/* front stack list div */}
        <div className="w-full h-1/3  flex flex-col gap-2">
          <h1 className="text-4xl uppercase tracking-widest font-bold text-dark font-Italiana ">
            FrontEnd
          </h1>
          <div className="flex flex-wrap gap-2 w-full h-full ">
            {frontend.map((stack, i) => (
              <StackBox key={i} stack={stack} />
            ))}
          </div>
        </div>

        {/* back stack list div */}
        <div className="w-full h-auto flex flex-col gap-2">
          <h1 className="text-4xl uppercase tracking-widest font-bold text-dark font-Italiana">
            backend
          </h1>
          <div className="flex flex-wrap gap-2 w-full h-auto ">
            {backend.map((stack, i) => (
              <StackBox key={i} stack={stack} />
            ))}
          </div>
        </div>

        {/* other stack list div */}
        <div className="w-full h-1/3  flex flex-col gap-2">
          <h1 className="text-4xl uppercase tracking-widest font-bold text-dark font-Italiana">
            other
          </h1>
          <div className="flex flex-wrap gap-2 w-full h-full ">
            {other.map((stack, i) => (
              <StackBox key={i} stack={stack} />
            ))}
          </div>
        </div>
      </TextFade>

      {/* experince text div */}
      <TextFade>
        <h1 className="text-dark text-5xl font-semibold font-Italiana uppercase ">
          Tech Stack
        </h1>
        <p className="font-Roboto text-dark font-Prata text-sm text-start">
          I have proficiency at fullstack developement and here is the stack
          that i use to build the applications
        </p>
      </TextFade>
    </section>
  );
};

export default TechStack;
