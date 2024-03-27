import React from "react";

import { Outlet } from "react-router-dom";
import { HomeBanner } from "../components/home/HomeBanner";
import { PostCard } from "../components/home/PostCard";

export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <HomeBanner />
      <p className="">
        <b>Results For Pondicherry</b>
      </p>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Home;
