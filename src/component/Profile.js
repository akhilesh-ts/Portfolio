import React from "react";
import linkedin from "../assets/linkedin.jpg";
import { socialLink } from "../utils/contstant";
import { motion } from "framer-motion";
import { description } from "../utils/contstant";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div  className="bg-white w-full xl:max-w-80 py-5  rounded-2xl">
      <div className=" p-4 md:p-0 md:flex flex-col items-center justify-center">
        {/* <img src={linkedin} alt="profile pic" className="w-full h-52 object-cover md:h-auto md:w-52 rounded-xl" /> */}
        <img src={linkedin} alt="profile pic" className="w-full h-56 object-cover  md:h-auto md:w-52 rounded-xl" />

        <h1 className="py-3 md:py-6 text-2xl text-center font-extrabold">AKHILESH TS</h1>
      </div>

      <hr className=" border-0 border-t-4 border-dashed border-orange-500 mb-6" />

      <div className="w-full">
        <p className="font-medium text-center text-gray-500 mb-6">
          {description}
        </p>
        <div className="max-w-80  mx-auto flex items-center justify-around p-4 ">
          {socialLink.map((item) => (
            <Link key={item?.name} to={item?.path}>
            <motion.div
              
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-orange-500 cursor-pointer text-xl"
            >
              {item?.icon}
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
