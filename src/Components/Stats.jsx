import React from 'react'

const Stats = () => {
    return (
        <>
            <div className='stats_bg h-56 mb:h-auto lg:h-56'>
                <div className='h-full flex justify-evenly text-white items-center bg-[#224072] bg-opacity-60 mb:flex mb:flex-col mb:py-10 mb:space-y-12 lg:py-0 lg:space-y-0 lg:flex-row'>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-5xl font-[700]'>96%</p>
                        <p className='font-Poppins text-lg text-[#0AD5A5]'>Accuracy Lavel</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-5xl font-[700]'>12+</p>
                        <p className='font-Poppins text-lg text-[#0AD5A5]'>Year Experience</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-5xl font-[700]'>15+</p>
                        <p className='font-Poppins text-lg text-[#0AD5A5]'>Trade Specialist</p>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-5xl font-[700]'>9000+</p>
                        <p className='font-Poppins text-lg text-[#0AD5A5]'>Happy Clients</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats