import { useState } from "react";

const EmailCopy = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("achimilorava16@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`absolute right-4 top-4 rounded-md text-white h-[5rem] cursor-pointer ${
        isHovered ? "w-[15rem] bg-[#181818] px-2" : "w-[6rem] bg-[#2D2D2D]"
      } transition-all duration-300 ease-in-out z-[9999] text-xs tracking-wider font-Roboto font-bold overflow-hidden`}
    >
      {isHovered ? (
        <div
          className={`w-full h-full flex items-center justify-around transition-opacity ${
            isHovered ? "opacity-100 delay-200" : "opacity-0"
          }`}
        >
          <span>achimilorava16@gmail.com</span>
          <button 
            onClick={copyEmail}
            className="bg-[#444444] p-1 px-2 rounded-md hover:bg-[#555555] active:scale-95 transition-all"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      ) : (
        <span className="w-full h-full flex items-center justify-center transition-opacity">
          Get In Touch
        </span>
      )}
    </div>
  );
};

export default EmailCopy;