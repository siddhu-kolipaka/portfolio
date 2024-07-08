import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Socials from "./Socials";

import Details from "./Details";
import Skill from "./Skill";
import Service from "./Service";
import Stairs from "./Stairs";
import { useState } from "react";
import Hamburger from "./Hamburger";
const Home = () => {
  const [IsActive, setIsActive] = useState(false);

  const handleHamburger = () => {
    setIsActive(!IsActive);
  };

  return (
    <div className="overflow-hidden">
      <Stairs />
      <div className="w-screen h-screen overflow-hidden relative" id="home">
        <Avatar />
        <Hamburger handleHamburger={handleHamburger} IsActive={IsActive} />
        {IsActive && <Navbar />}
        <Socials />
      </div>
      <Skill />
      <Service />
      <Details />
    </div>
  );
};
export default Home;
