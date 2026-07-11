import React from 'react'
import { BsGlobe } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import resume from "../assets/resume.pdf";
import { MdMailOutline } from 'react-icons/md'

const About = () => {
    return (
        <section className=" sm:py-20 py-14 px-5" id='about'>
            <div className="max-w-[1400px] mx-auto ">
                <h2 className='uppercase sm:text-[12px] text-[10px] text-[#8B5CF6] font-semibold '>
                    About me
                </h2>
                <h2 className='capitalize xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] text-[#fff] font-bold '>
                    Basic Information
                </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-7 sm:mt-9 '>
                    <div className='sm:p-7 p-5 rounded-[20px] backdrop-blur-[10px] bg-[#FFFFFF08] border border-[#FFFFFF08] backdrop-blur-[10px] h-full '>
                        <p className='sm:text-[16px] text-[14px] text-[#9CA3AF] '>
                            Hi, I'm Nikhil Tyagi, a Web Designer with 1+ years of experience creating responsive and user-friendly websites. I'm currently expanding my skills in UI/UX Design, focusing on crafting intuitive, modern, and visually engaging digital experiences.
                        </p>
                        <a href={resume} target='_blank' className='px-5 py-2 rounded-[8px] border border-[#FFFFFF1A] bg-tranparent flex items-center max-w-fit gap-2 text-[#D1D5DB] mt-5 md:mt-7 '>
                            <span> Download CV </span>
                            <LuDownload />
                        </a>
                    </div>
                    <div className='sm:p-7 p-5 rounded-[20px] backdrop-blur-[10px] bg-[#FFFFFF08] border border-[#FFFFFF08] backdrop-blur-[10px] space-y-6 h-full '>
                        <div className='flex gap-3  '>
                            <div className='bg-[#FFFFFF08] rounded-[10px] backdrop-blur-[10px] p-2 flex justify-center items-center '>
                                <FaRegUser className='sm:text-[20px] text-[18px] text-[#8B5CF6] ' />
                            </div>
                            <div>
                                <h2 className='sm:text-[12px] text-[10px] text-[#9CA3AF] '>
                                    Name
                                </h2>
                                <h3 className='sm:text-[16px] text-[14px] text-[#FFF] '>
                                    Nikhil Tyagi
                                </h3>
                            </div>
                        </div>
                        <div className='flex gap-3  '>
                            <div className='bg-[#FFFFFF08] rounded-[10px] backdrop-blur-[10px] p-2 flex justify-center items-center '>
                                <MdMailOutline className='sm:text-[20px] text-[18px] text-[#8B5CF6] ' />
                            </div>
                            <div>
                                <h2 className='sm:text-[12px] text-[10px] text-[#9CA3AF] '>
                                    Email
                                </h2>
                                <h3 className='sm:text-[16px] text-[14px] text-[#FFF] '>
                                    tyaginikhil2003@gmail.com
                                </h3>
                            </div>
                        </div>
                        <div className='flex gap-3  '>
                            <div className='bg-[#FFFFFF08] rounded-[10px] backdrop-blur-[10px] p-2 flex justify-center items-center '>
                                <IoCallOutline className='sm:text-[20px] text-[18px] text-[#8B5CF6] ' />
                            </div>
                            <div>
                                <h2 className='sm:text-[12px] text-[10px] text-[#9CA3AF] '>
                                    Phone No.
                                </h2>
                                <h3 className='sm:text-[16px] text-[14px] text-[#FFF] '>
                                    +91 9518454566
                                </h3>
                            </div>
                        </div>
                        <div className='flex gap-3  '>
                            <div className='bg-[#FFFFFF08] rounded-[10px] backdrop-blur-[10px] p-2 flex justify-center items-center '>
                                <BsGlobe className='sm:text-[20px] text-[18px] text-[#8B5CF6] ' />
                            </div>
                            <div>
                                <h2 className='sm:text-[12px] text-[10px] text-[#9CA3AF] '>
                                    Languages
                                </h2>
                                <h3 className='sm:text-[16px] text-[14px] text-[#FFF] '>
                                    Hindi, English
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
