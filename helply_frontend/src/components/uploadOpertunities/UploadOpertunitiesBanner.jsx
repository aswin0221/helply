import React from "react";
import logo from "../../assets/volunteering/cuate.png";
import abstrct_right from "../../assets/abstrct-right.png";
import abstrct_left from "../../assets/abstrct-left.png";
import { FaChevronDown } from "react-icons/fa";

export const UploadOpertunitiesBanner = () => {
  return (
    <div className="flex flex-col items-center drop-shadow-sm justify-between w-full gap-20 bg-teal-600 p-5  sm:flex-row my-10 lg: rounded-xl relative">
      <div className="hidden lg:flex-shrink-0 w-1/12 sm:block">
        <img src={abstrct_right} alt="hh" className="w-full" />
      </div>
      <div className="flex flex-col lg:w-1/2 text-center items-center gap-4 lg:text-2xl  text-white  text-wrap">
        <div className="text-center lg:text-xl font-semibold  text-white  sm:text-left ">
          <b>Be a catalyst for good</b> – share opportunities that inspire
          positive action and create a community of impactful change.
        </div>
        <div className="text-white ">
          <FaChevronDown />
        </div>
      </div>

      <div className="hidden lg:flex-shrink-0  sm:block">
        <div
          className="hidden lg:flex-shrink-0 w-1/12 sm:block"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          <img src={abstrct_left} alt="hh" className="w-full" />
        </div>
      </div>
    </div>
  );
};
