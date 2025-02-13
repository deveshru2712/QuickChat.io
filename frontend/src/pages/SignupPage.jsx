import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { facebook, google, logo } from "../assets";
import { useMutation } from "@tanstack/react-query";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const {
    mutate: SignUpFn,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({ username, fullname, email, password }) => {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          username,
          fullname,
          email,
          password,
        });

        if (response.status >= 200 && response.status < 300) {
          console.log("Account created Successfully");
          return response.data;
        } else {
          throw new Error("Failed to create an account");
        }
      } catch (error) {
        console.log(
          error.response?.data?.message || "Failed to create an account"
        );
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    SignUpFn(formData);
  };

  const handelInputChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-screen p-4 flex justify-center items-center gap-2 py-16">
      <div className="flex flex-1 flex-col items-center justify-between h-full px-4 gap-2">
        <div className="flex flex-col items-center justify-center w-3/4 gap-5">
          <span className="ml-36 w-full text-left flex items-center text-2xl font-medium">
            <h1>Welcome</h1>
            👋
          </span>
          <span className="flex justify-center items-center text-base font-medium">
            Today is a new day, it's your day. You shape it.
            <br />
            Sign up to start messaging your friends.
          </span>
        </div>

        <div className="w-1/2">
          <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="UsernameField">Username</label>
              <input
                type="text"
                id="UsernameField"
                placeholder="user@name"
                value={formData.username}
                name="username"
                onChange={handelInputChange}
                className="w-full border-2 px-3 py-1 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="FullnameField">Fullname</label>
              <input
                type="text"
                id="FullnameField"
                value={formData.fullname}
                name="fullname"
                onChange={handelInputChange}
                placeholder="Rohan ..."
                className="w-full border-2 px-3 py-1 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="EmailField">Email</label>
              <input
                type="text"
                id="EmailField"
                value={formData.email}
                name="email"
                onChange={handelInputChange}
                placeholder="Example@gamil.com"
                className="w-full border-2 px-3 py-1 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="passwordField">Password</label>
              <input
                type="password"
                id="passwordField"
                value={formData.password}
                name="password"
                onChange={handelInputChange}
                placeholder="At least 6 characters"
                className="w-full border-2 px-3 py-1 rounded-md outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button className="text-sm w-fit text-gray-950 cursor-pointer hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="bg-gray-700 rounded-lg cursor-pointer text-white py-2 active:scale-105 duration-200"
            >
              Sign in
            </button>
          </form>
        </div>

        <div className="w-full flex items-center gap-2 p-4">
          <div className="w-1/2 border-2"></div>
          <span className="text-lg font-medium">or</span>
          <div className="w-1/2 border-2"></div>
        </div>

        <div className="future-login w-1/2 flex flex-col gap-5">
          <div className="w-full flex justify-center items-center gap-4 bg-slate-100 p-2 rounded-lg cursor-pointer">
            <img src={google} alt="google_logo" className="size-6" />
            <span className="text-base font-medium">Sign in with Google</span>
          </div>

          <div className="w-full flex justify-center items-center gap-4 bg-slate-100 p-2 rounded-lg cursor-pointer">
            <img src={facebook} alt="facebook_logo" className="size-6" />
            <span className="text-base font-medium">Sign in with Facebook</span>
          </div>

          <div className="flex items-center justify-center text-base font-medium gap-1">
            <span>Don't have an account?</span>
            <Link className="text-blue-300 hover:underline" to={"/login"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 h-full px-10">
        <img src={logo} alt="logo" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default SignupPage;
