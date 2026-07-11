import React from 'react'

const Skills = () => {

  return (
    <section className=" sm:py-20 py-14 px-5" id='skills'>
      <div className="max-w-[1400px] mx-auto ">
        <h2 className='uppercase sm:text-[12px] text-[10px] text-[#8B5CF6] font-semibold '>
          MY SKILLS
        </h2>
        <h2 className='capitalize xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] text-[#fff] font-bold '>
          Technologies I Work With
        </h2>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-7 sm:mt-9 '>
          <div className='flex gap-3 flex-col justify-center items-center sm:p-7 p-5 bg-[#FFFFFF08] border border-[#FFFFFF1A] backdrop-blur-[10px] rounded-[18px] sm:max-w-full max-w-[200px] w-full mx-auto sm:mx-0 '>
            <div className='bg-[#FFFFFF0D] rounded-[6px] p-2 flex justify-center items-center h-[40px] w-[45px] '>
              <img src='/images/logo-1.png' className='h-[27px] object-contain ' />
            </div>
            <div className='text-center '>
              <h2 className='sm:text-[15px] text-[13px] text-[#FFF] font-semibold uppercase '>HTML</h2>
              <h3 className='sm:text-[13px] text-[11px] text-[#D1D5DB] '>
                Frontend
              </h3>
            </div>
          </div>
          <div className='flex gap-3 flex-col justify-center items-center sm:p-7 p-5 bg-[#FFFFFF08] border border-[#FFFFFF1A] backdrop-blur-[10px] rounded-[18px] sm:max-w-full max-w-[200px] w-full mx-auto sm:mx-0 '>
            <div className='bg-[#FFFFFF0D] rounded-[6px] p-2 flex justify-center items-center h-[40px] w-[45px] '>
              <img src='/images/logo-2.png' className='h-[27px] object-contain ' />
            </div>
            <div className='text-center '>
              <h2 className='sm:text-[15px] text-[13px] text-[#FFF] font-semibold uppercase '>css</h2>
              <h3 className='sm:text-[13px] text-[11px] text-[#D1D5DB] '>
                Frontend
              </h3>
            </div>
          </div>
          <div className='flex gap-3 flex-col justify-center items-center sm:p-7 p-5 bg-[#FFFFFF08] border border-[#FFFFFF1A] backdrop-blur-[10px] rounded-[18px] sm:max-w-full max-w-[200px] w-full mx-auto sm:mx-0 '>
            <div className='bg-[#FFFFFF0D] rounded-[6px] p-2 flex justify-center items-center h-[40px] w-[45px] '>
              <img src='/images/logo-3.png' className='h-[27px] object-contain ' />
            </div>
            <div className='text-center '>
              <h2 className='sm:text-[15px] text-[13px] text-[#FFF] font-semibold uppercase '>bootstrap</h2>
              <h3 className='sm:text-[13px] text-[11px] text-[#D1D5DB] '>
                CSS Framework
              </h3>
            </div>
          </div>
          <div className='flex gap-3 flex-col justify-center items-center sm:p-7 p-5 bg-[#FFFFFF08] border border-[#FFFFFF1A] backdrop-blur-[10px] rounded-[18px] sm:max-w-full max-w-[200px] w-full mx-auto sm:mx-0 '>
            <div className='bg-[#FFFFFF0D] rounded-[6px] p-2 flex justify-center items-center h-[40px] w-[45px] '>
              <img src='/images/logo-4.png' className='h-[27px] object-contain ' />
            </div>
            <div className='text-center '>
              <h2 className='sm:text-[15px] text-[13px] text-[#FFF] font-semibold uppercase '>tailwind</h2>
              <h3 className='sm:text-[13px] text-[11px] text-[#D1D5DB] '>
                CSS Framework
              </h3>
            </div>
          </div>
          <div className='flex gap-3 flex-col justify-center items-center sm:p-7 p-5 bg-[#FFFFFF08] border border-[#FFFFFF1A] backdrop-blur-[10px] rounded-[18px] sm:max-w-full max-w-[200px] w-full mx-auto sm:mx-0 '>
            <div className='bg-[#FFFFFF0D] rounded-[6px] p-2 flex justify-center items-center h-[40px] w-[45px] '>
              <img src='/images/logo-5.png' className='h-[27px] object-contain ' />
            </div>
            <div className='text-center '>
              <h2 className='sm:text-[15px] text-[13px] text-[#FFF] font-semibold uppercase '>figma</h2>
              <h3 className='sm:text-[13px] text-[11px] text-[#D1D5DB] '>
                Design Tool
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
