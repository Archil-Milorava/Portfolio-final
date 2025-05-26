import TextReveal from "../components/TextReveal";

const BeforeVideo = () => {
  return (
    <section className="flex h-auto bg-[#F1F1F1] py-20 px-5 md:px-10 xl:px-1  items-center justify-center">
      <p className=" text-center text-4xl md:text-6xl  font-pirveli text-gray-800/90">
        I don't just write code - I{" "}
        <TextReveal delay={0.2}>
          <span className="text-[#CB8259]">deliever</span> complete, <br />
        </TextReveal>
        <TextReveal delay={0.4}>
          <span className="text-[#CB8259]"> production-ready websites.</span>
        </TextReveal>
        From initial wireframes to final deployment, <br /> I handle the entire
        process including UI design, <br />{" "}
        <TextReveal delay={0.6}>
          <span className="text-[#CB8259]">frontend development </span>
        </TextReveal>
        and API integrations
      </p>
    </section>
  );
};

export default BeforeVideo;
