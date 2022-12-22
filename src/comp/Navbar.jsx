import React from "react";
import discordLogo from "../assests/discord_main_logo.svg";
import login from "../comp/logIn"
import { Link } from "react-router-dom";

function Navabar() {
  return (
    <div>
      <nav className="flex flex-row justify-evenly my-6 items-center">
        <div>
          <a href="">
            <img src={discordLogo} className="text-white  w-32" />
          </a>
        </div>
        <div className=" text-white text-base font-bold">
          <a className="mx-5  hover:underline" href="#">
            Download
          </a>
          <a href=" " className="mx-5 hover:underline">
            Nitro
          </a>
          <a className="mx-5  hover:underline" href="#">
            Saftey
          </a>
          <a className="mx-5  hover:underline" href="#">
            Support
          </a>
          <a className="mx-5  hover:underline" href="#">
            Blog
          </a>
          <a className="mx-5  hover:underline" href="#">
            Careers
          </a>
        </div>
        <Link  to="login" >
        <button className=" text-Gray-600 font-medium leading-4 shadow-sm px-4 py-2.5 text-sm rounded-full hover:text-[#5865f2] bg-white">
           LogIn
        </button>
        </Link>
      </nav>
    </div>
  );
}
export default Navabar;
