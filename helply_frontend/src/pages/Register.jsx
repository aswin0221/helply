import React, { useState } from "react";
import RegisterImg from "../assets/volunteering/register.png";
import RegisterImgSvg from "../assets/volunteering/register-svg.png";

import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineEnvironment,
  AiOutlineNumber,
} from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [isBloodDonor, setIsBloodDonor] = useState(false);
  const [bloodGroup, setBloodGroup] = useState("");

  const handleRegister = () => {
    // Handle registration submission here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Mobile Number:", mobileNumber);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Emergency Contact:", emergencyContact);
    console.log("Is Blood Donor:", isBloodDonor);
    if (isBloodDonor) {
      console.log("Blood Group:", bloodGroup);
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <div className="flex gap-10 items-center">
        <div className="max-w-4xl mx-auto bg-white p-8 w-full lg:w-1/2 rounded-lg shadow-md">
          <div className="flex gap-2 flex-col justify-center items-center lg:flex-row  lg:justify-center lg:items-start align-middle">
            <p className="text-xl">Join Us as a Volunteer </p>
            <p className="text-xl font-bold mb-6">Registration Form</p>
          </div>
          <div className="px-3">
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <AiOutlineUser className="text-teal-600 mr-3" />
              <input
                type="text"
                className="border border-black w-full p-3 my-3 pl-10"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <AiOutlineMail className="text-teal-600 mr-3" />
              <input
                type="email"
                className="border border-black w-full p-3 my-3 pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <AiOutlineNumber className="text-teal-600 mr-3" />
              <input
                type="number"
                className="border border-black w-full p-3 my-3 pl-10"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <FaPhoneAlt className="text-teal-600 mr-3" />
              <input
                type="tel"
                className="border border-black w-full p-3 my-3 pl-10"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <AiOutlineEnvironment className="text-teal-600 mr-3" />
              <input
                type="text"
                className="border border-black w-full p-3 my-3 pl-10"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <AiOutlineEnvironment className="text-teal-600 mr-3" />
              <input
                type="text"
                className="border border-black w-full p-3 my-3 pl-10"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter your state"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <FaPhoneAlt className="text-teal-600 mr-3" />
              <input
                type="tel"
                className="border border-black w-full p-3 my-3 pl-10"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                placeholder="Enter your emergency contact number"
                required
              />
            </div>
            <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
              <BiGroup className="text-teal-600 mr-3" />
              <select
                className="border border-black w-full p-3 my-3 pl-10"
                value={isBloodDonor}
                onChange={(e) => setIsBloodDonor(e.target.value === "true")}
                required
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            {isBloodDonor && (
              <div className="bg-white rounded-lg p-4 mb-4 flex items-center">
                <BiGroup className="text-teal-600 mr-3" />
                <input
                  type="text"
                  className="border border-black w-full p-3 my-3 pl-10"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  placeholder="Enter your blood group"
                  required
                />
              </div>
            )}
            <div className="flex items-center">
              <button
                className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-lg w-full"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        {/* Second half width div */}
        <div className="w-1/2 hidden lg:flex flex-col gap-10">
          <h3 className="font-mono font-bold text-teal-600">
            "A drop of hope, a lifetime of impact: Register to Save Lives
            Today!"
          </h3>
          <img src={RegisterImgSvg} alt="" />
          <img src={RegisterImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
