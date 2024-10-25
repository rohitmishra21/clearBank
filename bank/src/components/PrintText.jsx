import React from "react";
import { GoArrowRight } from "react-icons/go";

const PrintText = () => {
  return (
    <div className="h-96  px-12 w-[70%] py-12 ">
      <h1 className="text-2xl">Driven by technology</h1>
      <h1 className="text-6xl py-6 tracking-wider">
        Be part of the future of <br /> banking with our API
      </h1>
      <h1 className="text-xl">
        With our cloud-based API, we offer banking infrastructure so financial
        institutions can focus on providing the best service for their customers
        and stay relevant in a fast-paced market.
      </h1>
      <button className="mt-12 px-6 py-3 items-center gap-2 justify-start flex rounded-full  border-black border-2">
        <h1>Get started</h1>
        <GoArrowRight />
      </button>
    </div>
  );
};

export default PrintText;
