import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "./general.css";

import { HiOutlineArrowLongDown } from "react-icons/hi2";

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
        scrub: 2,
      },
      y: 100,
      color: "#FF8863",
    });
  });

  return (
    <main className="  w-full h-screen overflow-hidden bg-[#F5F5ED]  flex flex-col drop-shadow-">
      {/* Header Container */}
      <div className="h-1/6 w-full flex items-center justify-center">
        <h1
          ref={nameRef}
          className="text-[2rem] sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-[8rem] mt-8 font-bla uppercase text-dark  tracking-widest "
        >
          archil milorava
        </h1>
      </div>

      {/* Placeholder for content */}
      <div className=" w-full h-full flex flex-col  items-center justify-around text-dark py-2">
        <p className="text-[1.5rem]  text-3xl font-bla  tracking-wide">
          Web Developer From <span className=" shiny-effect"> Georgia </span>
        </p>

        <div className="">
          <img
            src="/profilePic.webp"
            alt="profile"
            className="h-[30rem]  object-cover"
          />
        </div>

        <p className="hidden sm:block  uppercase text- font-bla  tracking-wide">
          Scroll to explore more
        </p>

        <p className=" sm:hidden uppercase text- font-bla  tracking-wide">
          better experience on full screen
        </p>

        <div ref={imageRef} className="mb-4">
          <HiOutlineArrowLongDown className="mb-4 text-4xl font-extralight" />
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
