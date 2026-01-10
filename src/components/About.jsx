import React from "react";
import sideImg from "../assets/sideImg.jpg";
import { FaUserGraduate } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24"
    >
      {/* container */}
      <div className="mx-auto max-w-6xl px-4">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600">
            Get To Know More
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            About Me
          </h1>
        </div>

        {/* content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div className="flex justify-center">
            <img
              src={sideImg}
              alt="About"
              className="w-full max-w-sm rounded-3xl shadow-lg shadow-gray-400 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* text side */}
          <div className="space-y-8">

            {/* education card */}
            <div className="bg-white border rounded-3xl p-8 text-center shadow-lg shadow-gray-400 transition-transform duration-300 hover:scale-105">
              <FaUserGraduate className="text-5xl mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Education</h2>
              <p className="text-lg font-semibold mt-2">
                B-Tech in Computer Science
              </p>
              <p className="text-gray-600 mt-1">
                APJ Abdul Kalam Technological University
              </p>
            </div>

            {/* description */}
            <div className="border rounded-3xl p-8 text-justify text-base md:text-lg font-medium shadow-lg shadow-gray-400 transition-transform duration-300 hover:scale-105">
              Hi, I'm Gautham Joshy, a Full Stack Developer passionate about
              building clean, responsive, and user-focused web applications.
              I recently graduated in Computer Science and am currently working
              as an intern, gaining hands-on experience with real-world
              development.
              <br /><br />
              I specialize in React, Node.js, Express, and MongoDB, and enjoy
              turning ideas into functional, efficient, and visually appealing
              solutions. As a continuous learner, I explore new technologies
              and best practices to grow as a developer and deliver meaningful
              impact through my work.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
