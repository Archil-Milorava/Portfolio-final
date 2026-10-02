import { Analytics } from "@vercel/analytics/react";

import GoToTop from "./components/GoToTop";
import Preloader from "./components/Preloader";
import { PROFILE_IMAGE } from "./data/site";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Pitch from "./sections/Pitch";
import Showreel from "./sections/Showreel";
import SkillsMarquee from "./sections/SkillsMarquee";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <div className="h-auto w-full min-h-screen flex flex-col m-0 p-0 overflow-hidden bg-white relative font-pirveli">
      <Analytics />
      <Preloader images={[PROFILE_IMAGE]} />
      <GoToTop />
      <Hero />
      <Experience />
      <SkillsMarquee />
      <TechStack />
      <Pitch />
      <Showreel />
      <Footer />
    </div>
  );
};

export default App;
