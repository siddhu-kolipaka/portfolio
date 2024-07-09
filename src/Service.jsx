import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const ser = [
  {
    number: 1,
    name: "Web Development",
    desc: "Been learning too much. Now I develop websites using react and tailwind.",
  },
  {
    number: 2,
    name: "UI/UX",
    desc: "I dont use figma so...idk ",
  },
  {
    number: 3,
    name: "Logo Design",
    desc: "Have some experience in making some digital art.",
  },
  {
    number: 4,
    name: "Tutor",
    desc: "I can explain things pretty well. But I have to study first!",
  },
];

const Service = () => {
  const targetRef2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef2,
    offset: ["end end", "0% 10%"],
  });
  const movY = scrollYProgress;

  const mov = useTransform(movY, [0, 1], ["100%", "0%"]);
  const mov2 = useTransform(movY, [0, 1], ["150%", "0%"]);
  const mov3 = useTransform(movY, [0, 1], ["-150%", "0%"]);

  return (
    <div
      className="w-full h-screen overflow-hidden  text-white py-16"
      id="service"
    >
      <motion.div
        ref={targetRef2}
        style={{ left: mov }}
        className="text-7xl font-extrabold relative"
      >
        Services
      </motion.div>
      <div className="sm:w-3/4 grid sm:grid-cols-2 sm:gap-20 relative sm:left-48">
        {ser.map((serv, index) => {
          return (
            <motion.div
              style={{
                x: index % 2 ? mov3 : mov2,
                y: index < 2 ? mov2 : mov3,
              }}
              key={`A${index}`}
              className=" border-b-2 border-b-blue-500 p-4 overflow-hidden"
            >
              <div className="flex justify-between">
                <span className="text-2xl my-5 text-blue-500" key={`C${index}`}>
                  {serv.name}
                </span>
                <span
                  className="text-5xl my-2 hover:text-blue-500"
                  key={`B${index}`}
                >
                  {serv.number}
                </span>
              </div>

              <div className="text-xl my-5" key={`D${index}`}>
                {serv.desc}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Service;
