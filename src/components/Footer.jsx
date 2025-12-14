import React from 'react'
import { FaLinkedin, FaPhoneSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <>
            <div id='contact' className='md:my-30 md:mt-50 my-20'>

                <div className='text-center'>
                    <h2 className='text-lg font-medium'>Get In Touch</h2>
                    <h1 className='text-5xl font-bold'>Contact Me</h1>
                </div>

                <div className='grid md:mx-50 mx-10 md:gap-0 gap-10 md:mt-20 mt-10'>

                    <div className='md:flex grid gap-5 md:gap-10 md:justify-center'>
                        {/* linkedin */}
                        <a href='https://www.linkedin.com/in/gautham-joshy' className='bg-gray-200 flex items-center md:p-5 p-3 md:text-2xl text-xl gap-2 rounded-4xl border shadow w-fit hover:bg-black hover:text-white transition'>
                            <FaLinkedin className='' />
                            Linkedin
                        </a>

                        {/* email */}
                        <span className='bg-gray-200 flex items-center md:p-5 p-3 md:text-2xl text-xl gap-2 rounded-4xl border shadow w-fit hover:scale-105 transition'>
                            <MdEmail className='' />
                            gauthamjoshy32@gmail.com
                        </span>

                        {/* Phone */}
                        <span className='bg-gray-200 flex items-center md:p-5 p-3 md:text-2xl text-xl gap-2 rounded-4xl border shadow w-fit hover:scale-105 transition'>
                            <FaPhoneSquare className='' />
                            +91 70254 41105
                        </span>

                    </div>

                    {/* 2nd div */}
                    <div className='flex justify-center items-center md:gap-10 gap-3 md:mt-50'>

                        <div className='group'>
                            <a href="#top" className='md:text-2xl font-medium' >Home</a>
                            <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                        </div>
                        <div className='group'>
                            <a href="#about" className='md:text-2xl font-medium' >About</a>
                            <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                        </div>
                        <div className='group'>
                            <a href="#skills" className='md:text-2xl font-medium' >Skills</a>
                            <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                        </div>
                        <div className='group'>
                            <a href="#projects" className='md:text-2xl font-medium' >Projects</a>
                            <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                        </div>
                        <div className='group'>
                            <a href="#contact" className='md:text-2xl font-medium' >Contact</a>
                            <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                        </div>

                    </div>

                    {/* 3rd div */}
                    <div className='text-center md:mt-20'>
                        <span className='md:text-sm text-xs font-light'>Copyright © 2025 Gautham Joshy. All rights reserved</span>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Footer