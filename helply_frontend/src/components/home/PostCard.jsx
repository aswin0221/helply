import React from "react";

export const PostCard = () => {
  return (
    <div className="lg:mx-56 sm:mx-10">
      <div className="border rounded-xl my-5 px-3 py-4 flex  gap-3 ">
        <div className="bg-gray-600 h-10 w-10 rounded-full"> </div>
        <div className="flex-grow w-1/2">
          {" "}
          <div className="flex justify-between items-center">
            <div className="font-bold">Aswin</div>
            <div className="font-bold">1 day ago</div>
          </div>
          <div className="font-light">Solo Volunteer</div>
          <div className="my-3">
            Trash Collection | Trash Collection | Trash Collection | Trash
            Collection
          </div>
          <div>
            We're organizing a community cleanup event to beautify our
            neighborhood and promote environmental awareness. We need passionate
            individuals who care about their community and the environment......
          </div>
          <div className="py-2 bg-teal-600 w-40 rounded-full text-white text-center my-9">
            Check Opertunities
          </div>
        </div>
      </div>
    </div>
  );
};
