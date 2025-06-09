// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TagReveal = ({ children, delay }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
      className="bg-white  text-xs lg: flex items-center justify-center px-2 rounded-full h-[20px] font-Roboto "
    >
      {children}
    </motion.div>
  );
};

export default TagReveal;
