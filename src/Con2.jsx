/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Con2 = forwardRef(({ isVisible }, ref) => {
  return (
    isVisible && (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 1 }}
        className="px-4 relative "
      >
        <div className="text-3xl my-2  text-blue-500 font-extrabold">
          Education
        </div>
        <div className="text-xl my-6">
          Ah! My formal education. (Pretty good scores actually!)
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="border border-blue-500 grid grid-cols-2 grid-rows-3 justify-items-center place-items-center sm:place-items-start sm:flex sm:flex-col sm:justify-evenly p-4 text-xl rounded-xl">
            <div className="text-sm ">2022 - present</div>
            <div className="text-3xl text-blue-500 row-span-full">
              IIEST, Shibpur
            </div>
            <div className="text-xl ">B.Tech in CST</div>
            <div className="text-sm ">CGPA : 9.54</div>
          </div>
          <div className="border border-blue-500 grid grid-cols-2 grid-rows-3 justify-items-center place-items-center sm:place-items-start sm:flex sm:flex-col sm:justify-evenly p-4 text-xl rounded-xl">
            <div className="text-sm ">2020 - 2022</div>
            <div className="text-3xl text-blue-500 row-span-full">
              Nano Junior College, Nallakunta
            </div>
            <div className="text-xl ">Intermediate</div>
            <div className="text-sm">12th : 989/1000</div>
          </div>
          <div className="border border-blue-500 grid grid-cols-2 grid-rows-3 justify-items-center place-items-center sm:place-items-start sm:flex sm:flex-col sm:justify-evenly p-4 text-xl rounded-xl">
            <div className="text-sm">2010 - 2020</div>
            <div className="text-3xl text-blue-500 row-span-full">
              Little Flower School, Uppal
            </div>
            <div className="text-xl">Class 1 to 10</div>
            <div className="text-sm">10th : 467/500</div>
          </div>
        </div>
      </motion.div>
    )
  );
});

export default Con2;
