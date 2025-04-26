import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image: "/inexi.jpghttps://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dexi",
    techStack: ["React", "Redux", "Tailwind", "FrontEnd"],
    title: "Packet Delivery",
    bgColor: "bg-blue",
  },
  {
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "imedi",
    techStack: ["React", "Styled Components", "MUI"],
    title: "Insurance Company",
    bgColor: "bg-silver",
  },
  {
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "music",
    techStack: ["React", "MUI", "Tailwind", "RestAPI"],
    title: "Music Chords Web-site",
    bgColor: "bg-purple",
  },
  {
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "bmg",
    techStack: ["React", "Tailwind", "Redux"],
    title: "F1 Shop Georgia",
    bgColor: "bg-yellow",
  },
];

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
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
    <section className="hidden w-full h-auto min-h-screen overflow-hidden  text-dark sm:flex sm:flex-col bg-gradient-to-t from-[#E8E8E8] to-white pb-16 ">
      <div className="h-1/6 w-full flex items-center justify-center font-Mulish text-black font-bold  uppercase gap-4 sm:gap-11">
        <h1
          ref={selectedRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem] tracking-widest"
        >
          selected
        </h1>
        <h1
          ref={workRef}
          className="text-4xl flex items-center justify-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem] tracking-widest"
        >
          w
          <span>
            <img
              src="/o.png"
              alt="o"
              className="h-[2rem] sm:h-[2rem] md:h-[5rem] lg:h-[6rem] xl:h-[8rem]"
            />
          </span>{" "}
          rk
        </h1>
      </div>

      {/* cards div section */}
      <div
        className="w-full pt-24 h-5/6 flex items-center flex-col gap-36 justify-center
      font-bla font-bold "
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SecondPage;
