import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import TextReveal from "../components/TextReveal";

const projects = [
  {
    image:
      "https://res.cloudinary.com/deijidv94/image/upload/v1748534477/Screenshot_2025-05-29_195633_oituur.jpg",
    techStack: ["React", "Tailwind Css 4"],
    title: "Bakken & Bæck studio",
    content: (
      <>
        Bakken & Bæck is a design and technology studio. I have tried
        replicating its modern design, smooth animations, and responsive layout.
        It serves as a showcase of front-end development skills and UI/UX
        attention to detail. There are 2 pages. The second one, a clients page
        can be opened on clicking any navbar item. The original website is{" "}
        <a
          href="https://bakkenbaeck.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-500 hover:opacity-90 cursor-pointer"
        >
          here
        </a>
      </>
    ),
    bgColor: "bg-orange",
    github: "https://github.com/Archil-Milorava/bakkenBaeck",
    liveLink: "https://bakken-baeck.vercel.app/",
    fullStack: false,
    video: "https://res.cloudinary.com/deijidv94/video/upload/v1748873208/1-VEED_3_q21oyn.mp4"
  },
  {
    image:
      "https://res.cloudinary.com/deijidv94/image/upload/v1748252833/Screenshot_2025-05-26_134653_fmuv6r.jpg",
    techStack: ["React", "Tailwind Css", "Framer motion"],
    title: "Setanta Sports Landing",
    content: (
      <>
        This is sport streaming platform, which has very beautiful ui design. I
        have spontaneously built the landing page and tried to make it as
        similar as possible. The ui is done with Tailwind v4 and the animations
        with framer motion. The original website is{" "}
        <a
          href="https://setantasports.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-500 hover:opacity-90 cursor-pointer"
        >
          here
        </a>
      </>
    ),
    bgColor: "bg-silver",
    github: "https://github.com/Archil-Milorava/Set-Clone",
    liveLink: "https://set-clone.vercel.app/",
    fullStack: false,
    video: "https://res.cloudinary.com/deijidv94/video/upload/v1748878244/Level_Up_Your_Game_itw3p1.mp4"
  },
  {
    image:
      "https://res.cloudinary.com/deijidv94/image/upload/v1748882960/image1_jmt8v0.jpg",
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
    title: "Book a Real Estate",
    content:
      "The data is collected by me and counts 15-16 properties with several images. On this platform user can register and login with JWT, which is sent with httpOnly cookie. After that User is able to choose wished dates and number of guests and book a property. The stack is react and express. The data is fetched from URL, with serverside filtering. The booked property is saved on Neon DB.",
    bgColor: "bg-yellow",
    github: "https://github.com/Archil-Milorava/real-estate",
    liveLink: "https://real-estate-2dmj.onrender.com/",
    fullStack: true,
    video: "https://res.cloudinary.com/deijidv94/video/upload/v1748879000/Level_Up_Your_Game_1_s06vne.mp4"
  },
  {
    image:
      "https://res.cloudinary.com/deijidv94/image/upload/v1748875808/image1_updfnu.jpg",
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
    video: "https://res.cloudinary.com/deijidv94/video/upload/v1748879707/Level_Up_Your_Game_3_p1ttja.mp4"
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
    <section className=" w-full h-auto min-h-screen overflow-hidden  text-dark sm:flex sm:flex-col bg-white   pb ">
      {/* introduction */}
      <div className="h-1/6 w-full pt-4  px-1 flex items-center justify-center font-Mulish text-black font-bold  uppercase gap-4 sm:gap-11">
        <h1
          ref={selectedRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest"
        >
          selected
        </h1>
        <h1
          ref={workRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-center justify-center  tracking-widest"
        >
          w
          <span>
            <img
              src="/o.png"
              alt="o"
              className="h-[2rem] sm:h-[3rem] md:h-16 lg:h-[5rem] xl:h-[6rem]"
            />
          </span>{" "}
          rk
        </h1>
      </div>

      <TextReveal>
        <p className="font-Roboto tracking-wide uppercase text-center text-[10px] md:text-[24px] px-8 text-red-700 my-8 md:my-8">
           ** important: The projects marked with "Full-stack" takes 1-2 minutes to load. I
          kindly ask for a patience to check them.
        </p>
      </TextReveal>
      {/* cards div section */}

      <div className="h-full w-full flex flex-col gap-44  items-center my-40 sm:my-24">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SecondPage;
