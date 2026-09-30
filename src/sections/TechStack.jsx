import EmailCopy from "../components/EmailCopy";
import StackBox from "../components/StackBox";
import TextFade from "../components/TextFade";
import { techStack } from "../data/techStack";

const TechStack = () => {
  return (
    <section className="py-[4rem] font-pirveli bg-[#F1F1F1] px-[6rem] h-auto w-full hidden sm:flex items-center justify-center relative">
      <EmailCopy />
      <TextFade className="flex flex-col gap-8">
        {techStack.map((group) => (
          <div key={group.title} className="w-full flex flex-col gap-2">
            <h1 className="text-4xl uppercase tracking-widest font-bold text-dark">
              {group.title}
            </h1>
            <div className="flex flex-wrap gap-2 w-full">
              {group.items.map(({ icon, label }) => (
                <StackBox key={label} icon={icon} label={label} />
              ))}
            </div>
          </div>
        ))}
      </TextFade>
    </section>
  );
};

export default TechStack;
