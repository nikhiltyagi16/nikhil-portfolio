import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Projects = () => {

  return (
    <section className=" sm:py-20 py-14 px-5" id='projects'>
      <div className="max-w-[1400px] mx-auto ">
        <h2 className='uppercase sm:text-[12px] text-[10px] text-[#8B5CF6] font-semibold '>
          My projects
        </h2>
        <h2 className='capitalize xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] text-[#fff] font-bold '>
          Featured Projects
        </h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-7 sm:mt-9 '>
          <div className='rounded-[18px] bg-[#FFFFFF08] border border-[#FFFFFF1A] relative overflow-hidden max-w-[450px] mx-auto backdrop-blur-[10px] '>
            <a href="https://www.terp-alert.com/" target='_blank' className='p-2 rounded-[8px] cursor-pointer hover:shadow-[0px_0px_12px_0px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] hover:text-[#8B5CF6] hover:border-[#8B5CF633] bg-[#FFFFFF08] backdrop-blur-[10px] z-10 absolute right-[20px] top-[18px] border border-[#FFFFFF33] text-[#FFF] '>
              <HiOutlineExternalLink className='sm:text-[18px] ' />
            </a>
            <img src='/images/project-1.png' className='w-full ' />
            <div className='sm:p-5 p-3 !space-y-4 '>
              <h2 className='sm:text-[18px] text-[16px] text-[#fff] font-bold '>
                Terp Alert
              </h2>
              <p className='line-clamp-2 sm:text-[14px] text-[12px] text-[#FFF9F9] '>
                Terp Alert is a smart cannabis discovery platform that helps users find products based on detailed terpene profiles and real-time dispensary availability. Using automated data monitoring and intelligent alerts, it delivers accurate, transparent, and personalized recommendations. The platform simplifies product research, making it easier for consumers to discover the right cannabis products with confidence and trusted information.
              </p>
              <div className='flex gap-3 items-center flex-wrap '>
                <div className='px-4 py-1 rounded-[4px] bg-[#E34F270D] border border-[#E34F271A] sm:text-[10px] text-[9px] font-semibold text-[#E34F27] uppercase '>
                  html
                </div>
                <div className='px-4 py-1 rounded-[4px] bg-[#1E60AE0D] border border-[#1E60AE1A] sm:text-[10px] text-[9px] font-semibold text-[#1E60AE] uppercase '>
                  CSS
                </div>
                <div className='px-4 py-1 rounded-[4px] bg-[#6BD8FE0D] border border-[#6BD8FE1A] sm:text-[10px] text-[9px] font-semibold text-[#6BD8FE] uppercase '>
                  tailwind
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[18px] bg-[#FFFFFF08] border border-[#FFFFFF1A] relative overflow-hidden max-w-[450px] mx-auto backdrop-blur-[10px] '>
            <a href="https://groovegrillwellness.com/" target='_blank' className='p-2 rounded-[8px] cursor-pointer hover:shadow-[0px_0px_12px_0px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] hover:text-[#8B5CF6] hover:border-[#8B5CF633] bg-[#FFFFFF08] backdrop-blur-[10px] z-10 absolute right-[20px] top-[18px] border border-[#FFFFFF33] text-[#FFF] '>
              <HiOutlineExternalLink className='sm:text-[18px] ' />
            </a>
            <img src='/images/project-2.png' className='w-full ' />
            <div className='sm:p-5 p-3 !space-y-4 '>
              <h2 className='sm:text-[18px] text-[16px] text-[#fff] font-bold '>
                Groove Grill
              </h2>
              <p className='line-clamp-2 sm:text-[14px] text-[12px] text-[#FFF9F9] '>
                A food ordering website that allows customers to select their favorite dishes, add items to the cart, and complete a seamless checkout experience.
              </p>
              <div className='flex gap-3 items-center flex-wrap '>
                <div className='px-4 py-1 rounded-[4px] bg-[#E34F270D] border border-[#E34F271A] sm:text-[10px] text-[9px] font-semibold text-[#E34F27] uppercase '>
                  html
                </div>
                <div className='px-4 py-1 rounded-[4px] bg-[#1E60AE0D] border border-[#1E60AE1A] sm:text-[10px] text-[9px] font-semibold text-[#1E60AE] uppercase '>
                  CSS
                </div>
                <div className='px-4 py-1 rounded-[4px] bg-[#A08B050D] border border-[#A08B051A] sm:text-[10px] text-[9px] font-semibold text-[#A08B05] uppercase '>
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[18px] bg-[#FFFFFF08] border border-[#FFFFFF1A] relative overflow-hidden max-w-[450px] mx-auto backdrop-blur-[10px] '>
            <a href="https://e-desk.co.uk/" target='_blank' className='p-2 rounded-[8px] cursor-pointer hover:shadow-[0px_0px_12px_0px_#8B5CF633] transition ease-in-out duration-300 hover:scale-[1.1] hover:text-[#8B5CF6] hover:border-[#8B5CF633] bg-[#FFFFFF08] backdrop-blur-[10px] z-10 absolute right-[20px] top-[18px] border border-[#FFFFFF33] text-[#FFF] '>
              <HiOutlineExternalLink className='sm:text-[18px] ' />
            </a>
            <img src='/images/project-3.png' className='w-full ' />
            <div className='sm:p-5 p-3 !space-y-4 '>
              <h2 className='sm:text-[18px] text-[16px] text-[#fff] font-bold '>
                E-Desk
              </h2>
              <p className='line-clamp-2 sm:text-[14px] text-[12px] text-[#FFF9F9] '>
                A modern business management solution that helps contractors and businesses organize projects, track finances, manage subcontractors, and automate administrative tasks to improve productivity.
              </p>
              <div className='flex gap-3 items-center flex-wrap '>
                <div className='px-4 py-1 rounded-[4px] bg-[#E34F270D] border border-[#E34F271A] sm:text-[10px] text-[9px] font-semibold text-[#E34F27] uppercase '>
                  html
                </div>
                <div className='px-4 py-1 rounded-[4px] bg-[#1E60AE0D] border border-[#1E60AE1A] sm:text-[10px] text-[9px] font-semibold text-[#1E60AE] uppercase '>
                  CSS
                </div>
                <div className='px-4 py-1 rounded-[4px] bg-[#6BD8FE0D] border border-[#6BD8FE1A] sm:text-[10px] text-[9px] font-semibold text-[#6BD8FE] uppercase '>
                  tailwind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
