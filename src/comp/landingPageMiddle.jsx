import React from "react";
import inviteOnly from "../assests/invite_only_landing.svg";
import voiceConnected from "../assests/hanging_out_easy_lading.svg";
import fandomLanding from "../assests/fandom_landing.svg";
import justChillin from "../assests/just_chilling_landing.svg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
function MiddleLandingPage() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-white">
        <div className="flex justify-center items-center h-[90vh]">
          <div>
            <img src={inviteOnly} className="w-[40rem] max-w-none mx-14" />
          </div>
          <div className="w-[32rem} flex flex-col mx-14">
            <h2 className="text-5xl font-bold text-[#23272a] w-[23rem] my-4 leading-tight">
              Create an invite-only place where you belong
            </h2>
            <p className="text-lg w-[24rem] font-light text-[#000000] leading-normal">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f6f6f6]">
        <div className="flex flex-row-reverse justify-center items-center h-[70vh]">
          <div>
            <img src={voiceConnected} className="w-[40rem] max-w-none " />
          </div>
          <div className="w-[32rem} flex flex-col mx-14">
            <h2 className="text-5xl font-bold text-[#23272a] w-[20rem] my-4 leading-tight">
              Where hanging out is easy
            </h2>
            <p className="text-lg w-[24rem] font-light text-[#000000] leading-normal">
              Grab a seat in a voice channel when you're free. Friends in your
              server can see you're around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="flex flex-row- justify-center items-center h-[70vh]">
          <div>
            <img src={fandomLanding} className="w-[40rem] max-w-none " />
          </div>
          <div className="w-[32rem} flex-col mx-14">
            <h2 className="text-5xl font-bold text-[#23272a] w-[20rem] my-4 leading-tight">
              From few to a fandom
            </h2>
            <p className="text-lg w-[24rem] font-light text-[#000000] leading-normal">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-[#f6f6f6]">
        <div className="bg-[#f6f6f6] flex flex-col justify-center items-center mt-24 w-full ">
          <h2 className="text-5xl font-bold">
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <p className="text-lg w-[60rem] text-center mt-10 leading-normal">
            Low-latency voice and video feels like you're in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div>
          <img src={justChillin} className="w-[70rem]" />
        </div>
        <div className="mt-20 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">Ready to start your journey?</h2>
          <button className="mt-8 bg-[#404eed] hover:bg-[#5865f2] h-[3rem] w-[18rem] rounded-full text-white mb-24">
            <FileDownloadOutlinedIcon /> Download for Mac
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiddleLandingPage;
