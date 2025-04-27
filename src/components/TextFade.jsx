// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TextFade = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { y: 10, opacity: -1 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextFade;
