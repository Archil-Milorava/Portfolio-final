import StackIcon from "tech-stack-icons";
import GlareHover from "./ShinyButton";

const StackBox = ({ stack }) => {
  const { title, icon } = stack;
  return (
    
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <div className=" flex flex-col items-center justify-center">
          <StackIcon className="h-11 " name={icon} />
          <p className="text-sm font-semibold font-Roboto"> {title}</p>
        </div>
      </GlareHover>
  
  );
};

export default StackBox;
