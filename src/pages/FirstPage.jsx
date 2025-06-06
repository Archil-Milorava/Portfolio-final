import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "./general.css";

import profile from "../assets/profile.png";

import { RiArrowDownWideFill } from "react-icons/ri";



gsap.registerPlugin(ScrollTrigger);

const FirstPage = () => {
  const nameRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: nameRef.current,
        start: 2,
        toggleActions: "restart none none reverse",
        scrub: 1.5,
      },
      y: -190,
      duration: 5,
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        toggleActions: "restart none none reverse",
        scrub: 1,
      },
      y: 100,
      color: "#FF8863",
    });
  });

  return (
    <main className="  w-full h-[98vh] sm:h-screen  bg-[#F5F5ED]   flex flex-col font-pirveli text-dark/90 p-0 m-0 overflow-hidden">
      {/* Header Container */}
      <div className="h-1/6 w-full flex items-center justify-center">
        <h1
          ref={nameRef}
          className="text-[1.5rem] px-1 sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-[8rem] mt-8 font-semibold  uppercase  tracking-widest "
        >
          archil milorava
        </h1>
      </div>

      {/* Placeholder for content */}
      <div className=" w-full h-full flex flex-col  items-center justify-around  py-2">
        <p className="text-[0.8rem]  text-3xl font-bold  tracking-wide">
          Web Developer From <span className=" shiny-effect"> Georgia </span>
        </p>

        <div className="rounded-md overflow-hidden mx-4 max-h-[32rem] max-w-[20rem] shadow-sm">
          <img
            src={profile}
            alt="profile"
            className=" object-cover"
          />
        </div>

        <p className=" sm:hidden text-xs uppercase mt-2  tracking-widest font-semibold">
          better experience on full screen
        </p>

        <div ref={imageRef} className="mb-4">
          <RiArrowDownWideFill className="mb-4 text-4xl font-extralight " />
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
