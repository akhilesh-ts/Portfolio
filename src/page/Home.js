import React from "react";
import Navbar from "../component/Navbar";
import Profile from "../component/Profile";
import Bio from "../component/Bio";

const Home = () => {
  return (
    <div className="w-full">
      <div className="max-w-80  mx-auto py-5 md:py-7">
        <Navbar />
      </div>

      <div className="w-full   xl:flex  xl:justify-between  xl:gap-12 mt-4 p-3 ">
        <div className="xl:sticky  xl:top-14 xl:h-screen xl:w-2/5 ">
          <Profile />
        </div>

        <div id="removeScrollBar" className=" w-full  xl:overflow-y-scroll ">
          <Bio />
        </div>

      </div>
      

     
    </div>
  );
};

export default Home;
