import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image:
      "https://res.cloudinary.com/deijidv94/image/upload/v1748171181/1_nbxpfc.jpg",
    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind v4",
      "Framer",
      "Express",
      "Prisma",
      "Neon DB",
      "REST Api",
    ],
    title: "Ecommerce",
    content:
      "This is an ecommerce front end website with beautiful animation. It fetches data with react query from Neon DB. The backend is build with node/express. On front you can manipulate cart state which is bult with redux toolkit.",
    bgColor: "bg-gold",
    github: "https://github.com/Archil-Milorava/ecommerce",
    liveLink: "https://ecommerce-ig4w.onrender.com",
    fullStack: true,
  },
  {
    image:
      "https://res.cloudinary.com/deijidv94/image/upload/v1748171895/1_mrxfol.jpg",
    techStack: [
      "React",
      "Tailwind Css",
      "React Query",
      "Leaflet Map",
      "Server Side Filtering",
      "Node Js",
      "Express",
      "Prisma",
      "Postgress",
      "REST Api",
      "JWT Auth",
    ],
    title: "Book Real Estate",
    content:
      "The data is collected by me and counts 15-16 properties with several images. On this platform user can register and login with JWT, which is sent with httpOnly cookie. After that User is able to choose wished dates and number of gusts and book a property. The stack is react and express. The data is fetched from URL, with serverside filtering. The booked property is saved on Neon DB.",
    bgColor: "bg-yellow",
    github: "https://github.com/Archil-Milorava/real-estate",
    liveLink: "https://real-estate-2dmj.onrender.com/",
    fullStack: true,
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
    <section className=" w-full h-auto min-h-screen overflow-hidden  text-dark sm:flex sm:flex-col bg-white pb-16 ">
      {/* introduction */}
      <div className="h-1/6 w-full pt-4  px-2 flex items-center justify-center font-Mulish text-black font-bold  uppercase gap-4 sm:gap-11">
        <h1
          ref={selectedRef}
          className="text-5xl sm:text-8xl md:text-9xl tracking-widest"
        >
          selected
        </h1>
        <h1
          ref={workRef}
          className="text-5xl sm:text-8xl md:text-9xl flex items-center justify-center  tracking-widest"
        >
          w
          <span>
            <img
              src="/o.png"
              alt="o"
              className="h-[2.5rem] sm:h-[5rem] md:h-28"
            />
          </span>{" "}
          rk
        </h1>
      </div>

      {/* cards div section */}

      <div className="h-full w-full flex flex-col items-center pt-11">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SecondPage;
