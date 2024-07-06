import avatar from "./assets/cubism4.png";
import Marquee from "react-fast-marquee";

const Avatar = () => {
  return (
    <>
      <div className="text-white h-screen text-7xl font-black flex flex-col justify-center items-center gap-0">
        <Marquee className="overflow-hidden  " autoFill="true">
          FRIENDLY.
        </Marquee>
        <Marquee className="overflow-hidden " autoFill="true" direction="right">
          NEIGHBOURHOOD.
        </Marquee>
        <Marquee className="overflow-hidden " autoFill="true">
          DEVELOPER.
        </Marquee>
        <img
          className=" z-10 absolute rounded-full"
          src={avatar}
          style={{ width: "40rem" }}
        ></img>
      </div>
    </>
  );
};
export default Avatar;
