import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"; // Import cancel icon
import { UploadOpertunitiesBanner } from "../components/uploadOpertunities/UploadOpertunitiesBanner";

export const UploadOpportunities = () => {
  const [volunteerRoles, setVolunteerRoles] = useState([]);
  const [newRole, setNewRole] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [nation, setNation] = useState("");
  const [street, setStreet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAddRole = () => {
    if (newRole.trim() !== "") {
      setVolunteerRoles([...volunteerRoles, newRole]);
      setNewRole("");
    }
  };

  const handleRemoveRole = (index) => {
    const updatedRoles = volunteerRoles.filter((role, i) => i !== index);
    setVolunteerRoles(updatedRoles);
  };

  const handlePublishOpportunity = () => {
    if (
      summary.trim() === "" ||
      description.trim() === "" ||
      responsibilities.trim() === "" ||
      volunteerRoles.length === 0 ||
      street.trim() === "" ||
      city.trim() === "" ||
      state.trim() === "" ||
      pincode.trim() === "" ||
      nation.trim() === "" ||
      date.trim() === "" ||
      time.trim() === ""
    ) {
      alert("Please fill in all required fields.");
    } else {
      console.log("Summary:", summary);
      console.log("Description:", description);
      console.log("Responsibilities:", responsibilities);
      console.log("Volunteer Roles:", volunteerRoles);
      console.log("Street:", street);
      console.log("City:", city);
      console.log("State:", state);
      console.log("Pincode:", pincode);
      console.log("Nation:", nation);
      console.log("Date:", date);
      console.log("Time:", time);
      // Perform publishing action here
    }
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date in ISO format

  return (
    <div className="bg-gray-200 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <UploadOpertunitiesBanner />
      <div className="px-3">
        <p>
          <b>Hello, Aswin!</b> Share Your Volunteering Opportunity
        </p>
        <div className="bg-white my-6 p-4 rounded-lg">
          {/* Summary */}
          <div className="flex flex-col mb-4">
            <p className="font-medium">Summary</p>
            <textarea
              className="border-black border w-full p-3 my-3"
              name=""
              id=""
              rows="4"
              placeholder="Enter summary here"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            ></textarea>
          </div>
          {/* Description and Responsibilities */}
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between mb-4">
            <div className="flex flex-col w-full">
              <p className="font-medium">Description</p>
              <textarea
                className="border-black border w-full p-3 my-3"
                name=""
                id=""
                rows="4"
                placeholder="Enter description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex flex-col w-full">
              <p className="font-medium">Responsibilities</p>
              <textarea
                className="border-black border w-full p-3 my-3"
                name=""
                id=""
                rows="4"
                placeholder="Enter responsibilities here"
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
                required
              ></textarea>
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
                  <AiOutlineCloseCircle
                    className="ml-2 cursor-pointer"
                    onClick={() => handleRemoveRole(index)}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="border-black border w-full p-3 my-3 mr-2"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Enter new role"
                required
              />
              <button
                className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddRole}
              >
                Add
              </button>
            </div>
          </div>
          {/* Address Fields */}
          <div className="flex flex-col lg:flex-row lg:gap-10 mb-4">
            <div className="flex flex-col w-full">
              <p className="font-medium">Street</p>
              <input
                type="text"
                className="border-black border w-full p-3 my-3"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Enter street"
                required
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">City</p>
              <input
                type="text"
                className="border-black border w-full p-3 my-3"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                required
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">State</p>
              <input
                type="text"
                className="border-black border w-full p-3 my-3"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter state"
                required
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">Pincode</p>
              <input
                type="text"
                className="border-black border w-full p-3 my-3"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter pincode"
                required
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <p className="font-medium">Nation</p>
              <input
                type="text"
                className="border-black border w-full p-3 my-3"
                value={nation}
                onChange={(e) => setNation(e.target.value)}
                placeholder="Enter nation"
                required
              />
            </div>
          </div>
          {/* Date and Time Fields */}
          <div className="flex flex-col lg:flex-row lg:gap-10 mb-4">
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="font-medium">Date</p>
              <input
                type="date"
                className="border-black border w-full p-3 my-3"
                value={date}
                min={today} // Restrict to upcoming dates
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter date"
                required
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="font-medium">Time</p>
              <input
                type="time"
                className="border-black border w-full p-3 my-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time"
                required
              />
            </div>
          </div>
          {/* Publish Opportunity Button */}
          <div className="flex items-center">
            <button
              className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-lg w-full"
              onClick={handlePublishOpportunity}
            >
              Publish Opportunity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
