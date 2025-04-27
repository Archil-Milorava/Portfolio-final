import "./colorChange.css";
import TextFade from "./../components/TextFade";
import Accordion from "../components/Accordion";

const Experience = () => {
  return (
    <section className="font-PlayfairDisplay bg-gradient-to-t from-white to-[#E8E8E8]  h-screen max-h-auto w-full py-[15rem] px-[10rem] gap-16  overflow-hidden hidden sm:flex items-center justify-center">
      {/* experince text div */}
      <div className="text-end w-[25rem]">
        <TextFade className="">
          <h1 className="text-dark text-5xl font-semibold font- uppercase ">
            Experience
          </h1>
          <p className="text-dark font-Prata text-sm text-end">
            I have worked with some of the most innovative industry leaders to
            help build their top-notch products.
          </p>
        </TextFade>
      </div>
      {/* experience list div */}
      <div>
        <TextFade className="">
          <Accordion />
        </TextFade>
      </div>
    </section>
  );
};

export default Experience;
