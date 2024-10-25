import React from "react";
import { motion } from "framer-motion";
const Icon = () => {
  return (
    <>
      <div className="h-48  flex overflow-x-hidden items-center ">
        <motion.div
          animate={{
            x: -900,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-32 w-full  whitespace-nowrap"
        >
          <div className="inline-block mx-8  w-60 h-full ">
            <img
              src="https://clear.bank/uploads/Logos/TrueLayer-Logo.svg"
              alt=""
            />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img
              src="https://clear.bank/uploads/Logos/Allica-Bank-Logo-V2.svg"
              alt=""
            />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img
              src="https://clear.bank/uploads/Logos/Tide_2022-05-23-154717_ibot.svg"
              alt=""
              className="h-full object-cover"
            />
          </div>
          <div className=" inline-block mx-8 w-60 h-full">
            <img
              src="https://clear.bank/uploads/Logos/Wealthify-Logo.svg"
              alt=""
            />
          </div>
         
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Chip.svg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/eToro.svg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Paypoint-2.svg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Coinbase-2.svg" alt="" />
          </div>

          <div className=" inline-block mx-8 w-60 h-full ">
            <img
              src="https://clear.bank/uploads/Logos/Wealthify-Logo.svg"
              alt=""
            />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/eToro.svgg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Chip.svg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Chip.svg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Paypoint-2.svg" alt="" />
          </div>
          <div className=" inline-block mx-8 w-60 h-full ">
            <img src="https://clear.bank/uploads/Logos/Coinbase-2.svg" alt="" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Icon;
