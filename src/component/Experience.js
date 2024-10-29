import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { experience } from "../utils/contstant";

const Experience = () => {
  return (
    <>
      <div className="text-white  text-center xl:text-left mt-0 lg:mt-10">
        <div className="hidden md:block lg:hidden mt-4 ">
          <div className=" w-full flex gap-2 justify-center">
            <h1 className="text-4xl font-bold">01 YEARS OF</h1>
            <h1 className="text-4xl font-bold text-secondary-color">
              EXPERIENCE
            </h1>
          </div>
        </div>
        <h1 className="text-4xl mt-10 md:hidden lg:block lg:text-7xl  lg:mt-0 xl:text-7xl font-extrabold text-whitetracking-wide">
          1+ YEARS OF
        </h1>
        <h1 className="text-5xl md:hidden lg:block lg:text-8xl xl:text-7xl font-bold text-secondary-color tracking-wide">
          EXPERIENCE
        </h1>
      </div>
      <div>
        {experience.map((item) => (
          <div key={item?.id} className="w-full relative transition-colors duration-500  ease-in hover:bg-navbg p-3 rounded-lg flex flex-col gap-3 mb-4 cursor-pointer">
            <h1 className="text-2xl md:text-3xl text-white font-bold">
              {item?.position}
            </h1>

            <GoArrowUpRight className="absolute top-3 right-3 text-orange-400" />
            <h2 className="text-xl text-secondary-color font-semibold">
              {item?.name}
            </h2>
            <h3 className="text-orange-500 text-sm">{item?.date}</h3>
            <p className=" text-md md:text-lg   text-des-text-color font-medium w-full ">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
