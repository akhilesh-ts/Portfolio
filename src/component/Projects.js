import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "../utils/contstant";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="text-white  text-center xl:text-left mt-0 lg:mt-10">
        <div className="hidden md:block lg:hidden mt-4 ">
          <div className=" w-full flex gap-2 justify-center">
            <h1 className="text-4xl font-bold">RECENT</h1>
            <h1 className="text-4xl font-bold text-secondary-color">
              PROJECTS
            </h1>
          </div>
        </div>
        <h1 className="text-4xl mt-10 md:hidden lg:block lg:text-7xl  lg:mt-0 xl:text-7xl font-extrabold text-whitetracking-wide">
          RECENT
        </h1>
        <h1 className="text-5xl md:hidden lg:block lg:text-8xl xl:text-7xl font-bold text-secondary-color tracking-wide">
          PROJECTS
        </h1>
      </div>
      <div className="w-full flex flex-col lg:grid grid-cols-2  gap-3">
        {projects.map((item) => (
          <Link key={item?.id} to={item?.path}>
            <div className="w-full p-4 transition-colors duration-500 ease-in hover:bg-secondary-color rounded-lg flex gap-4 items-center mb-2 relative cursor-pointer">
              <GoArrowUpRight className="absolute top-3 right-3 text-orange-400 " />
              <img src={item?.image} className="rounded-lg" alt="ihdc" />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {item?.name}
                </h2>
                <h3 className="text-sm md:text-lg font-normal md:font-medium text-des-text-color">
                  {item?.description}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
