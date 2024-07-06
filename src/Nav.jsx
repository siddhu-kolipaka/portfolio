import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  let location = useLocation();

  return (
    <header className="w-full py-4 z-50 flex  justify-between items-center fixed">
      <Magnetic cls="text-white m-4 text-xl">
        <Link to="/" className="text-white text-xl">
          Code by Sid
        </Link>
      </Magnetic>
      <nav className="mr-12 flex sm:gap-5">
        {links.map((link, index) => {
          return (
            <Magnetic cls="" key={`aa${index}`}>
              <Link
                to={`${link.path}`}
                key={`${index}`}
                className={`${
                  location.pathname === link.path
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-white"
                } hover:text-blue-500 m-3 transition-all duration-500`}
              >{`${link.name}`}</Link>
            </Magnetic>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;
