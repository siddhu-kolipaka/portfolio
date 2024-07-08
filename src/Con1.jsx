/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

import { motion } from "framer-motion";
import { forwardRef } from "react";

const Con1 = forwardRef(({ isVisible }, ref) => {
  return (
    <>
      {{ isVisible } && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1 }}
          className="px-4 relative"
        >
          <div className="text-3xl my-2 text-blue-500 font-extrabold">
            Skills
          </div>
          <div className="text-xl my-6">
            These are the languages and skills that i have acquired during 2
            years of my college.
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-5 sm:w-3/6 justify-items-center place-items-center">
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500 ">
              <FaHtml5 />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <SiCss3 />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <SiJavascript />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <SiMongodb />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <SiExpress />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <FaReact />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <FaNodeJs />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <FaBootstrap />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <SiTailwindcss />
            </div>
            <div className="border w-fit p-4 text-5xl rounded-xl border-blue-500">
              <TbBrandCpp />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
});

export default Con1;
