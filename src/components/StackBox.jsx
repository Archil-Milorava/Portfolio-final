import GlareHover from "./ShinyButton";
import TechIcon from "./TechIcon";

const StackBox = ({ icon, label }) => (
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
    width="auto"
    className="min-w-[80px] px-2"
  >
    <div className="flex flex-col items-center justify-center gap-1">
      {/* Always in the brand colour (Simple Icons supplies the hex). */}
      <TechIcon
        icon={icon}
        className="h-9 w-9 text-[color:var(--brand)]"
        style={{ "--brand": `#${icon.hex}` }}
      />
      <p className="text-sm font-semibold font-Roboto">{label}</p>
    </div>
  </GlareHover>
);

export default StackBox;
