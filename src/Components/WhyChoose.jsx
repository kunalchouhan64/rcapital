import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='h-auto py-10'>
                <h2 className='text-3xl text-center text-[#224072] font-Poppins font-semibold'>Why Us?</h2>
                {/* 1st wrapper container  */}
                <div className='wrapper py-12 flex justify-center items-center gap-12 mb:flex-col lg:flex-row'>
                    <div data-aos="fade-right" data-aos-duration="1500" className='lg:h-80 flex flex-col justify-start items-center rounded-[3rem] lg:w-80 bg-[#224072] bg-opacity-5 mb:h-60 mb:w-72'>
                        <img className='lg:h-44 mb:h-32' src="\Images\Why_Imgs\icon8.png" alt="img" />
                        <p className='lg:text-[1.6rem] text-[#224072] w-56 font-semibold font-Poppins text-center mb:text-xl'>Complete Support on Daily Basis</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='lg:h-80  flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#02B58B] bg-opacity-5 pt-4 mb:h-60 mb:w-72'>
                        <img className='lg:h-36 mb:h-32' src="\Images\Why_Imgs\icon4.png" alt="img" />
                        <p className='lg:text-[1.5rem] text-[#224072] w-60 font-semibold font-Poppins text-center mb:text-xl'>Catered 50000+ active clients during 8 Years of Experience</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='lg:h-80  flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#224072] bg-opacity-5 pt-4 mb:h-56 mb:w-72'>
                        <img className='lg:h-48 mb:h-32' src="\Images\Why_Imgs\icon2.png" alt="img" />
                        <p className='lg:text-[1.6rem] text-[#224072] w-56 font-semibold font-Poppins text-center mb:text-xl'>Risk Managed Calls</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#02B58B] bg-opacity-5 pt-3 mb:h-60 mb:w-72'>
                        <img className='lg:h-44 mb:h-32' src="\Images\Why_Imgs\icon7.png" alt="img" />
                        <p className='lg:text-[1.6rem] text-[#224072] w-64 font-semibold font-Poppins text-center pt-3 mb:text-xl'>SEBI Registered Registration Number</p>
                    </div>
                </div>
                {/* 2nd wrapper container  */}
                <div className='wrapper py-3 flex justify-center items-center gap-12 mb:flex-col lg:flex-row'>
                    <div data-aos="fade-right" data-aos-duration="1500" className='lg:h-80 flex flex-col justify-evenly items-center rounded-[3rem] lg:w-80 bg-[#02B58B] bg-opacity-5 mb:h-60 mb:w-72'>
                        <img className='lg:h-40 mb:h-32' src="\Images\Why_Imgs\icon6.png" alt="img" />
                        <p className='lg:text-[1.6rem] text-[#224072] w-64 font-semibold font-Poppins text-center mb:text-xl'>Award Winning Research and Advice</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='lg:h-80  flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#224072] bg-opacity-5 pt-6 mb:h-60 mb:w-72'>
                        <img className='lg:h-44 mb:h-32' src="\Images\Why_Imgs\icon5.png" alt="img" />
                        <p className='lg:text-[1.7rem] text-[#224072] w-64 font-semibold font-Poppins text-center pt-4 mb:text-xl'>Happy Customers</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className='lg:h-80  flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#02B58B] bg-opacity-5 pt-4 mb:h-60 mb:w-72'>
                        <img className='lg:h-44 mb:h-32' src="\Images\Why_Imgs\icon1.png" alt="img" />
                        <p className='lg:text-3xl text-[#224072] w-64 font-semibold font-Poppins text-center pt-2 mb:text-xl'>High Accuracy Rate{">"}90%</p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#224072] bg-opacity-5 pt-5 mb:h-60 mb:w-72'>
                        <img className='lg:h-44 mb:h-32' src="\Images\Why_Imgs\icon3.png" alt="img" />
                        <p className='lg:text-[1.6rem] text-[#224072] w-64 font-[600] font-Poppins text-center pt-3 mb:text-xl'>Top Professional Expert Advisor</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default WhyChoose