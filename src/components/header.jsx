import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className='px-5 py-8 shadow-[0_0_15px_0_rgba(255,255,255,0.25)] w-full z-10 bg-[#030712] fixed top-0 left-0 '>
      <div className=' max-w-[1400px] w-full mx-auto'>
        <div className='flex items-center justify-between gap-3 flex-wrap '>
          <h2 className='xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] text-[#fff] font-bold '>
            Nikhil<span className='text-[#8B5CF6]'>.</span>
          </h2>
          <ul className='flex sm:gap-14 gap-5 items-center '>
            <li className='sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium  '>
              <Link
                to="about"
                duration={500}
                offset={-100}

                className="outline-none"
                activeClass='!border-b !border-[#fff] !text-[#fff] ' > About
              </Link>
            </li>
            <li className='sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium  '><Link to="projects"
              duration={500}
              offset={-100} className="outline-none" >Projects</Link></li>
            <li className='sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium  '><Link to="skills"
              duration={500}
              offset={-100} className="outline-none" >Skills</Link></li>
            <li className='sm:text-[14px] text-[12px] text-[#9CA3AF] hover:text-[#FFF] cursor-pointer font-medium  '><Link to="contact"
              duration={500}
              offset={-100} className="outline-none" >Contact</Link></li>
          </ul>
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default Header
