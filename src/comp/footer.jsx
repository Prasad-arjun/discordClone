import React from "react";
import flag from "../assests/e62b3980-f051-4aa8-a972-ec6f6d5143ab.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Twitter, Instagram, Facebook } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import Discord from "../assests/discord_main_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-[#23272a] w-full h-[75vh]  overflow-hidden">
      <div className="text-white flex flex-row justify-evenly mt-28">
        <div className="text-white flex flex-col">
          <h2 className="text-4xl font-extrabold  w-[13rem] text-[#5865f2] mb-6">
            IMAGINE A PLACE
          </h2>
          <p className="">
            <img src={flag} className="inline-block h-4 mx-2" />
            <span className="text-sm">
              English , USA <ExpandMoreIcon />
            </span>
          </p>
          <div className="mt-6 ">
            <a href="">
              <Twitter className="mx-2" />
            </a>
            <a href="">
              <Instagram className="mx-2" />
            </a>
            <a href="">
              <Facebook className="mx-2" />
            </a>
            <a href="">
              <YouTube className="mx-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-[#5865f2]">Product</h2>
          <a href="" className="my-1 hover:underline">
            Download
          </a>
          <a href="" className="my-1 hover:underline">
            Nitro
          </a>
          <a href="" className="my-1 hover:underline">
            Status
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#5865f2]">Company</h2>
          <a href="" className="my-1 hover:underline">
            About
          </a>
          <a href="" className="my-1 hover:underline">
            News
          </a>
          <a href="" className="my-1 hover:underline">
            Branding
          </a>
          <a href="" className="my-1 hover:underline">
            Newsroom
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#5865f2]">Resources</h2>
          <a href="" className="my-1 hover:underline">
            College
          </a>
          <a href="" className="my-1 hover:underline">
            Support
          </a>
          <a href="" className="my-1 hover:underline">
            Saftey
          </a>
          <a href="" className="my-1 hover:underline">
            Blog
          </a>
          <a href="" className="my-1 hover:underline">
            Feedback
          </a>
          <a href="" className="my-1 hover:underline">
            Developers
          </a>
          <a href="" className="my-1 hover:underline">
            StreamKit
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#5865f2]">Policies</h2>
          <a href="" className="my-1 hover:underline">
            Terms
          </a>
          <a href="" className="my-1 hover:underline">
            Privacy
          </a>
          <a href="" className="my-1 hover:underline">
            Cookie Settings
          </a>
          <a href="" className="my-1 hover:underline">
            Guidelines
          </a>
          <a href="" className="my-1 hover:underline">
            Acknowledgements
          </a>
          <a href="" className="my-1 hover:underline">
            Licenses
          </a>
          <a href="" className="my-1 hover:underline">
            Moderation
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="bg-[#5865f2] h-[0.5px] w-[80vw]">
          <div className="flex justify-between  items-center mt-10">
            <img src={Discord} />
            <Link to="login">
            <button className="bg-[#5865f2] h-[2.2rem] w-[8rem] rounded-full hover:brightness-[1.2] duration-150  text-white ">
              LogIn
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
