import { TbBrandGoogleHome } from "react-icons/tb";
import { FaInfo } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Magnetic from "./Magnetic";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-around items-center p-4 rounded-full w-20 fixed right-0 top-1/3 z-30">
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="home"
        >
          <TbBrandGoogleHome />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="skill"
        >
          <FaInfo />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="service"
        >
          <MdOutlineDesignServices />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          smooth={true}
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
          to="details"
        >
          <IoIosContact />
        </Link>
      </Magnetic>
    </div>
  );
};
export default Navbar;
