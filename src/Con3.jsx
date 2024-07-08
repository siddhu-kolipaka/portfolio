/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Con3 = forwardRef(({ isVisible }, ref) => {
  return (
    isVisible && (
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1 }}
        className="px-4 relative"
      >
        <div className="text-3xl my-2 text-blue-500 font-extrabold">
          Experience
        </div>
        <div className="text-xl my-6">
          <p>
            What can I say?
            <br />
            Im still too young to talk about this section.
            <br />
            But just old enough to say that i'm a pretty good self learnt
            developer.
            <br />
            Contact me if you want to collaborate.
            <br />
            (Let's make epic shit!)
            <br />
            (Actually the dev wants help to put something in the work section)
          </p>
        </div>
      </motion.div>
    )
  );
});

export default Con3;
