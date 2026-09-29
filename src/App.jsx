// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { Analytics } from "@vercel/analytics/react";

import InitialLoad from "./animations/InitialLoad";
import GoToTop from "./components/GoToTop";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Pitch from "./sections/Pitch";
import Showreel from "./sections/Showreel";
import SkillsMarquee from "./sections/SkillsMarquee";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        },
      }}
      className="h-auto w-full min-h-screen flex flex-col m-0 p-0 overflow-hidden bg-white relative font-pirveli"
    >
      <Analytics />
      <InitialLoad />
      <GoToTop />
      <Hero />
      <Experience />
      <SkillsMarquee />
      <TechStack />
      <Pitch />
      <Showreel />
      <Footer />
    </motion.div>
  );
};

export default App;
