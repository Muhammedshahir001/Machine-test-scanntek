// import React from 'react'
import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import the toast library
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onNumberContainer1Click = useCallback(() => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.status === 200) {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.log("error occurred in the login page", error);
        toast.error("Check your email and password. Please try again.");
      });
  }, [email, password, navigate]);

  return (
    <>
      <ToastContainer />
      <div className="relative bg-gray-100 w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-start justify-start py-4 md:py-0 px-4 md:px-8 box-border text-left text-[1rem] text-white font-inter">
        <div className="self-stretch flex-1 md:flex-1 flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="w-full md:w-[64.22rem] h-[4.44rem] flex flex-row items-center justify-between">
              <div className="w-full md:w-[39.92rem] flex flex-row items-center justify-start">
                <div className="shrink-0 flex flex-row items-center justify-start">
                  <div className="shrink-0 flex flex-row items-center justify-center p-[0.56rem]">
                    <div className="relative">Logo</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.83rem] text-[0.44rem]">
                <div className="hidden md:flex shrink-0  flex-row items-center justify-start opacity-[0]">
                  <div className="w-[9.56rem] shrink-0 flex flex-row items-center justify-center py-[0.56rem] pr-[0rem] pl-[0.56rem] box-border">
                    <div className="flex-1 relative">
                      Last updated time 09-Aug-2023 08:09 AM
                    </div>
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                  />
                </div>
                <div className="self-stretch md:shrink-0 flex flex-col items-center justify-center pt-[0rem] px-[0rem] pb-[0.11rem] opacity-[0] text-[0.67rem] text-red">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="self-stretch relative inline-block w-[2.22rem] md:w-auto md:shrink-0">
                      Logout
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-start justify-start p-[0.06rem]">
                  <img
                    className="relative w-[0.78rem] h-[0.78rem] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen min-h-screen flex justify-center">
            <div className="md:w-11/12 md:flex items-center justify-between">
              <div className="w-9/12 md:h-[30rem] ">
                <img
                  className="w-full md:h-full"
                  alt=""
                  src="/Screenshot (138).png"
                />
              </div>
              <div className="md:w-32"></div>
              <div className="md:w-full h-full mt-10 md:mt-40">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.56rem] z-[2]">
                  <div className="self-stretch relative flex justify-center [text-shadow:0px_0px_20px_rgba(0,_0,_0,_0.25)]">
                    <p className="m-0 mr-4 md:mr-20 pr-4 md:pr-20 mt-4 md:mt-32">
                      Welcome to the future of restaurant reporting! We &apos;re
                      serving up a fresh approach to streamline your restaurant
                      management, making data deliciously easy to digest.
                    </p>
                  </div>
                  <div className="self-stretch ml-5 md:ml-0 flex-1 flex flex-col items-start justify-between px-4 md:px-[5.56rem] text-left text-[0.67rem] text-gray-400">
                    <div className="self-stretch rounded-[20px] h-fit mt-4 md:mt-16 w-72  bg-darkslategray-200 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start gap-4 md:p-[1.11rem] md:gap-[1.11rem]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-2 md:gap-[0.56rem]">
                        <div className="self-stretch rounded-3xs bg-darkslategray-100 h-[2.89rem] flex flex-row items-center justify-start p-[0.67rem] box-border">
                          <input
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            className="w-full bg-transparent border-none outline-none"
                            placeholder="Enter your email"
                            required
                          />
                        </div>

                        <div className="self-stretch rounded-3xs bg-darkslategray-100 h-[2.89rem] flex flex-row items-center justify-end p-[0.67rem] box-border gap-[0.56rem]">
                          <div className="flex-1 flex flex-row items-center justify-start">
                            <input
                              type="password"
                              value={password}
                              onChange={handlePassword}
                              className="w-full bg-transparent border-none outline-none font-medium"
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.56rem] text-center text-[0.78rem] text-whitesmoke font-poppins">
                        <div
                          className="self-stretch rounded-3xs bg-blk flex flex-row items-center justify-center p-[0.67rem] cursor-pointer"
                          onClick={onNumberContainer1Click}
                        >
                          <div className="relative font-semibold">Login</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-center text-[0.44rem]">
                          <div className="flex-1 relative">
                            <p className="m-0">
                              <span>{`By continuing, you agree to (name)'s `}</span>
                              <span className="font-semibold">Terms of</span>
                            </p>
                            <p className="m-0">
                              <span className="font-semibold">{`service `}</span>
                              <span className="font-poppins">and</span>
                              <span className="font-semibold font-poppins">
                                {" "}
                                Privacy policy
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
