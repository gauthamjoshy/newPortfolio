import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import profileImage from '../assets/profileImg.png'

function Home() {
  return (
    <section id="home" className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-lg font-medium">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Gautham Joshy
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 mt-4">
            Full Stack Developer
          </h2>

          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a
              href="/documents/RESUME_ABIN.pdf"
              className="border px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black border transition"
            >
              Contact Info
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 mt-8">
            <a
              href="https://www.linkedin.com/in/gautham-joshy"
              className="p-3 bg-black rounded-full hover:bg-white transition"
            >
              <FaLinkedinIn className="text-3xl text-white hover:text-black transition" />
            </a>
            <a
              href="https://github.com/gauthamjoshy"
              className="p-3 bg-black rounded-full hover:bg-white transition"
            >
              <FiGithub className="text-3xl text-white hover:text-black transition" />
            </a>
            <div className="relative group">
              <div className="p-3 bg-black rounded-full">
                <SiGmail className="text-3xl text-white group-hover:rotate-45 transition" />
              </div>
              <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full text-sm hidden group-hover:block">
                gauthamjoshy32@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-xl hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  )
}

export default Home
