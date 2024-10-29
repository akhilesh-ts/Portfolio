import React from "react";
import { achievement } from "../utils/contstant";

const AchievementStats = () => {
  return (
    <div  className="w-full xl:w-3/5  flex items-center justify-between gap-4 ">
      {achievement.map((item) => (
        <div key={item?.id} className="w-full ">
          <h1 className="text-4xl text-center  md:text-5xl md:text-center xl:text-left xl:text-6xl xl:text-md font-bold mb-2 text-white">
            {item?.count}
          </h1>
          <p className=" text-sm text-center md:text-sm font-medium md:text-center xl:text-left xl:text-lg text-des-text-color">
            {
              item?.description
            }
          </p>
        </div>
      ))}

    </div>
  );
};

export default AchievementStats;
