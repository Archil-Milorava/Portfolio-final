// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TextReveal = ({ children, delay }) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;