import React from 'react'

const Hero = () => {
  return (
    <section className="py-10 relative px-5 mt-24">
      <div className="max-w-[1400px] mx-auto ">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 items-center sm:py-20 py-14 '>
          <div className=' !space-y-3 '>
            <img src="/images/bg-blur.png" alt="" className='absolute left-[-50px] top-[50px] object-fill h-[150px] max-w-[500px] w-full ' />
            <div className='max-w-fit px-5 py-2 rounded-full bg-[#FFFFFF0D] backdrop-blur-[10px] border border-[#FFFFFF1A] '>
              <span className='sm:text-[14px] text-[12px] font-medium text-[#8B5CF6] '>Web Designer & UI/UX Designer</span>
            </div>
            <h2 className='xl:text-[64px] lg:text-[54px] md:text-[50px] sm:text-[46px] text-[42px] font-bold text-[#FFF] '>Nikhil <span className='text-[#8B5CF6] '>Tyagi</span></h2>
            <h3 className='xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] text-[#9CA3AF] font-semibold '>Web Designer & UI/UX Designer</h3>
            <p className='lg:text-[18px] sm:text-[16px] text-[14px] text-[#9CA3AF] sm:max-w-[550px] max-w-[480px] '>Turning ideas into responsive and visually appealing websites with clean, modern design.Continuously learning UI/UX to build intuitive experiences that users enjoy.</p>
          </div>
          <div className='md:absolute md:right-0 md:top-[50px] md:block relative flex ml-auto right-[-20px] '>
            <img src='/images/main.png' className='object-cover h-[420px] ' />
            <div className='sm:w-[130px] w-[110px] bg-[#FFFFFF08] p-3 rounded-[8px] border border-[#FFFFFF1A] backdrop-blur-[10px] absolute bottom-0 sm:left-0 left-[-20px] '>
              <h2 className='lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-bold text-[#8B5CF6] '>
                1.4+
              </h2>
              <p className='sm:text-[14px] text-[12px] font-medium text-[#9CA3AF] '>
                Years of
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
