import React from "react";
import { navData } from "../utils/contstant";
import { motion } from "framer-motion";
import { Tooltip } from "flowbite-react";


const Navbar = () => {
  return (
    <div
      className="bg-navbg p-3 rounded-2xl flex justify-around text-xl cursor-pointer text-white">
      {navData.map((item) => (
        
        <Tooltip
        key={item?.id}
          content={item?.name}
          placement="bottom"
          animation="duration-1000"
          className=" bg-secondary-color text-xs"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={item.onClick}
            
          >
            {item?.icon}
          </motion.div>
        </Tooltip>
        
      ))}
    </div>
  );
};

export default Navbar;
