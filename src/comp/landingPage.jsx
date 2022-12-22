import React from "react";
import Navabar from "./Navbar";
import leftPng from "../assests/left_bg_landing_header.svg";
import rightPng from "../assests/right_bg_landing_header.svg";
import centerBg from "../assests/center_bg_landing_header.svg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
function LandingPage() {
  return (
    <div className="bg-[#404eed] ">
      <div className=" h-[90vh] overflow-hidden relative ">
        <Navabar />
        <div className="flex flex-col h-full w-full  text-center">
          <div className="text-white text-7xl my-14 mt-22 items-center font-bold z-[1]">
            IMAGINE A PLACE...
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-[47%] text-white text-lg my-4 ">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </div>
          </div>
          <div className=" text-white text-lg my-4 items-center">
            <button className=" z-[1] relative text-black hover:text-[#5865f2]  hover:shadow-[#5865f2] hover:shadow-xl bg-white rounded-full h-12 w-[28rem] text-center mx-4">
              <FileDownloadOutlinedIcon /> Download for Mac
            </button>
            <button className="z-[1] relative text-white bg-[#23272a] hover:bg-[#36393f] transition ease-in-ease-out delay-100 hover:duration-500 hover:shadow-sm hover:shadow-[#36393f] rounded-full h-12 w-[28rem]  text-center mx-4 items-center ">
              Open Discord in your browser
            </button>
            <div className="">
              <img
                src={centerBg}
                className="absolute bottom-0 left-[-38rem]  [max-width:170%]"
              />
            </div>
            <div className="flex justify-between mb-3 ">
              <div>
                <img
                  src={leftPng}
                  className="h-[42vh] absolute bottom-0 left-[-12rem] z-[0] "
                />
              </div>
              <div>
                <img
                  src={rightPng}
                  className="h-[52vh] absolute right-[-12rem] bottom-0 z-[0]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
