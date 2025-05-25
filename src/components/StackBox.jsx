import StackIcon from "tech-stack-icons";


const StackBox = ({ stack }) => {
  const { title, icon } = stack;
  return (
    <div className=" w-24 h-24 border border-black/10  rounded-lg  flex flex-col items-center justify-center gap-0.5   cursor-pointer hover:bg-orange transition-all duration-700">
      <StackIcon className="h-8 " name={icon} />
      <p className="text-sm font-semibold font-Roboto"> {title}</p>

    </div>
  );
};

export default StackBox;


