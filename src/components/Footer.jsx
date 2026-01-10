import React from "react";
import { FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h1>
        </div>

        {/* contact links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">

          <a
            href="https://www.linkedin.com/in/gautham-joshy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-lg bg-gray-200 border rounded-3xl shadow transition hover:bg-black hover:text-white"
          >
            <FaLinkedin className="text-2xl" />
            LinkedIn
          </a>

          <div className="flex items-center gap-2 px-6 py-3 text-lg bg-gray-200 border rounded-3xl shadow transition hover:scale-105">
            <MdEmail className="text-2xl" />
            gauthamjoshy32@gmail.com
          </div>

          <div className="flex items-center gap-2 px-6 py-3 text-lg bg-gray-200 border rounded-3xl shadow transition hover:scale-105">
            <FaPhoneSquare className="text-2xl" />
            +91&nbsp;70254&nbsp;41105
          </div>

        </div>

        {/* footer navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">

          {["top", "about", "skills", "projects", "contact"].map((item) => (
            <div key={item} className="group">
              <a
                href={`#${item}`}
                className="text-lg md:text-xl font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              <div className="h-0.5 w-0 bg-black mx-auto transition-all duration-300 group-hover:w-full rounded-full"></div>
            </div>
          ))}

        </nav>

        {/* copyright */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-gray-500">
            © 2025 Gautham Joshy. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
