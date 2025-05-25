// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import CircularText from "../animations/CircularText";
import TextReveal from "./TextReveal";

const ProjectCard = ({
  image,
  techStack,
  title,
  content,
  bgColor,
  github,
  liveLink,
  fullStack,
}) => {
  return (
    <div
      className={`w-full md:max-w-[1400px] h-[45rem] md:h-[35rem] md:flex md:flex-row md:px-11   py-1  overflow-visible flex flex-col items-center my-24 relative font-Mulish cursor-pointer hover:bg-orange transition-all duration-1000 hover:shadow-sm ${bgColor} `}
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
        className="w-[80%] h-[100%] -mt-11 z-10 rounded-3xl overflow-hidden shadow-xs "
      >
        <img src={image} alt="Project" className="h-full w-full object-cover" />
      </motion.div>

      {/* Content section */}
      <div className="w-full h-full flex flex-col items-start justify-around px-8  z-0 overflow-hidden ">
        <div className="text-md md:text-lg py-1">
          <TextReveal delay={0.5}>{content}</TextReveal>
        </div>
        <ul className="flex gap-1  flex-wrap ">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 text-sm md:text-md font-semibold text-center bg-white rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
        <h1 className="text-5xl md:text-7xl  leading-relaxed ">
          <TextReveal delay={0.7}>{title}</TextReveal>
        </h1>
        <div className="flex items-center justify-start gap-4 w-full">
          <div className="flex items-center justify-start gap-4 w-full">
            <a href={github} target="blank">
              <FaGithub
                size={25}
                className="text-gray-800 transition-all duration-200 hover:opacity-80"
              />
            </a>
            <a href={liveLink} target="blank">
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
