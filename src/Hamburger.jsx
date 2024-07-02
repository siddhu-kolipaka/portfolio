/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const Hamburger = ({ handleHamburger, IsActive }) => {
  return (
    <>
      <motion.button
        onClick={handleHamburger}
        className="fixed top-20 right-4 size-16 flex flex-col gap-1 justify-center items-center bg-blue-600 rounded-full"
      >
        <motion.div
          style={IsActive && { rotate: "45deg", y: 8 }}
          className="w-8 h-1 bg-white rounded-full  transition-all"
        ></motion.div>
        <motion.div
          style={IsActive && { opacity: 0 }}
          className="w-8 h-1 bg-white rounded-full"
        ></motion.div>
        <motion.div
          style={IsActive && { rotate: "-45deg", y: -8 }}
          className="w-8 h-1 bg-white rounded-full  transition-all"
        ></motion.div>
      </motion.button>
    </>
  );
};

export default Hamburger;
