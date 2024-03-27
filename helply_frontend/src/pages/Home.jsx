import React from "react";

import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-40">
      <Outlet />
    </div>
  );
};

export default Home;
