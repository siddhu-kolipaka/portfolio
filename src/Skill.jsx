import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import Con1 from "./Con1";
import Con2 from "./Con2";
import Con3 from "./Con3";
import Con4 from "./Con4";

const names = [
  { nam: "Skills", numb: 0 },
  { nam: "Education", numb: 1 },
  { nam: "Experience", numb: 2 },
  { nam: "About Me", numb: 3 },
];

const Skill = () => {
  const [num, setnum] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const targetRef = useRef(null);
  const obj1 = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const movY = obj1.scrollYProgress;
  const mov = useTransform(movY, [0, 1], ["100%", "0%"]);

  const targetRef2 = useRef(null);
  const obj2 = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });
  const movY2 = obj2.scrollYProgress;
  const mov2 = useTransform(movY2, [0, 0.5, 1], ["-200%", "50%", "400%"]);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  return (
    <motion.div
      className="w-full h-screen text-white overflow-hidden"
      id="skill"
    >
      <motion.div
        ref={targetRef}
        style={{ right: mov }}
        className="text-7xl font-extrabold text-end relative top-16 right-0 "
      >
        More info
      </motion.div>
      <motion.div style={{ y: mov2 }} className="flex gap-10 px-36 pt-[20vh] ">
        <motion.div ref={ref} className="flex flex-col gap-6 ">
          {names.map((name, index) => {
            return (
              <motion.button
                className={` ${index == num ? "bg-blue-600" : ""} w-48
                h-16
                text-2xl
                rounded-xl`}
                initial={{ x: "-200%" }}
                animate={{
                  x: isInView && "0%",
                  transition: {
                    delay: 0.2 * (index + 1),
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setnum(name.numb);
                }}
                key={`haha${index}`}
              >
                {name.nam}
              </motion.button>
            );
          })}
        </motion.div>
        <AnimatePresence mode="popLayout">
          <motion.div className="w-full overflow-hidden" key={num}>
            {num == 0 && <Con1 ref={ref1} isVisible={!isInView1}></Con1>}
            {num == 1 && <Con2 ref={ref2} isVisible={!isInView2}></Con2>}
            {num == 2 && <Con3 ref={ref3} isVisible={!isInView3}></Con3>}
            {num == 3 && <Con4 ref={ref4} isVisible={!isInView4}></Con4>}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
export default Skill;
