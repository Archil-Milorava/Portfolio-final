import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GoToTop from "./components/GoToTop";
import Experience from "./pages/Experience";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import TechStack from "./pages/TechStack";
import VideoPage from "./pages/VideoPage";
import Footer from "./pages/footer";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Archil Milorava</title>
      </Helmet>
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
        className="h-auto w-full min-h-screen flex flex-col m-0 p-0 bg-white relative"
      >
        <GoToTop />
        <FirstPage />
        <SecondPage />
        <TechStack />
        <VideoPage />
        <Footer />
      </motion.div>
    </HelmetProvider>
  );
};

export default App;
