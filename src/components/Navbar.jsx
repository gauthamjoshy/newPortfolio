import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { MdMenuOpen } from 'react-icons/md'

function Navbar() {
    // state for menu icon
    const [menuBar, setMenuBar] = useState(false)
    return (
        <>
            <div id='top' className='flex justify-between items-center md:mt-10 p-5 md:mx-25'>
                <div className=''>
                    <div className='group'>
                        <a href="/" className='hidden md:block text-3xl font-semibold' >Gautham Joshy</a>
                        <div className='relative bg-black h-0.5 left-[50%] w-0 group-hover:w-full group-hover:h-0.5 group-hover:left-0 group-transition duration-500'></div>
                    </div>
                    <img className='bg-gray-900 md:hidden block' width={"75px"} height={"75px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/GJ_Logo_3.jpg/640px-GJ_Logo_3.jpg" alt="" />
                </div>

                <div className='hidden md:flex md:gap-10'>
                    <div className='group'>
                        <a href="#about" className='md:text-2xl font-medium' >About</a>
                        <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full from-current group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                    </div>
                    <div className='group'>
                        <a href="#skills" className='md:text-2xl font-medium' >Skills</a>
                        <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full from-current group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                    </div>
                    <div className='group'>
                        <a href="#projects" className='md:text-2xl font-medium' >Projects</a>
                        <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full from-current group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                    </div>
                    <div className='group'>
                        <a href="#contact" className='md:text-2xl font-medium' >Contact</a>
                        <div className='relative left-[50%] w-0 h-0.5 bg-black transition-all duration-400 group-hover:w-full from-current group-hover:h-0.5 group-hover:left-0 rounded-4xl'></div>
                    </div>

                </div>

                <div className='md:hidden block cursor-pointer'>
                    {menuBar ?
                        <MdMenuOpen id='animBtn' onClick={() => setMenuBar(false)} className='text-4xl ' />
                        :
                        <IoMdMenu id='' onClick={() => setMenuBar(true)} className='text-4xl' />}
                </div>


            </div>

            {/* drop down list */}
            {menuBar &&
                <div id='animBtn' className='md:hidden flex justify-end pe-5 py-3 bg-black text-white'>
                    <div className='md:hidden flex flex-col gap-3'>
                        <a href="#about" className='md:text-2xl font-medium' >About</a>
                        <a href="#skills" className='md:text-2xl font-medium' >Skills</a>
                        <a href="#projects" className='md:text-2xl font-medium' >Projects</a>
                        <a href="#contact" className='md:text-2xl font-medium' >Contact</a>

                    </div>
                </div>}

        </>
    )
}

export default Navbar