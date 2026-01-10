import React from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600">
            Explore My
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Skills
          </h1>
        </div>

        {/* skill groups */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Frontend Development
            </h3>

            <div className="flex flex-wrap gap-5">
              <Skill icon={<FaHtml5 />} label="HTML" />
              <Skill icon={<FaCss3Alt />} label="CSS" />
              <Skill icon={<IoLogoJavascript />} label="JavaScript" />
              <Skill icon={<FaReact />} label="React" />
              <Skill icon={<RiTailwindCssFill />} label="Tailwind CSS" />
              <Skill icon={<FaBootstrap />} label="Bootstrap" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Backend Development
            </h3>

            <div className="flex flex-wrap gap-5">
              <Skill icon={<FaNode />} label="Node.js" />
              <Skill label="Express.js" custom />
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Database
            </h3>

            <div className="flex flex-wrap gap-5">
              <Skill icon={<DiMongodb />} label="MongoDB" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Tools & Version Control
            </h3>

            <div className="flex flex-wrap gap-5">
              <Skill icon={<FaGitAlt />} label="Git" />
              <Skill icon={<FaGithub />} label="GitHub" />
              <Skill icon={<FaFigma />} label="Figma" />
              <Skill icon={<SiPostman />} label="Postman" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Skill({ icon, label, custom }) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-4 bg-gray-300 rounded-2xl shadow transition hover:shadow-xl">
      <div className="text-5xl">
        {custom ? (
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-lg">
            ex
          </span>
        ) : (
          icon
        )}
      </div>
      <span className="text-lg font-bold text-center">
        {label}
      </span>
    </div>
  );
}

export default Skills;
