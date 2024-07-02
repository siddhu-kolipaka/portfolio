/* eslint-disable react/no-unescaped-entities */
import Magnetic from "./Magnetic";
import pic from "./assets/sidpic-edited.png";

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

  const mov = useTransform(movY, [0, 1], ["100%", "10%"]);
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
      <div className=" w-4/6 flex flex-col justify-around gap-10 relative top-16 left-52">
        <motion.div className=" overflow-hidden  border-b-2 border-blue-500 p-4 pb-16">
          <motion.div
            style={{ top: mov2 }}
            className="text-8xl relative flex items-center gap-10 overflow-hidden"
          >
            <motion.div className="w-28 h-28 rounded-full overflow-hidden inline-block">
              <motion.img src={pic} alt="pic" />
            </motion.div>
            Let's work
          </motion.div>
          <motion.div style={{ top: mov2 }} className="text-8xl relative">
            together
          </motion.div>
        </motion.div>
        <div className=" flex gap-10 ">
          <div className="text-2xl border-2 border-blue-500 overflow-hidden  rounded-full p-4 w-fit">
            <motion.a className="relative" style={{ top: mov2 }}>
              kolipakasiddhu@gmail.com
            </motion.a>
          </div>
          <div className="border-2 text-2xl border-blue-500 overflow-hidden rounded-full p-4 w-fit">
            <motion.a className="relative" style={{ top: mov2 }}>
              +91 9000416261
            </motion.a>
          </div>
        </div>
        <motion.div className="absolute top-48" style={{ right: mov }}>
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
