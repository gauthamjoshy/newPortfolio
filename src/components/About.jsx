import React from 'react'
import sideImg from '../assets/sideImg.jpg'
import { FaUserGraduate } from 'react-icons/fa'

function About() {
    return (
        <>
            <div id='about' className='md:my-30 md:mt-50 my-20'>
                <div className='text-center'>
                    <h2 className='text-lg font-medium'>Get To Know More</h2>
                    <h1 className='text-5xl font-bold'>About Me</h1>
                </div>

                <div className='grid md:grid-cols-2 md:mx-50 mx-10 md:gap-0 gap-10 md:mt-30 mt-10'>

                    {/* img */}
                    <div>
                        <img className='shadow-xl shadow-gray-400 hover:scale-102 hover:shadow-xl hover:shadow-black transition duration-300 md:w-140 md:h-130 w-90 h-90  border rounded-4xl' src={sideImg} alt="" />

                    </div>

                    <div>
                        <div className="flex justify-center">
                            <div className="bg-white shadow-lg shadow-gray-400 hover:scale-102 hover:shadow-lg hover:shadow-black transition duration-300 p-8 rounded-4xl w-full text-center border">
                                <div className="flex justify-center mb-4">
                                    <FaUserGraduate className="text-6xl text-black" />
                                </div>

                                <h2 className="text-2xl font-bold">Education</h2>
                                <p className="text-lg font-semibold mt-2">B-Tech in Computer Science</p>
                                <p className="text-gray-600 mt-1">
                                    From A P J Abdul Kalam Technological University
                                </p>
                            </div>
                        </div>

                        <div className='md:mt-5 mt-10 text-lg text-justify w-full border rounded-4xl p-8 font-medium shadow-lg shadow-gray-400 hover:scale-102 hover:shadow-lg hover:shadow-black transition duration-300'>
                            Hi, I'm Gautham Joshy, a Full Stack Developer passionate about building clean, responsive, and user-focused web applications. I recently graduated in Computer Science and am currently working as an intern, gaining hands-on experience with real-world development.
                            I specialize in React, Node.js, Express, and MongoDB, and enjoy turning ideas into functional, efficient, and visually appealing solutions. As a continuous learner, I explore new technologies and best practices to grow as a developer and deliver meaningful impact through my work.

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default About