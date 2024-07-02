/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Stairs from "./Stairs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Magnetic from "./Magnetic";
import pic from "./assets/cubism2.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const btn = document.getElementById("button");
    btn.value = "Sending...";

    emailjs
      .sendForm("service_i1a6fde", "template_15b9xct", form.current, {
        publicKey: "SA0c6cFn3uP3HJ-9q",
      })
      .then(
        () => {
          btn.value = "Sent";
        },
        (error) => {
          btn.value = "Retry";
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Stairs></Stairs>
      <div className="flex text-white pb-20">
        <div className=" w-1/2 pl-56 pt-28">
          <div className="text-8xl py-20">
            <div>Let's Start a Project</div>
            <div>Together</div>
          </div>
          <form
            className=" flex flex-col pt-10"
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <div className=" text-2xl py-12 flex gap-10 border-t-2 border-slate-700">
              <span className="text-slate-700 font-bold">01</span>
              <div>
                <span>Whats your name?</span>
                <input
                  className="w-5/6 bg-transparent focus:outline-none"
                  placeholder="Sanjay"
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className=" text-2xl py-12 flex gap-10 border-t-2 border-slate-700">
              <span className="text-slate-700 font-bold">02</span>
              <div>
                <span>Whats your email?</span>
                <input
                  className="w-5/6 bg-transparent focus:outline-none"
                  placeholder="kolipakasanju@gmail.com"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className=" text-2xl py-12 flex gap-10 border-t-2 border-slate-700">
              <span className="text-slate-700 font-bold">03</span>
              <div>
                <span>Whats your contact number?</span>
                <input
                  className="w-5/6 bg-transparent focus:outline-none"
                  placeholder="+91 9000416261"
                  type="tel"
                  name="contact"
                  required
                />
              </div>
            </div>
            <div className=" text-2xl py-12 flex gap-10 border-t-2 border-slate-700">
              <span className="text-slate-700 font-bold">04</span>
              <div>
                <span>What service do you want?</span>
                <input
                  className="w-5/6 bg-transparent focus:outline-none"
                  placeholder="Web dev, UI/UX, ..."
                  type="text"
                  name="services"
                  required
                />
              </div>
            </div>
            <div className=" text-2xl py-12 flex gap-10 border-t-2 border-slate-700">
              <span className="text-slate-700 font-bold">05</span>
              <div>
                <span>Type in a message...</span>
                <input
                  className="w-5/6 bg-transparent focus:outline-none"
                  placeholder="Hello Sid, I want to ..."
                  type="text"
                  name="message"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Magnetic>
                <input
                  className="size-40 text-2xl border-2 rounded-full"
                  type="submit"
                  value="Send"
                  id="button"
                />
              </Magnetic>
            </div>
          </form>
        </div>
        <div className="pt-40 pl-40">
          <div className="size-80 rounded-full overflow-hidden">
            <img src={pic}></img>
          </div>
          <div className=" py-10 px-20">
            <div className="text-slate-700 font-bold py-4">CONTACT DETAILS</div>
            <div className="text-xl">kolipakasiddhu@gmail.com</div>
            <div className="text-xl">+91 9000416261</div>
          </div>
          <div className=" py-10 px-20">
            <div className="text-slate-700 font-bold py-4">MISC</div>
            <div className="text-xl">Student</div>
            <div className="text-xl">Pre-Final Year</div>
            <div className="text-xl">Web Dev Enthusiast</div>
            <div className="text-xl">Open to Freelance</div>
            <div className="text-xl">Location: Hyderabad</div>
          </div>
          <div className="flex flex-col py-10 px-20">
            <div className="text-slate-700 font-bold py-4 ">SOCIALS</div>
            <a
              href="https://www.linkedin.com/in/ram-chandra-siddharth-kolipaka-3588a9250/"
              target="#"
              className="text-xl"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/siddhu_kolipaka/"
              target="#"
              className="text-xl"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;