import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-teal-50 min-h-screen py-10 px-4 sm:px-10 md:px-20 lg:px-52">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">About Our Project</h1>
        <p className="text-lg mb-6">
          Welcome to our project! We are passionate about creating innovative
          solutions that make a positive impact on society. Our project aims to
          connect volunteers and blood donors with those in need, making it
          easier for communities to come together and support each other.
        </p>
        <p className="text-lg mb-6">
          Our platform allows users to search for volunteers or blood donors
          based on their location, making it convenient to find help when it's
          needed most. Whether you're organizing a community event or urgently
          need a blood donation, our platform is here to help you connect with
          the right people.
        </p>
        <p className="text-lg mb-6">
          We are committed to making a difference and fostering a sense of
          community through our project. Thank you for joining us on this
          journey!
        </p>
        <div className="flex items-center space-x-4 mb-6">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-lg mb-6">
          Connect with us on social media to stay updated on our latest
          developments and community initiatives.
        </p>
        <p className="text-lg mb-6">
          Our project is built by a dedicated team of developers, designers, and
          volunteers who are passionate about making a difference. We are always
          looking for new contributors and partners to join us in our mission.
        </p>
        <p className="text-lg mb-6">
          If you're interested in getting involved or have any questions about
          our project, feel free to reach out to us via email at{" "}
          <span className="text-teal-600">info@example.com</span>.
        </p>
        <p className="text-lg mb-6">
          Thank you for your support and for helping us create positive change
          in the world!
        </p>
      </div>
    </div>
  );
};

export default About;
