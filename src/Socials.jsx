import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Magnetic from "./Magnetic";

const Socials = () => {
  return (
    <ul className="flex justify-around items-center p-4 rounded-full w-20 absolute bottom-0">
      <Magnetic>
        <a
          href="https://www.instagram.com/siddhu_kolipaka/"
          target="#"
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
        >
          <BsInstagram />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://www.linkedin.com/in/ram-chandra-siddharth-kolipaka-3588a9250/"
          target="#"
          className="text-blue-100 text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
        >
          <FaLinkedinIn />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://github.com/siddhu-kolipaka"
          target="#"
          className="text-blue-100 text-aq text-3xl border-2 rounded-full p-3 m-2 block hover:text-blue-500 hover:border-blue-500"
        >
          <SiGithub />
        </a>
      </Magnetic>
    </ul>
  );
};

export default Socials;
