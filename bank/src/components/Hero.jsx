import React from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="h-96   px-14 flex  justify-between items-end">
   
        <h1 className="text-[5.8rem] leading-none font-medium">Innovate.<br/> Differentiate. <br /> Grow.</h1>
      <div className="flex items-center bg-[#70F1DA] px-4 justify-center rounded-full py-1 gap-2">
          <button className="text-2xl">Begin
          </button>
          <GoArrowRight />
     </div>
    </div>
  );
};

export default Hero;
