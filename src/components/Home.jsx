import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import profileImage from '../../src/assets/profileImg.png'
import { SiGmail } from 'react-icons/si'
// import { a } from '../../documents/RESUME_ABIN'

function Home() {
    return (
        <>
            <div id='home' className='grid md:grid-cols-2 md:gap-40 md:mx-25 md:mt-30 mt-10'>
                {/* info */}
                <div className='flex justify-center items-center md:ms-60'>
                    <div className=''>
                        <div className='text-center'>
                            <p className='text-lg font-medium '>HI, I'm</p>
                            <h1 className='md:text-5xl text-3xl font-bold mt-5'>Gautham Joshy</h1>
                            <h2 className='md:text-4xl text-2xl font-semibold text-gray-500 mt-5'>Full Stack Developer</h2>

                        </div>

                        <div className='flex justify-center items-center md:gap-5 gap-2 mt-6'>
                            <a href='/documents/RESUME_ABIN.pdf' className='download text-black border w-fit py-3 px-4 rounded-3xl font-bold flex items-center cursor-pointer hover:text-white hover:bg-black transition'>Download CV</a>
                            <a href='#contact' className='text-white bg-black border w-fit py-3 px-4 rounded-3xl font-bold flex items-center cursor-pointer hover:text-black hover:bg-white transition'>Contact info</a>
                            <div></div>
                        </div>

                        <div className='flex justify-center items-center md:gap-5 md:me-15 me-10 gap-2 mt-7'>
                            <a href='https://www.linkedin.com/in/gautham-joshy' className=' bg-black hover:bg-white transition p-3 rounded-full '>
                                <FaLinkedinIn className='relative text-white text-4xl cursor-pointer hover:text-black transition' />
                            </a>
                            <a href='https://github.com/gauthamjoshy' className=' bg-black hover:bg-white p-3 rounded-full '>
                                <FiGithub className='relative text-white text-4xl cursor-pointer hover:text-black transition' />
                            </a>
                            {/* <a href='' className='relative bg-black hover:bg-white p-3 rounded-full '>
                                <SiGmail className='relative text-white text-4xl cursor-pointer hover:text-black transition' />
                            </a> */}
                            <div className='relative mb-auto '>
                                <p className='absolute flex items-center group gap-5 bg-black text-white p-3 rounded-full transition-all '>
                                    <SiGmail className='text-4xl group-hover:rotate-45 transition-all duration-300' />
                                    <span className='text-lg hidden group-hover:inline-block transition-all'>gauthamjoshy32@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className='md:mt-0 mt-10'>
                    <img className='shadow-xl shadow-gray-400 hover:scale-102 hover:shadow-xl hover:shadow-black transition duration-300 md:w-110 md:h-110 w-90 h-90 md:mx-0 mx-7 ' style={{ borderRadius: "50%" }} src={profileImage} alt="" />
                </div>

            </div>

        </>
    )
}

export default Home