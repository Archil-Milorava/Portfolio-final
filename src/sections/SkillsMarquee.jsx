import Marquee from "react-fast-marquee";

const MarqueText = () => {
  return (
    <Marquee
      speed={80}
      
      pauseOnHover={true}
      className="h-11 sm:h-24 text-center border mb-24 md:text-5xl lg:text-5xl font-semibold text-gray-900/50 font-PlayfairDisplay"
    >
      Adaptability ✧ Problem-Solving ✧ Team Collaboration ✧ Creativity ✧
      Attention to Details ✧ Empathy ✧ Clear Communication ✧ Patience ✧ Cultural
      Awareness  ✧ Decision Making ✧ Flexibility ✧ Positive
      Attitude ✧ Work Ethic ✧
    </Marquee>
  );
};

export default MarqueText;
