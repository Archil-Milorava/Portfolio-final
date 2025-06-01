// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GoToTop from "./components/GoToTop";
import MarqueText from "./components/MarqueText";
import RotatingText from "./components/ShinyButton";
import BeforeVideo from "./pages/BeforeVideo";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import TechStack from "./pages/TechStack";
import VideoPage from "./pages/VideoPage";
import Footer from "./pages/footer";
import GlareHover from "./components/ShinyButton";

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
      className="h-auto w-full min-h-screen flex flex-col m-0 p-0 overflow-hidden bg-white relative "
    >
      <GoToTop />
      <FirstPage />

      <SecondPage />
      <MarqueText />

      <TechStack />

      <BeforeVideo />

      <VideoPage />
      <Footer />
    </motion.div>
  );
};

export default App;
