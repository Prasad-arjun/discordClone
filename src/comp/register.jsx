import React from "react";
import loginBg from "../assests/logiin_bg.svg";
import logo from "../assests/discord_main_logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-auto">
      <img src={loginBg} className="h-full w-full absolute  z-0 flex" />

      <div className="h-[60vh] w-[40vw] bg-[#36393f] text-white rounded justify-center flex z-1 relative">
        <div>
          <div className="flex justify-center items-center text-2xl mt-5 font-medium">
            <h5 className="mt-1">Create an account</h5>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h4 className="mt-3 text-sm text-[#8e9297]   uppercase">Email</h4>
            <input
              type="email"
              className="mt-2 h-[2rem] bg-[#23272a] w-[36vw] "
            ></input>
            <h5 className="mt-3 text-sm text-[#8e9297]  uppercase">Username</h5>
            <input
              type="text"
              className="mt-2 h-[2rem] bg-[#23272a] w-[36vw] "
            ></input>
            <h5 className="mt-3 text-sm text-[#8e9297]  uppercase">Password</h5>
            <input
              type="password"
              className="mt-2 h-[2rem] bg-[#23272a] w-[36vw] "
            ></input>
            <Link to="dashboard"><button className="h-[3rem] w-[36vw] bg-[#5865f2] mt-8">
              Continue
            </button>
            </Link>
            <p className="text-xs text-[#00aff4] mt-5">
              <Link  to="login">Already have an account?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
