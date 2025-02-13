import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { google, facebook, logo } from "../assets";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    mutate: LoginMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({ email, password }) => {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });

        if (response.status >= 200 && response.status < 300) {
          return response.data;
        } else {
          throw new Error("Login failed");
        }
      } catch (error) {
        console.log(error.response?.data?.message || "Login failed");
      }
    },
    // onSuccess: data,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    LoginMutation(formData);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-screen p-4 flex justify-center items-center gap-2 py-16">
      <div className="flex flex-1 flex-col items-center justify-between h-full px-4  gap-5">
        <div className="flex flex-col items-center justify-center w-3/4 gap-5">
          <span className="ml-36 w-full text-left flex items-center text-2xl font-medium">
            <h1>Welcome Back</h1>
            👋
          </span>
          <span className="flex justify-center items-center text-base font-medium">
            Today is a new day, it's your day. You shape it.
            <br />
            Sign in to start messaging your friends.
          </span>
        </div>

        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="emailField">Email</label>
              <input
                type="text"
                id="emailField"
                placeholder="Example@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-2 px-3 py-1 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <label htmlFor="passwordField">Password</label>
              <input
                type="password"
                id="passwordField"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
            <img
              src={google}
              alt="google_logo"
              loading="lazy"
              className="size-6"
            />
            <span className="text-base font-medium">Sign in with Google</span>
          </div>

          <div className="w-full flex justify-center items-center gap-4 bg-slate-100 p-2 rounded-lg cursor-pointer">
            <img
              src={facebook}
              alt="facebook_logo"
              loading="lazy"
              className="size-6"
            />
            <span className="text-base font-medium">Sign in with Facebook</span>
          </div>

          <div className="flex items-center justify-center text-base font-medium gap-1">
            <span>Don't have an account?</span>
            <Link className="text-blue-300 hover:underline" to={"/signup"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 h-full px-10">
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
