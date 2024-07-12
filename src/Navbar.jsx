/* eslint-disable react/prop-types */
import { TbBrandGoogleHome } from "react-icons/tb";
import { FaInfo } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

import { Link } from "react-scroll";

const Navbar = ({ handleHamburger }) => {
  return (
    <motion.div
      className="flex flex-col justify-around items-center p-4 rounded-full w-20 fixed right-0 top-1/3 z-30"
      initial={{ top: "-100vh" }}
      animate={{ top: "33.33vh" }}
      exit={{ top: "100vh" }}
      transition={{ type: "spring", duration: 1 }}
    >
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="home"
          onClick={handleHamburger}
        >
          <TbBrandGoogleHome />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="skill"
          onClick={handleHamburger}
        >
          <FaInfo />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="service"
          onClick={handleHamburger}
        >
          <MdOutlineDesignServices />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="details"
          onClick={handleHamburger}
        >
          <IoIosContact />
        </Link>
      </Magnetic>
    </motion.div>
  );
};
export default Navbar;
