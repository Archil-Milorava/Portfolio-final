import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";
import oLetter from "../assets/o.webp";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const selectedRef = useRef(null);
  const workRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      selectedRef.current,
      { y: -150 },
      {
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selectedRef.current,
          start: "top 50%",
        },
      }
    );

    gsap.fromTo(
      workRef.current,
      { y: -250 },
      {
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 50%",
        },
      }
    );
  });

  return (
    <section className="w-full h-auto min-h-screen overflow-hidden text-dark sm:flex sm:flex-col bg-white">
      <div className="h-1/6 w-full pt-4 px-1 flex items-center justify-center font-Mulish text-black font-bold uppercase gap-4 sm:gap-11">
        <h1
          ref={selectedRef}
          className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest"
        >
          selected
        </h1>
        <h1
          ref={workRef}
          className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-center justify-center tracking-widest"
        >
          w
          <span>
            <img
              src={oLetter}
              alt="o"
              width={96}
              height={96}
              className="w-auto h-[1.5rem] sm:h-[3rem] md:h-16 lg:h-[5rem] xl:h-[6rem]"
            />
          </span>{" "}
          rk
        </h1>
      </div>

      <div className="h-full w-full flex flex-col gap-44 items-center my-40 sm:my-24">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
