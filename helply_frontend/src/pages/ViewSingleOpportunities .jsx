import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const sampleOpportunity = {
  summary:
    "Volunteering Opportunity Summary. This opportunity involves working with a diverse team to organize community events and initiatives.",
  description:
    "Description of the volunteering opportunity. Volunteers will assist in planning and executing various activities aimed at community development.",
  responsibilities:
    "Responsibilities of volunteers. Volunteers will be responsible for coordinating logistics, communicating with stakeholders, and ensuring smooth event execution.",
  requirements:
    "Requirements for volunteers. Volunteers should have excellent communication skills, be able to work in a team, and have a passion for community service.",
  volunteerRoles: [
    "Role 1: Event Coordinator - Manage event logistics",
    "Role 2: Communication Officer - Handle communication with stakeholders",
    "Role 3: Volunteer Coordinator - Recruit and manage volunteers",
  ],
  street: "No 23, Beach Road",
  city: "Puducherry",
  state: "Puducherry",
  pincode: "605001",
  nation: "India",
  date: "2024-04-01",
  time: "12:00 PM",
};

export const ViewSingleOpportunities = () => {
  const {
    summary,
    description,
    responsibilities,
    requirements,
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
    <div className="bg-teal-50 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <div className="px-3">
        <div className="my-6 p-4 rounded-lg">
          {/* Summary */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Summary</p>
            <p>{summary}</p>
          </div>
          {/* Description */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Description</p>
            <p>{description}</p>
          </div>
          {/* Responsibilities */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Responsibilities</p>
            <p>{responsibilities}</p>
          </div>
          {/* Requirements */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Requirements</p>
            <p>{requirements}</p>
          </div>
          {/* Volunteer Roles */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Volunteer Roles</p>
            <div className="flex flex-wrap gap-2">
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
          {/* Address */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Address</p>
            <p>
              {street}
              <br />
              {city}
              <br />
              {state} - {pincode}
              <br />
              {nation}
            </p>
          </div>
          {/* Date and Time */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <p className="font-medium">Date & Time</p>
            <p>
              {date}, {time}
            </p>
          </div>
          {/* Join Button */}
          <div className="flex items-center">
            <button
              className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-lg w-full"
              onClick={() => console.log("Join clicked")} // Placeholder action
            >
              I'm Willing to Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
