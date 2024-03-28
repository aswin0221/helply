import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VolunteerDirectoryCard } from "../components/voulenteerDierctory/VolunteerDirectoryCard";

export const VolunteerDirectory = () => {
  const volunteers = [
    {
      id: 1,
      name: "John Doe",
      phoneNumber: "123-456-7890",
      state: "California",
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "987-654-3210",
      state: "New York",
    },
    {
      id: 3,
      name: "Michael Johnson",
      phoneNumber: "456-789-0123",
      state: "Texas",
    },
    {
      id: 4,
      name: "Emily Brown",
      phoneNumber: "789-012-3456",
      state: "Florida",
    },
    {
      id: 5,
      name: "David Wilson",
      phoneNumber: "321-654-9870",
      state: "Washington",
    },
    {
      id: 6,
      name: "Emma Garcia",
      phoneNumber: "987-123-4567",
      state: "Illinois",
    },
    {
      id: 7,
      name: "Daniel Martinez",
      phoneNumber: "654-321-0987",
      state: "Ohio",
    },
    {
      id: 8,
      name: "Olivia Lopez",
      phoneNumber: "012-345-6789",
      state: "Michigan",
    },
    {
      id: 9,
      name: "William Lee",
      phoneNumber: "234-567-8901",
      state: "Pennsylvania",
    },
    {
      id: 10,
      name: "Sophia Scott",
      phoneNumber: "567-890-1234",
      state: "Georgia",
    },
    {
      id: 11,
      name: "Maria Garcia",
      phoneNumber: "333-444-5555",
      state: "California",
    },
    {
      id: 12,
      name: "Christopher Lee",
      phoneNumber: "444-555-6666",
      state: "Texas",
    },
    {
      id: 13,
      name: "Emily Brown",
      phoneNumber: "555-666-7777",
      state: "Florida",
    },
    {
      id: 14,
      name: "Olivia Smith",
      phoneNumber: "666-777-8888",
      state: "California",
    },
    {
      id: 15,
      name: "Jacob Martinez",
      phoneNumber: "777-888-9999",
      state: "Ohio",
    },
    {
      id: 16,
      name: "Sophia Johnson",
      phoneNumber: "888-999-0000",
      state: "Washington",
    },
    {
      id: 17,
      name: "Daniel Brown",
      phoneNumber: "999-000-1111",
      state: "Michigan",
    },
    {
      id: 18,
      name: "Ella Wilson",
      phoneNumber: "111-222-3333",
      state: "New York",
    },
    {
      id: 19,
      name: "Noah Garcia",
      phoneNumber: "222-333-4444",
      state: "Illinois",
    },
    {
      id: 20,
      name: "Ava Martinez",
      phoneNumber: "333-444-5555",
      state: "Texas",
    },
  ];

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const openDialog = (volunteer) => {
    setSelectedVolunteer(volunteer);
  };

  const closeDialog = () => {
    setSelectedVolunteer(null);
  };

  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-teal-50 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <VolunteerDirectoryCard />
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
        {filteredVolunteers.map((volunteer) => (
          <div key={volunteer.id} className="bg-white shadow-md rounded-lg p-4">
            <p className="font-bold">{volunteer.name}</p>
            <p>Phone Number: {volunteer.phoneNumber}</p>
            <p>State: {volunteer.state}</p>
            <button
              className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mt-4 w-full"
              onClick={() => openDialog(volunteer)}
            >
              View
            </button>
          </div>
        ))}
      </div>
      {selectedVolunteer && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-25">
          <div className="relative p-8 bg-white rounded-lg shadow-md w-3/4 md:w-1/2">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeDialog}
            >
              <AiOutlineClose size={24} />
            </button>
            <p className="font-bold">{selectedVolunteer.name}</p>
            <p>Phone Number: {selectedVolunteer.phoneNumber}</p>
            <p>State: {selectedVolunteer.state}</p>
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
