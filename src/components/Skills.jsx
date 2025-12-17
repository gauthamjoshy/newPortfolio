import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaAngular, FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNode, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiPostman, SiRedux } from 'react-icons/si'

function Skills() {
    return (
        <>
            <div id='skills' className='md:my-30 md:mt-50 my-20'>
                <div className='text-center'>
                    <h2 className='text-lg font-medium'>Explore My</h2>
                    <h1 className='text-5xl font-bold'>Skills</h1>
                </div>

                <div className='grid md:grid-cols-2 md:mx-50 mx-10 md:gap-0 gap-10 md:mt-30 mt-10'>

                    <div>
                        <h1 className='text-3xl font-semibold'>Frontend Development</h1>
                        <div className='flex flex-wrap gap-5 mt-10'>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-orange-600 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaHtml5 className='text-5xl' />
                                </div>
                                <span className='md:text-2xl text-xl font-bold '>HTML</span>
                            </div>

                            <div className='px-8 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-blue-700 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaCss3Alt className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>CSS</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-yellow-500 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <IoLogoJavascript className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>JavaScript</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-sky-600 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaReact className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>React</span>
                            </div>


                        </div>

                        <div className='flex flex-wrap gap-5 mt-5 '>

                            {/* <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-purple-500 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <SiRedux className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Redux</span>
                            </div> */}

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-red-500 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaAngular className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Angular</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-cyan-300 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <RiTailwindCssFill className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Tailwind CSS</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-violet-500 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaBootstrap className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Bootstrap</span>
                            </div>

                        </div>
                    </div>


                    <div className='md:ms-20'>
                        <h1 className='text-3xl font-semibold'>Backend Development</h1>
                        <div className='flex gap-5 mt-10'>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-green-600 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaNode className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Node.js</span>
                            </div>

                            <div className='px-8 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-amber-800 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <p className='text-white bg-black text-lg w-10 h-10 rounded-full text-center p-1' >ex</p>
                                </div>
                                <span className='text-2xl font-bold'>Express.js</span>
                            </div>



                        </div>
                    </div>

                </div>

                {/* second row */}

                <div className='grid md:grid-cols-2 md:mx-50 mx-10 md:gap-0 gap-10 md:mt-30 mt-10'>

                    <div>
                        <h1 className='text-3xl font-semibold'>Database</h1>
                        <div className='flex gap-5 mt-10'>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-emerald-900 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <DiMongodb className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>MongoDB</span>
                            </div>

                        </div>

                    </div>

                    <div className='md:ms-20'>

                        <h1 className='text-3xl font-semibold'>Tools & Version Control</h1>

                        <div className='flex flex-wrap gap-5 mt-10'>
                            <div className='px-8 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-rose-600 transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaGitAlt className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Git</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-black transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaGithub className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Github</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-yellow-500  transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <FaFigma className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Figma</span>
                            </div>

                            <div className='px-6 py-4 bg-gray-300 rounded-2xl shadow hover:shadow-2xl hover:shadow-orange-500  transition-shadow duration-1000 hover:duration-100'>
                                <div className='flex justify-center items-center'>
                                    <SiPostman className='text-5xl' />
                                </div>
                                <span className='text-2xl font-bold'>Postman</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Skills