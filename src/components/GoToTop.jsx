import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    isVisible && (
      <button
        onClick={goTop}
        className="fixed bg-dark  h-12 w-12 rounded-md flex items-center justify-center bottom-4 right-4 transition-all duration-1000 z-[9999]"
      >
        <IoIosArrowUp className="text-beige" />
      </button>
    )
  );
};

export default GoToTop;
