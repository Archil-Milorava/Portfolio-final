import { useEffect, useState } from "react";

const InitialLoad = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute w-full bg-dark z-[9999] overflow-hidden transition-all duration-1000 ease-in-out flex items-center justify-center`}
      style={{ height: isLoaded ? "100vh" : "0px" }}
      
    >
        <h1 className={`text-white text-7xl uppercase ${!isLoaded  && "opacity-0"} transition-opacity duration-500 ease-in-out tracking-widest`}>Welcome</h1>
    </div>
  );
};

export default InitialLoad;
