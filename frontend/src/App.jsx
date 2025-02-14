import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import "ldrs/trefoil";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const App = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axios(`/api/auth/me`);

        if (response.data.error) return null;

        console.log("authUser is here:", response.data);

        return response.data;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !user ? (
              <Suspense fallback={<Loader />}>
                <LoginPage />
              </Suspense>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !user ? (
              <Suspense fallback={<Loader />}>
                <SignupPage />
              </Suspense>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
