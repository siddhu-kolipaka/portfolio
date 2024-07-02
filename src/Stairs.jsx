import { motion } from "framer-motion";
const Stairs = () => {
  const parent = {
    initial: { width: "100%" },
    enter: {
      width: ["100%", "0%"],
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 1.5,
        times: [0.99, 1],
      },
    },
    exit: {
      width: ["0%", "100%"],
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 1.1,
        times: [0, 0.01],
      },
    },
  };

  const item = {
    initial: { height: "100%" },
    enter: {
      height: ["100%", "0%"],
      transition: {
        duration: 1,
      },
    },
    exit: {
      height: ["0%", "100%"],
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.div
        className="flex w-full h-screen z-40 fixed "
        variants={parent}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          className="w-full h-full  bg-black  border-b-2 border-blue-600"
          variants={item}
        ></motion.div>
        <motion.div
          className="w-full h-full  bg-black  border-b-2 border-blue-600"
          variants={item}
        ></motion.div>
        <motion.div
          className="w-full h-full  bg-black border-b-2 border-blue-600"
          variants={item}
        ></motion.div>
        <motion.div
          className="w-full h-full  bg-black border-b-2 border-blue-600"
          variants={item}
        ></motion.div>
        <motion.div
          className="w-full h-full  bg-black border-b-2 border-blue-600 "
          variants={item}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Stairs;
