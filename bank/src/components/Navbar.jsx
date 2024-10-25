import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-14">
      <h1 className="text-4xl font-semibold">Clear.Bank</h1>
      <div className="text-[22px] capitalize flex items-center gap-12">
      <div className="flex gap-3 items-center">
          <h3>product </h3>
          <FaAngleDown size={15}/>
        </div>
        <div className="flex gap-3 items-center">
          <h3>usecases </h3>
          <FaAngleDown size={15}/>
        </div>
        <div className="flex gap-3 items-center">
          <h3>about </h3>
          <FaAngleDown size={15}/>
        </div>
        <div className="">
          <h3>learn </h3>
        </div>
        <div className="flex items-center bg-[#70F1DA] px-4 justify-center rounded-full py-1 gap-2">
          <button className="">Begin
          </button>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
