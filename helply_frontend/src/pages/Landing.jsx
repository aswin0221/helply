import React from "react";
import { HomeBanner } from "../components/home/HomeBanner";
import { Link } from "react-router-dom";
import { PostCard } from "../components/home/PostCard";

export const Landing = () => {
  return (
    <>
      <HomeBanner />
      <p className="lg:mx-56 sm:mx-10">
        <b>Results For Pondicherry</b>
      </p>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
};
