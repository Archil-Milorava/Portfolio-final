// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import CircularText from "../animations/CircularText";
import TextReveal from "./TextReveal";
import { useRef } from "react";
import TagReveal from "../animations/TagReveal";
import useNearViewport from "../hooks/useNearViewport";

const monthFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

const formatMonth = (value) => monthFormat.format(new Date(`${value}-01`));

// Inclusive month count, so Feb–Aug reads as 7 months.
const formatDuration = (from, to) => {
  const start = new Date(`${from}-01`);
  const end = to ? new Date(`${to}-01`) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr`);
  if (rest) parts.push(`${rest} mo`);
  return parts.join(" ");
};

const ExperienceCard = ({
  role,
  company,
  location,
  from,
  to,
  description,
  stack,
  url,
  isConfidential,
  color,
  video,
  image,
}) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  // Posters only start downloading shortly before the card scrolls into view.
  const nearViewport = useNearViewport(cardRef);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: color }}
      className="md:max-w-[1400px] py-2 max-h-[50rem] sm:h-[50rem] md:h-[50rem] lg:h-[34rem] md:flex lg:flex-row md:px-11 lg:mx-11 overflow-visible flex flex-col gap-4 items-center relative cursor-pointer transition-all duration-700 hover:shadow-md font-serif"
    >
      {/* Media sits above the card via negative margin. Nothing is downloaded
          until hover; the poster (or the dark base) shows until then. */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          },
        }}
        className="w-[80%] h-[60%] aspect-[16/10] lg:aspect-auto lg:w-[70%] lg:h-[100%] border-t shadow-md -mt-28 z-10 rounded-md overflow-hidden relative bg-dark"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={nearViewport ? image : undefined}
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </motion.div>

      <div className="w-full h-full flex flex-col items-start justify-center gap-6 overflow-hidden px-8 z-0">
        <p className="font-Roboto text-xs md:text-sm uppercase tracking-widest">
          {formatMonth(from)} – {to ? formatMonth(to) : "Present"} ·{" "}
          {formatDuration(from, to)}
        </p>

        <div className="md:text-base lg:text-lg py-1 text-xs">
          <TextReveal delay={0.5}>{description}</TextReveal>
        </div>

        <ul className="flex gap-1 flex-wrap">
          {stack.map((tech, index) => (
            <TagReveal
              key={tech}
              delay={index * 0.1}
              className="bg-white text-xs flex items-center justify-center px-2 rounded-full h-[20px] font-Roboto"
            >
              {tech}
            </TagReveal>
          ))}
        </ul>

        <div>
          <h2 className="text-2xl md:text-6xl leading-relaxed">
            <TextReveal delay={0.7}>{company}</TextReveal>
          </h2>
          <p className="font-Roboto text-xs md:text-sm uppercase tracking-widest">
            {role} · {location}
          </p>
        </div>

        <div className="flex items-center justify-start gap-4 w-full">
          <div className="flex items-center justify-start gap-4 w-full">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${company} website`}
            >
              <FaArrowUpRightFromSquare
                size={25}
                className="text-gray-800 transition-all duration-200 hover:opacity-80"
              />
            </a>
            {isConfidential && (
              <span className="font-Roboto italic text-xs">
                * Confidential project
              </span>
            )}
          </div>
          {!to && (
            <CircularText
              text="*** CURRENT *** ROLE "
              onHover="speedUp"
              spinDuration={12}
              className="w-[70px] h-[70px] text-gray-800"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
