import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

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
      className="h-auto w-full min-h-screen flex flex-col m-0 p-0 bg-white"
    >
      <FirstPage />
      <SecondPage />
    </motion.div>
  );
};

export default App;
