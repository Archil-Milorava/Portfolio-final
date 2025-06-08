// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import CircularText from "../animations/CircularText";
import TextReveal from "./TextReveal";
import { useRef, useState } from "react";

const ProjectCard = ({
  image,
  techStack,
  title,
  content,
  bgColor,
  github,
  liveLink,
  fullStack,
  video,
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };


  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` md:max-w-[1400px] py-2 max-h-[50rem]  sm:h-[50rem]  md:h-[50rem] lg:h-[30rem] md:flex lg:flex-row md:px-11 lg:mx-11     overflow-visible flex flex-col gap-4 items-center relative  cursor-pointer  transition-all duration-700 hover:shadow-md hover:bg-opacity-85 ${bgColor} font-PlayfairDisplay`}
    >
      {/* Image container with negative margin to raise it above */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: {
            opacity: 100,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          },
        }}
        className="w-[80%] h-[60%] lg:w-[70%] lg:h-[100%] border-t shadow-md -mt-28 z-10 rounded-md overflow-hidden relative"
      >
        {/* image */}
        <img
          src={image}
          alt="Project"
          className={`w-full h-full object-cover  ${
            isHovered ? "opacity-0" : "opacity-100"
          } `}
        />

        {/* video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={video} type="video/mp4" />
        </video>
      </motion.div>

      {/* Content section */}
      <div className="w-full h-full flex flex-col items-start justify-center gap-8 overflow-hidden px-8  z-0  ">
        <div className=" md:text-xl py-1  h-[rem] md:h-auto overflow-hidden text-xs ">
          <TextReveal delay={0.5}>{content}</TextReveal>
        </div>
        <ul className="flex gap-1  lg:max-h-[35rem] flex-wrap ">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="bg-white  text-xs lg: flex items-center justify-center px-2 rounded-full h-[20px] font-Roboto "
            >
              {tech}
            </li>
          ))}
        </ul>
        <h1 className="text-2xl md:text-7xl  leading-relaxed ">
          <TextReveal delay={0.7}>{title}</TextReveal>
        </h1>
        <div className="flex items-center justify-start gap-4 w-full ">
          <div className="flex items-center justify-start gap-4 w-full">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={25}
                className="text-gray-800 transition-all duration-200 hover:opacity-80"
              />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaArrowUpRightFromSquare
                size={25}
                className="text-gray-800 transition-all duration-200 hover:opacity-80"
              />
            </a>
          </div>
          {fullStack && (
            <CircularText
              text="*** FULL *** STACK "
              onHover="speedUp"
              spinDuration={12}
              className="w-[70px]  h-[70px] text-gray-800 "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
