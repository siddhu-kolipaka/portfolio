/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Con4 = forwardRef(({ isVisible }, ref) => {
  return (
    isVisible && (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1 }}
        className="px-4 relative"
      >
        <div className="text-3xl my-2  text-blue-500 font-extrabold">
          About Me
        </div>
        <div className="text-xl my-6">
          <pre>
            You want proof? Get hold of my Aadhar card.
            <br />
            (You'll never find it here)
          </pre>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-blue-500 ">Name: </span>
            <span className="text-xl">Kolipaka Ram Chandra Siddharth</span>
          </div>
          <div>
            <span className="text-blue-500 ">Phone: </span>
            <span className="text-xl">+91 9000416261</span>
          </div>
          <div>
            <span className="text-blue-500 ">Nationality: </span>
            <span className="text-xl">Indian</span>
          </div>
          <div>
            <span className="text-blue-500 ">Email: </span>
            <span className="text-xl">kolipakasiddhu@gmail.com</span>
          </div>
          <div>
            <span className="text-blue-500 ">Freelance: </span>
            <span className="text-xl">Available</span>
          </div>
          <div>
            <span className="text-blue-500 ">Languages: </span>
            <span className="text-xl">English, Telugu, Hindi</span>
          </div>
        </div>
      </motion.div>
    )
  );
});

export default Con4;
