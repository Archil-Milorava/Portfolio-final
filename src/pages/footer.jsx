import React from "react";

const Footer = () => {
  return (
    <section
      className="bg-[#ebebeb] h-[5rem]  sm:h-[10rem] w-full font-PlayfairDisplay text-xl" 
    >
      <ul className="w-full h-full flex items-center justify-center text-dark gap-8 ">
        <li className="cursor-pointer hover:underline transition-all duration-1000 ">
          linked in
        </li>
        <li className="cursor-pointer hover:underline transition-all duration-1000 ">
          Github
        </li>
        <li className="cursor-pointer hover:underline transition-all duration-1000 ">
          Instagram
        </li>
        <li className="cursor-pointer hover:underline transition-all duration-1000 ">
          facebook
        </li>
      </ul>
    </section>
  );
};

export default Footer;
