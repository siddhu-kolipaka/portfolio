/* eslint-disable react/no-unescaped-entities */
import Magnetic from "./Magnetic";
import pic from "./assets/cubism4.jpg";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Details = () => {
  const targetRef3 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef3,
    offset: ["end end", " start 0.1"],
  });
  const movY = scrollYProgress;

  const mov = useTransform(movY, [0, 1], ["100%", "25%"]);
  const mov2 = useTransform(movY, [0, 1], ["200px", "0px"]);

  return (
    <div className="w-full h-screen text-white" id="details">
      <motion.div
        ref={targetRef3}
        style={{ right: mov }}
        className="text-7xl font-extrabold text-end relative top-16"
      >
        Connect
      </motion.div>
      <div className=" sm:w-[80%] flex flex-col justify-around relative top-16 gap-10 sm:left-40">
        <motion.div className=" overflow-hidden pb-28 flex flex-col sm:flex-row items-center sm:pl-32 sm:gap-10  border-b-2 border-blue-500">
          <motion.div
            style={{ top: mov2 }}
            className="sm:text-8xl relative flex flex-col items-center "
          >
            <motion.div className="h-60 rounded-full overflow-hidden flex justify-center">
              <motion.img className="h-60" src={pic} alt="pic" />
            </motion.div>
          </motion.div>
          <div className="flex flex-col justify-center items-center">
            <motion.div
              style={{ top: mov2 }}
              className="text-6xl sm:text-8xl relative"
            >
              Let's work
            </motion.div>
            <motion.div
              style={{ top: mov2 }}
              className="text-6xl sm:text-8xl relative"
            >
              together
            </motion.div>
          </div>
        </motion.div>

        <div className="pt-20 sm:pt-0 flex flex-col sm:flex-row items-center gap-4 ">
          <div className="text-2xl border-2 border-blue-500 overflow-hidden  rounded-full p-4 w-fit">
            <motion.a className="relative p-4 " style={{ top: mov2 }}>
              kolipakasiddhu@gmail.com
            </motion.a>
          </div>
          <div className="border-2 text-2xl border-blue-500 overflow-hidden rounded-full p-4 w-fit">
            <motion.a className="relative p-4 " style={{ top: mov2 }}>
              +91 9000416261
            </motion.a>
          </div>
        </div>
        <motion.div
          className={`absolute top-[50%] sm:top-[55%]`}
          style={{ right: mov }}
        >
          <Magnetic>
            <div className="text-white text-3xl bg-blue-700 rounded-full w-48 h-48 flex justify-center items-center">
              <Link to="/contact">Contact</Link>
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
};
export default Details;
