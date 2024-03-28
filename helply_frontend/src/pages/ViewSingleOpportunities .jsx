import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const sampleOpportunity = {
  summary: "Volunteering Opportunity Summary",
  description: "Description of the volunteering opportunity.",
  responsibilities: "Responsibilities of volunteers.",
  volunteerRoles: ["Role 1", "Role 2", "Role 3"],
  street: "123 Main Street",
  city: "Example City",
  state: "Example State",
  pincode: "12345",
  nation: "Example Nation",
  date: "2024-04-01",
  time: "12:00",
};

export const ViewSingleOpportunities = () => {
  const {
    summary,
    description,
    responsibilities,
    volunteerRoles,
    street,
    city,
    state,
    pincode,
    nation,
    date,
    time,
  } = sampleOpportunity;

  return (
    <div className="bg-gray-200 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <div className="px-3">
        <div className="bg-white my-6 p-4 rounded-lg">
          {/* Summary */}
          <div className="flex flex-col mb-4">
            <p className="font-medium">Summary</p>
            <p>{summary}</p>
          </div>
          {/* Description and Responsibilities */}
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between mb-4">
            <div className="flex flex-col w-full">
              <p className="font-medium">Description</p>
              <p>{description}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="font-medium">Responsibilities</p>
              <p>{responsibilities}</p>
            </div>
          </div>
          {/* Volunteer Roles */}
          <div className="flex flex-col mb-4">
            <p className="font-medium">Volunteer Roles</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {volunteerRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-gray-300 p-2 rounded flex items-center"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
          {/* Address Fields */}
          <div className="flex flex-col lg:flex-row lg:gap-10 mb-4">
            <div className="flex flex-col w-full">
              <p className="font-medium">Street</p>
              <p>{street}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">City</p>
              <p>{city}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">State</p>
              <p>{state}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">Pincode</p>
              <p>{pincode}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">Nation</p>
              <p>{nation}</p>
            </div>
          </div>
          {/* Date and Time Fields */}
          <div className="flex flex-col lg:flex-row lg:gap-10 mb-4">
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="font-medium">Date</p>
              <p>{date}</p>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="font-medium">Time</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
