import TextReveal from "../components/TextReveal";

const Footer = () => {
  return (
    <section className=" bg-[#ebebeb] h-[5rem]  sm:h-[10rem] w-full font-Mulish font-extralight uppercase tracking-widest text-[12px] md:text-xl transition-all duration-1000">
      <ul className="w-full h-full flex items-center justify-center text-dark gap-8 ">
        <TextReveal delay={0.1}>
          <a
            className="cursor-pointer hover:underline transition-all duration-1000 "
            href="https://www.linkedin.com/in/archil-milorava-9199a110a/"
            target="_blank"
          >
            LinkedIn
          </a>
        </TextReveal>
        <TextReveal delay={0.2}>
          <a
            className="cursor-pointer hover:underline transition-all duration-1000 "
            href="https://github.com/Archil-Milorava"
            target="_blank"
          >
            Github
          </a>
        </TextReveal>
        <TextReveal delay={0.3}>
          <a
            className="cursor-pointer hover:underline transition-all duration-1000 "
            href="https://www.instagram.com/achimilorava/"
            target="_blank"
          >
            Instagram
          </a>
        </TextReveal>
        <TextReveal delay={0.4}>
          <a
            className="cursor-pointer hover:underline transition-all duration-1000 "
            href="https://x.com/achimilorava"
            target="_blank"
          >
            Twitter
          </a>
        </TextReveal>
      </ul>
      <p className="text-center text-xs bg-[#ebebeb] tracking-wider pb-4">
        © 2025 Archil Milorava. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
