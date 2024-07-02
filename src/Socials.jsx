import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Magnetic from "./Magnetic";

const Socials = () => {
  return (
    <ul className="flex justify-around items-center p-4 rounded-full w-20 absolute bottom-0">
      <Magnetic>
        <li className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500">
          <BsInstagram />
        </li>
      </Magnetic>
      <Magnetic>
        <li className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500">
          <FaLinkedinIn />
        </li>
      </Magnetic>
      <Magnetic>
        <li className="text-blue-100 text-aq text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500">
          <SiGithub />
        </li>
      </Magnetic>
    </ul>
  );
};

export default Socials;
