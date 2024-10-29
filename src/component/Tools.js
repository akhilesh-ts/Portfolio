import React from "react";
import { tools } from "../utils/contstant";

const Tools = () => {
  return (
    <>
      <div className="text-white  text-center xl:text-left mt-0 lg:mt-10">
        <div className="hidden md:block lg:hidden mt-4 ">
          <div className=" w-full flex gap-2 justify-center">
            <h1 className="text-4xl font-bold">PREMIUM</h1>
            <h1 className="text-4xl font-bold text-secondary-color">TOOLS</h1>
          </div>
        </div>
        <h1 className="text-4xl mt-10 md:hidden lg:block lg:text-7xl  lg:mt-0 xl:text-7xl font-extrabold text-whitetracking-wide">
          PREMIUM
        </h1>
        <h1 className="text-5xl md:hidden lg:block lg:text-8xl xl:text-7xl font-bold text-secondary-color tracking-wide">
          TOOLS
        </h1>
      </div>
      <div className="w-full flex flex-col lg:grid grid-cols-2  gap-3">
        {tools.map((item) => (
          <div
            key={item?.id}
            className="w-full p-4 transition-colors duration-500 ease-in hover:bg-secondary-color rounded-lg flex gap-4 items-center mb-2  cursor-pointer"
          >
            <div className={` text-xl   p-4 bg-white rounded-lg ${item?.color}`}>{item?.icon}</div>

            <div>
              <h2 className="text-xl font-semibold text-white">{item?.name}</h2>
              <h3 className="text-sm md:text-lg font-normal md:font-medium text-des-text-color">
                {item?.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tools;
