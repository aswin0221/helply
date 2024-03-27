import React from "react";
import logo from "../../assets/volunteering/cuate.png";
import abstrct_right from "../../assets/abstrct-right.png";
import abstrct_left from "../../assets/abstrct-left.png";

export const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center w-full gap-20 bg-teal-600 p-5  sm:flex-row my-10 lg: rounded-xl relative">
      <div className="hidden lg:flex-shrink-0 w-1/12 sm:block">
        <img src={abstrct_right} alt="hh" className="w-full" />
      </div>
      <div className="flex-shrink-0  sm:w-full lg:w-1/3">
        <img src={logo} alt="hh" className="w-full" />
      </div>
      <div className="flex flex-col lg:w-1/4  sm:w-full gap-y-10">
        <div className="text-center font-semibold  text-white  sm:text-left lg:w-96">
          Make a difference with us. Join our community, where every volunteer
          creates a better world through simple acts of kindness.
        </div>
        <form className="">
          <div className="relative ">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Location ...."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-3 bottom-2 justify-center bg-teal-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex-shrink-0 w-64 sm:block">
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
