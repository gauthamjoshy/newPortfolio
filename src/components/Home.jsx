import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import profileImage from "../assets/profileImg.png";

function Home() {
  return (
    <section
      id="home"
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* left content */}
          <div className="flex justify-center md:justify-start">
            <div className="text-center md:text-left">

              <p className="text-lg font-medium">
                Hi, I'm
              </p>

              <h1 className="text-3xl md:text-5xl font-bold mt-4">
                Gautham Joshy
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 mt-3">
                Full Stack Developer
              </h2>

              {/* buttons */}
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a
                  href="/documents/RESUME_ABIN.pdf"
                  className="border px-6 py-3 rounded-full font-bold transition hover:bg-black hover:text-white"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="bg-black text-white px-6 py-3 rounded-full font-bold transition hover:bg-white hover:text-black border"
                >
                  Contact Info
                </a>
              </div>

              {/* social icons */}
              <div className="flex justify-center md:justify-start gap-4 mt-7">

                <a
                  href="https://www.linkedin.com/in/gautham-joshy"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-black transition hover:bg-white"
                >
                  <FaLinkedinIn className="text-3xl text-white hover:text-black transition" />
                </a>

                <a
                  href="https://github.com/gauthamjoshy"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-black transition hover:bg-white"
                >
                  <FiGithub className="text-3xl text-white hover:text-black transition" />
                </a>

                {/* gmail hover */}
                <div className="group relative">
                  <div className="flex items-center gap-3 p-3 rounded-full bg-black text-white transition group-hover:px-5">
                    <SiGmail className="text-3xl transition-transform group-hover:rotate-45" />
                    <span className="hidden md:inline-block whitespace-nowrap">
                      gauthamjoshy32@gmail.com
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* right image */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg shadow-gray-400 transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
