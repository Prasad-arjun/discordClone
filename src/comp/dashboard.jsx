import React from "react";
import discord from "../assests/discord_mini_icon.svg";
import newLine from "../assests/new_line.png";
import plusIcon from "../assests/plus.svg";
import navigation from "../assests/navigation.svg";
import download from "../assests/download.svg";
import freinds from "../assests/freinds.svg";
import nitro1 from "../assests/nitro_icon.svg";
import stage from "../assests/stage_discovery.svg";
import no_online from "../assests/no_online_freinds.svg";
import ProfileImg from "./profile";

function Dashboard() {
  return (
    <div className="flex">
      <div className="bg-[#23272a] w-[5vw] h-[100vh] flex flex-col justify-start items-center">
        <div className="m-4  bg-[#5865f2] rounded-2xl h-[3rem] w-[3rem] flex justify-center items-center">
          <a href="">
            <img
              src={discord}
              className="h-[2rem] w-[2rem] bg-[#5865f2] rounded-full"
            />
          </a>
        </div>
        <div className="m-2  bg-[#1e354d] rounded-2xl h-[3rem] w-[3rem] flex justify-center items-center">
          <a href="">
            <img src={newLine} className="h-[3rem] w-[3rem] rounded-full" />
          </a>
        </div>
        <div className="m-2  bg-[#36393f] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
          <a href="">
            <img src={plusIcon} className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </div>
        <div className="m-2 bg-[#36393f] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
          <a href="">
            <img src={navigation} className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </div>
        <div className="m-2 bg-[#36393f] rounded-full h-[3rem] w-[3rem] flex justify-center items-center">
          <a href="">
            <img src={download} className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </div>
      </div>
      <div className="bg-[#2f3136] w-[15vw] h-[100vh] flex  flex-col justify-start ">
        <div className=" border-solid border-2 border-black p-[0.1rem] rounded-md mt-4">
          <input
            type="text"
            placeholder="Find or start a conversation"
            className="bg-[#202225] h-[2.4rem] w-[14rem] rounded-md text-center"
          ></input>
        </div>
        <div className="flex flex-col justify-start items-start">
          <button className="bg-[#4f545ce6] rounded h-[2.4rem] w-[14rem] text-white font-medium m-1">
            Freinds
          </button>
          <button className="hover:bg-[#4f545ce6]  rounded h-[2.4rem] w-[14rem] text-white font-medium m-1">
            Stage Discovery
          </button>
          <button className="hover:bg-[#4f545ce6] rounded h-[2.4rem] w-[14rem] text-white font-medium m-1">
            Nitro
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-[#8e9297]">Direct Message</p>
          <p className="text-2xl text-[#8e9297]">+</p>
        </div>
        <ProfileImg />
      </div>
      <div className="bg-[#36393f] w-[100vw] h-[100vh] relative overflow-hidden ">
        <div>
           <nav className="flex list-none justify-start items-center h-[7vh] ">
            <img src={discord} className="ml-4" />
            <a href="">
              <button className="m-1 text-[white] hover:text-[#8e9297]">
                Freinds
              </button>
            </a>
            <a href="">
              <button
                className="m-4 text-[#8e9297] hover:text-[white]"
               
              >
                Online
              </button>
            </a>
            <a href="">
              <button
                className="m-4 text-[#8e9297] hover:text-[white]"
               
              >
                All
              </button>
            </a>
            <a href="">
              <button
                className="m-4 text-[#8e9297] hover:text-[white]"
                
              >
                Pending
              </button>
            </a>
            <a href="">
              <li
                className="m-4 text-[#8e9297] hover:text-[white]"
             
              >
                Blocked
              </li>
            </a>
            <button className="m-4 text-white bg-[#3ba55d] h-[1.8rem] w-[6rem] rounded-md">
              Add Freind
            </button> 
          </nav> 
          <div className="h-[0.1rem] w-[100vw] bg-black mt-1"></div>
        </div>
        <div className="flex">
          <div className="w-[65vw] h-[93vh] flex flex-col justify-center items-center">
           <img src={no_online} className="h-[33vh]" />
            <p className="text-center m-6 text-[#8e9297]">
              No one is around to play with Wumpus.
            </p> 
          
          </div>

          <div className="w-[35vw] h-[93vh] ">
            <div className="flex flex-col">
              <div className="w-[0.01rem] h-[100vh] bg-[#8e9297] mt-1"></div>
            </div>
            <div className="absolute top-[4rem]">
              <p className="text-white text-[1.3rem] mt-8 ml-2 font-medium">
                Active Now
              </p>
              <div className="flex  flex-col justify-center items-center">
                <p className="font-medium text-white mb-2 mt-12">
                  It's quite now...
                </p>
                <p className="text-[#8e9297] w-[25vw] text-center">
                  When a friend starts an activity--like playing a game or
                  hanging out on voice--we'll show it here!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Dashboard;
