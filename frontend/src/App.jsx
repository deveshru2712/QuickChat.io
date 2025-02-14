import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "ldrs/trefoil";
import { useQuery } from "@tanstack/react-query";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const App = () => {
  const {} = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
      } catch (error) {}
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Suspense
        fallback={
          <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4"
            color="gray"
          ></l-trefoil>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
