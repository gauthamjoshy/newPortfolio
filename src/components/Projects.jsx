import React from 'react'
import clone_design from '../assets/clone_design.png'
import Screenshot from '../assets/Screenshot.png'

function Projects() {
    return (
        <>
            <div id='projects' className='md:my-30 md:mt-50 my-20'>

                <div className='text-center'>
                    <h2 className='text-lg font-medium'>Browse My Recent</h2>
                    <h1 className='text-5xl font-bold'>Projects</h1>
                </div>


                <div className='grid md:grid-cols-3 md:mx-40 mx-10 md:gap-10 gap-10 md:mt-30 mt-10'>

                    {/* card-1 */}

                    <div className='border rounded-4xl p-5 shadow-2xl hover:shadow-black transition duration-200 hover:scale-101'>

                        <div className=''>
                            <img src={clone_design} alt="" className='border rounded-4xl md:h-75 h-50 hover:scale-105 transition' />
                        </div>



                        <div className='text-center my-5'>
                            <h3 className='text-2xl font-semibold'>Clone Web design</h3>
                            <p className='text-lg font-medium mt-2'>A web design clone of IMDb specifically for desktop, created using HTML, CSS, and Bootstrap</p>
                        </div>
                        <div className='flex justify-center items-center gap-5 pb-5'>
                            <a href='https://github.com/gauthamjoshy/clone_site' className='bg-white border text-black text-lg px-4 py-2 rounded-4xl hover:bg-black hover:text-white transition cursor-pointer shadow-2xl'>Github</a>
                            <a href='https://clone-site-tau.vercel.app/' className='bg-black border text-white text-lg px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition cursor-pointer shadow-2xl'>Live Demo</a>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className='border rounded-4xl p-5 shadow-2xl hover:shadow-black transition duration-200 hover:scale-101 '>

                        <div className=''>
                            <img src={Screenshot} alt="" className='border rounded-4xl w-125 md:h-75 h-50 hover:scale-105 transition ' />
                        </div>

                        <div className='text-center my-5'>
                            <h3 className='text-2xl font-semibold'>Student Progress Manager(Frontend)</h3>
                            <p className='text-lg font-medium mt-2'>A React Frontend project for tracking the progress of students. Enables faculty authentication and complete student record management with CRUD features, also includes search, filtering, and sorting, powered by JSON Server as a mock backend.</p>
                        </div>
                        <div className='flex justify-center items-center gap-5 pb-5'>
                            <a href='https://github.com/gauthamjoshy/studentManagementFrontend' className='bg-white border text-black text-lg px-4 py-2 rounded-4xl hover:bg-black hover:text-white transition cursor-pointer shadow-2xl'>Github</a>
                            <a href='https://student-management-frontend-lake.vercel.app/' className='bg-black border text-white text-lg px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition cursor-pointer shadow-2xl'>Live Demo</a>
                        </div>
                    </div>

                    {/* card-3 */}
                    {/* <div className='border rounded-4xl p-5 shadow-2xl hover:shadow-black transition duration-200 hover:scale-101'>

                        <div className=''>
                            <img src="" alt="" className='border rounded-4xl md:h-75 h-50 hover:scale-105 transition ' />
                        </div>


                        <div className='text-center my-5'>
                            <h3 className='text-2xl font-semibold'></h3>
                            <p className='text-lg font-medium mt-2'>Currently under development</p>
                        </div>
                        <div className='flex justify-center items-center gap-5 pb-5'>
                            <p className='bg-white border text-black text-lg px-4 py-2 rounded-4xl hover:bg-black hover:text-white transition cursor-pointer shadow-2xl'>Github</p>
                            <a href='https://clone-site-tau.vercel.app/' className='bg-black border text-white text-lg px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition cursor-pointer shadow-2xl'>Live Demo</a>
                        </div>

                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Projects