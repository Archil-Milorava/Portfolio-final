import TextReveal from "../components/TextReveal";


// const linkClass =
//   "text-sm cursor-pointer hover:opacity-50 transition-all duration-300";

const Footer = () => {
  return (
    <section className="bg-[#ebebeb] w-full flex flex-col items-center gap-6 py-12 sm:pt-12 font-Mulish font-extralight uppercase tracking-widest text-[12px] md:text-xl text-dark transition-all duration-1000">
      {/* the CV in both languages (PDFs live in /public). */}
      {/* <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4">
        <li>
          <TextReveal delay={0.2}>
            <a
              className={linkClass}
              href="/Archil-Milorava-CV-EN.pdf"
              target="_blank"
              rel="noopener"
            >
              CV · English
            </a>
          </TextReveal>
        </li>
        <li>
          <TextReveal delay={0.3}>
            <a
              className={linkClass}
              href="/Archil-Milorava-CV-DE.pdf"
              target="_blank"
              rel="noopener"
            >
              CV · Deutsch
            </a>
          </TextReveal>
        </li>
      </ul> */}

      <ul className="w-full flex items-center justify-center text-dark gap-8 ">
        <TextReveal delay={0.1}>
          <a
            className="cursor-pointer hover:opacity-50 transition-all duration-300 "
            href="https://www.linkedin.com/in/archil-milorava-9199a110a/"
            target="_blank"
          >
            LinkedIn
          </a>
        </TextReveal>
        <TextReveal delay={0.2}>
          <a
            className="cursor-pointer hover:opacity-50 transition-all duration-300 "
            href="https://github.com/Archil-Milorava"
            target="_blank"
          >
            Github
          </a>
        </TextReveal>
        <TextReveal delay={0.3}>
          <a
            className="cursor-pointer hover:opacity-50 transition-all duration-300 "
            href="https://www.instagram.com/achimilorava/"
            target="_blank"
          >
            Instagram
          </a>
        </TextReveal>
        <TextReveal delay={0.4}>
          <a
            className="cursor-pointer hover:opacity-50 transition-all duration-300 "
            href="https://x.com/achimilorava"
            target="_blank"
          >
            Twitter
          </a>
        </TextReveal>
      </ul>
    </section>
  );
};

export default Footer;
