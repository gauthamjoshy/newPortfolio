import React from "react";
import cloneDesign from "../assets/clone_design.png";
import screenshot from "../assets/Screenshot.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600">
            Browse My Recent
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Projects
          </h1>
        </div>

        {/* projects grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* project card 1 */}
          <div className="border rounded-3xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-black">
            <img
              src={cloneDesign}
              alt="Clone Web Design"
              className="w-full h-48 object-cover rounded-2xl mb-5 transition-transform duration-300 hover:scale-105"
            />

            <h3 className="text-2xl font-semibold text-center">
              Clone Web Design
            </h3>

            <p className="text-base md:text-lg font-medium text-center mt-2">
              A desktop-focused IMDb clone built using HTML, CSS, and Bootstrap.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/gauthamjoshy/clone_site"
                target="_blank"
                rel="noreferrer"
                className="border px-5 py-2 rounded-full font-medium transition hover:bg-black hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://clone-site-tau.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-5 py-2 rounded-full font-medium transition hover:bg-white hover:text-black border"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* project card 2 */}
          <div className="border rounded-3xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-black">
            <img
              src={screenshot}
              alt="Student Progress Manager"
              className="w-full h-48 object-cover rounded-2xl mb-5 transition-transform duration-300 hover:scale-105"
            />

            <h3 className="text-2xl font-semibold text-center">
              Student Progress Manager
            </h3>

            <p className="text-base md:text-lg font-medium text-center mt-2">
              A React frontend application for managing student records with
              CRUD operations, search, filtering, and sorting using JSON Server.
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/gauthamjoshy/studentManagementFrontend"
                target="_blank"
                rel="noreferrer"
                className="border px-5 py-2 rounded-full font-medium transition hover:bg-black hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://student-management-frontend-lake.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-5 py-2 rounded-full font-medium transition hover:bg-white hover:text-black border"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* placeholder / future project */}
          <div className="border rounded-3xl p-6 shadow-lg flex items-center justify-center text-center text-gray-500">
            <p className="text-lg font-medium">
              More projects coming soon 🚀
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
