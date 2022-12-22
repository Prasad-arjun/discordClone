import React from "react";
import loginBg from "../assests/logiin_bg.svg";
import qrcode from "../assests/qrcode.png";
import logo from "../assests/discord_main_logo.svg";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-auto">
   <img src={loginBg} className="h-full w-full absolute  z-0 flex" /> 
      <div>
        <div className="h-[60vh] w-[40vw] bg-[#36393f] text-white rounded justify-center flex z-1 relative">
          <div className="flex justify-evenly items-center  ">
            <div className="flex flex-col justify-evenly mr-1 ">
              <h2 className="text-2xl bold mt-0">Welcome Back !</h2>
              <p className="mt-1 text-[#b9bbbe]">
                we are so excited tog see you again !
              </p>
              <h5 className="mt-4 text-[#b9bbbe]  font-medium">EMAIL</h5>
              <input
                type="email"
                className="mt-2 h-[2rem] bg-[#23272a]"
                name=""
                id=""
              ></input>
              <h5 className="mt-4 text-[#b9bbbe] font-medium">PASSWORD</h5>
              <input
                type="password"
                className="mt-2 h-[2rem] bg-[#23272a]"
              ></input>
              <h6 className="mt-4 text-[#00aff4] text-sm">
                Forgot your password?
              </h6>
            <Link to="dashboard" ><button className="mt-4 bg-[#5865f2] h-[3rem] w-[18rem]  ">Login</button></Link> 
              <h6 className="mt-4 text-xs text-[#8e9297]">
                Need an accout ?
                <Link to="register" className="text-[#00aff4] text-sm">
                  Register
                </Link>
              </h6>
            </div>
            <div className="flex flex-col justify-center items-center ml-4">
              <div className="bg-white h-[23vh] w-[11vw] flex justify-center items-center rounded">
                <img src={qrcode} className="h-[20vh] w-[10vw] " />
              </div>

              <h2 className="text-3xl font-noraml mt-6">Login with QR code </h2>
              <div className="text-center w-[17vw] mt-6">
                <p>
                  Scan this with the{" "}
                  <span className="font-medium">Discord mobile app</span> to log
                  instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
