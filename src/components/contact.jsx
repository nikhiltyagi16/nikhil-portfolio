import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'
import { SlSocialLinkedin } from 'react-icons/sl'

const Contact = () => {

    return (
        <section className=" sm:py-20 py-14 px-5" id='contact'>
            <div className="max-w-[1400px] mx-auto ">
                <h2 className='uppercase sm:text-[12px] text-[10px] text-[#8B5CF6] font-semibold '>
                    Contact Details
                </h2>
                <h2 className='capitalize xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] text-[#fff] font-bold '>
                    Get In Touch
                </h2>
                <div className='flex gap-x-8 gap-y-6 items-center flex-wrap sm:mt-9 mt-6 '>
                    <a
                        href="mailto:tyaginikhil2003@gmail.com" className='max-w-[280px] w-full px-5 py-3 flex items-center gap-3 bg-[#FFFFFF0D] rounded-[12px] backdrop-blur-[10px] hover:shadow-[0px_0px_12px_5px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] cursor-pointer '>
                        <div className='p-2 rounded-[8px] flex items-center justify-center bg-[#FFFFFF0D] '>
                            <FiMail className='sm:text-[18px] text-[#8B5CF6] ' />
                        </div>
                        <span className='sm:text-[15px] texxt-[13px] text-[#D1D5DB] '>
                            tyaginikhil2003@gmail.com
                        </span>
                    </a>
                    <a
                        href="tel:+919518454566" className='max-w-[280px] w-full px-5 py-3 flex items-center gap-3 bg-[#FFFFFF0D] rounded-[12px] backdrop-blur-[10px] hover:shadow-[0px_0px_12px_5px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] cursor-pointer '>
                        <div className='p-2 rounded-[8px] flex items-center justify-center bg-[#FFFFFF0D] '>
                            <IoCallOutline className='sm:text-[18px] text-[#8B5CF6] ' />
                        </div>
                        <span className='sm:text-[15px] texxt-[13px] text-[#D1D5DB] '>
                            +91 9518454566
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/nikhiltyagi16august"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='max-w-[280px] w-full px-5 py-3 flex items-center gap-3 bg-[#FFFFFF0D] rounded-[12px] backdrop-blur-[10px] hover:shadow-[0px_0px_12px_5px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] cursor-pointer '>
                        <div className='p-2 rounded-[8px] flex items-center justify-center bg-[#FFFFFF0D] '>
                            <SlSocialLinkedin className='sm:text-[18px] text-[#8B5CF6] ' />
                        </div>
                        <span className='sm:text-[15px] texxt-[13px] text-[#D1D5DB] '>
                            Linkdin-profile
                        </span>
                    </a>
                    <a href="https://www.instagram.com/nikhiltyagi.07/"
                        target="_blank"
                        rel="noopener noreferrer" className='max-w-[280px] w-full px-5 py-3 flex items-center gap-3 bg-[#FFFFFF0D] rounded-[12px] backdrop-blur-[10px] hover:shadow-[0px_0px_12px_5px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] cursor-pointer '>
                        <div className='p-2 rounded-[8px] flex items-center justify-center bg-[#FFFFFF0D] '>
                            <FaInstagram className='sm:text-[18px] text-[#8B5CF6] ' />
                        </div>
                        <span className='sm:text-[15px] texxt-[13px] text-[#D1D5DB] '>
                            Instagram-profile
                        </span>
                </a>
            </div>
        </div>
        </section >
    )
}

export default Contact
