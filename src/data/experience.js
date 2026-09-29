import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CornerDownRightIcon } from "lucide-react";
import { useRef } from "react";

const portfolioExperiences = [
  // {
  //   id: 1,
  //   title: "Frontend Developer",
  //   company: "NexTbil Tech",
  //   location: "Tbilisi, Georgia · Hybrid",
  //   content:
  //     "Frontend development for a high-traffic marketing ecosystem, maintaining multiple Next.js websites based on Figma designs. Modernized legacy infrastructure by migrating several domains from monolithic PHP to a scalable Next.js architecture. Collaborated with the marketing team in an Agile workflow to ship landing pages and new features rapidly. Worked with both SVN and Git across different platforms.",
  //   bgColor: "linear-gradient(100deg, #FF7722 0%, #FF7722 100%)",
  //   dateFrom: "2025 Sep",
  //   dateTo: "Present",
  //   duration: "4 months",
  //   url: "#",
  //   bg: "#FF7722",
  //   stack: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "SVN",
  //     "Git",
  //     "Figma"
  //   ],
  //   isConfidential: true
  // },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "dataPad GmbH",
    location: "Vienna, Austria · Remote",
    content:
      "Developed full-stack features for a large-scale Meteor.js application powering a document digitization platform. Built REST API endpoints for the React Native mobile app, enabling document upload, form filling, and synchronization. Implemented customer-facing features using React Hook Form and MUI, including a dynamic document upload portal. Contributed to backend logic and worked directly with MongoDB to manage document workflows and user data.",
    bgColor: "linear-gradient(135deg, #3D2FA9 0%, #3D2FA9 100%)",
    dateFrom: "2025 Aug",
    dateTo: "Present",
    duration: "5 months",
    url: "https://datapad.at/",
    bg: "#3D2FA9",
    stack: [
      "Meteor.js",
      "React",
      "MongoDB",
      "REST APIs",
      "MUI",
      "React Hook Form",
      "Node.js"
    ],
    isConfidential: true
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Bitasmbl",
    location: "Tbilisi, Georgia · Remote",
    content:
      "Developed the UI for an AI-powered recruitment platform enabling developers to showcase projects and match with recruiters. Translated complex Figma designs into responsive, modern React components. Built reusable UI elements and improved design consistency across the app. Contributed to a fresh UI layout focused on clarity and performance.",
    bgColor: "linear-gradient(135deg, #FF3D34 0%, #FF3D34 100%)",
    dateFrom: "2025 Feb",
    dateTo: "2025 Aug",
    duration: "7 months",
    url: "http://bitasmbl.com/",
    bg: "#FF3D34",
    stack: [
      "React",
      "Tailwind CSS",
      "Figma",
      "REST APIs",
      "GitHub"
    ],
    isConfidential: false
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Blitzsport",
    location: "Tbilisi, Georgia · Remote",
    content:
      "Built and maintained the Next.js frontend for a sports news platform. Implemented Google Authentication and role-based access control for internal editors. Developed a full back-office including rich-text editor integration, content publishing tools, and a dashboard UI. Styled all pages with Tailwind CSS and optimized overall performance and accessibility.",
    bgColor: "linear-gradient(135deg, #785F47 0%, #785F47 100%)",
    dateFrom: "2023 Feb",
    dateTo: "2025 Jan",
    duration: "2 years",
    url: "https://www.blitzsports.live/",
    bg: "#785F47",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "NextAuth",
      "jotai",
      "Git",
      "Cloudinary"
    ],
    isConfidential: false
  }
];


const ExperienceCards = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
    const selectedRef = useRef(null);
  

useGSAP(() => {
  gsap.fromTo(
    selectedRef.current,
    { 
      clipPath: "inset(0 100% 0 0)" 
    },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: selectedRef.current,
        start: "top 75%",
      }
    }
  );
});
  return (
    <section className="relative flex flex-col items-center font-Mulish justify-center w-full min-h-screen bg-[#EEEEEE] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] lg:bg-[size:40px_40px]" />

      <h1 ref={selectedRef} className="text-5xl sm:text-8xl md:text-8xl lg:text-[10rem] font-extrabold tracking-wide lg:tracking-wider mt-4 sm:mt-8  text-center text-black">
        EXPERIENCE
      </h1>

      <div className="flex z-10 flex-col w-full max-w-[70rem] items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 ">
        {portfolioExperiences.map((item) => (
          <div
            key={item.id}
            className="group w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] border border-black font-Roboto flex flex-col mb-6 sm:mb-8 "
          >
            <p className="border-b border-b-black p-1 sm:px-3 text-sm sm:text-base lg:text-lg text-black">
              {item.dateFrom} - {item.dateTo}
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-wide pt-4 sm:pt-6 lg:pt-8 p-2 sm:p-3 lg:p-4">
              {item.title}
            </h1>

            <p className="m-2 sm:m-3 lg:m-4 mt-3 sm:mt-4 lg:mt-6 text-start leading-relaxed text-black/80 text-sm sm:text-base lg:text-lg">
              {item.content}
            </p>

            <div className="flex gap-2 sm:gap-3 flex-wrap m-2 sm:m-3 lg:m-4 pb-6 sm:pb-8 lg:pb-12">
              {item.stack.map((s, index) => (
                <p
                  key={index}
                  className="text-xs sm:text-sm border-b text-black border-b-black p-0.5 sm:p-1 px-1 sm:px-2"
                >
                  {s}
                </p>
              ))}
            </div>

            <p className="p-4 italic text-sm">{item.isConfidential ? "* Confidential project" : ""}</p>

            <div
              className="flex sm:flex-row w-full justify-between text-white items-center px-4 py-2 sm:px-4 sm:py-0 transition-all duration-1000 cursor-pointer hover:shadow-2xl"
              style={{ background: item.bg }}
            onClick={() => handleRedirect(item.url)}
            >
              <p className="sm:p-3 text-base sm:text-lg lg:text-xl text-center sm:text-left">
                {item.company} <strong className=" sm:inline">●</strong>{" "}
                <small className=" sm:inline mt-1 sm:mt-0 text-sm sm:text-base">
                  {item.location}
                </small>
              </p>
              <div className="flex items-center gap-2">
                <CornerDownRightIcon color="white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCards;
