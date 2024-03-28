import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BloodDonorBanner } from "../components/bloodDonors/BloodDonorsBanner";

export const BloodDonors = () => {
  const donors = [
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "123-456-7890",
      state: "California",
      city: "Los Angeles",
      bloodGroup: "A+",
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      state: "New York",
      city: "New York City",
      bloodGroup: "B-",
    },
    {
      id: 3,
      name: "Michael Johnson",
      phoneNumber: "456-789-0123",
      state: "Texas",
      city: "Houston",
      bloodGroup: "O+",
    },
    // Add more donor data as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDonor, setSelectedDonor] = useState(null);

  const openDialog = (donor) => {
    setSelectedDonor(donor);
  };

  const closeDialog = () => {
    setSelectedDonor(null);
  };

  const filteredDonors = donors.filter((donor) =>
    donor.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-teal-50 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <BloodDonorBanner />
      <div className="flex flex-row justify-center items-center my-4 mb-9">
        <hr className="hidden sm:block border-0 border-b border-teal-600 w-1/4 sm:w-1/6 lg:w-1/12" />
        <input
          type="text"
          className="border border-teal-600 rounded-full py-2 px-4 mx-4 w-full sm:w-full lg:w-11/12 lg:mx-0"
          placeholder="Search by state..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <hr className="hidden sm:block border-0 border-b border-teal-600 w-1/4 sm:w-1/6 lg:w-1/12" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDonors.map((donor) => (
          <div key={donor.id} className="bg-white shadow-md rounded-lg p-4">
            <p className="font-bold">{donor.name}</p>
            <p>Phone Number: {donor.phoneNumber}</p>
            <p>State: {donor.state}</p>
            <p>City: {donor.city}</p>
            <p>Blood Group: {donor.bloodGroup}</p>
            <button
              className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mt-4 w-full"
              onClick={() => openDialog(donor)}
            >
              View
            </button>
          </div>
        ))}
      </div>
      {selectedDonor && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-25">
          <div className="relative p-8 bg-white rounded-lg shadow-md w-3/4 md:w-1/2">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeDialog}
            >
              <AiOutlineClose size={24} />
            </button>
            <p className="font-bold">{selectedDonor.name}</p>
            <p>Phone Number: {selectedDonor.phoneNumber}</p>
            <p>State: {selectedDonor.state}</p>
            <p>City: {selectedDonor.city}</p>
            <p>Blood Group: {selectedDonor.bloodGroup}</p>
            <div className="flex justify-center mt-4">
              <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mr-4">
                Call
              </button>
              <button className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
                Mail
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
