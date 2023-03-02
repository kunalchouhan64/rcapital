import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Customer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='h-auto py-9'>
                <div className='flex justify-center'>
                    <h2 className='font-Poppins text-3xl font-[600] text-[#224072]'>Customer Review</h2>
                </div>

                <div className="wrapperdiv lg:h-[70vh] lg:flex-row flex justify-center items-center gap-16 pt-5 mb:h-auto mb:flex-col">
                    {/* 1st div  */}
                    <div data-aos="fade-right" data-aos-duration="1500" className='lg:h-[29rem] lg:py-3 rounded-3xl bg-[#F5F7F6] w-80 px-6 flex flex-col justify-around mb:h-auto mb:py-3'>
                        <div className='flex justify-center flex-col items-center space-y-2'>
                            <img className='h-32 rounded-full' src="\Images\customer1.png" alt="Img" />
                            <p className='font-Poppins text-[#0AD5A5] font-[500]'>Panchit Sharma</p>
                        </div>

                        <div>
                            <span className='w-full flex justify-start'><img className='h-5' src="\Images\quote1.png" alt="" /></span>
                            <p className='font-Poppins text-center py-2 px-3'>We find Reddito Capital a professionally managed team, full of quality & positive in response, to each of our requests or query. While wishing the best of luck to them, I find them valuable for my investments.</p>
                            <span className='flex w-full justify-end'><img className='h-5' src="\Images\quote2.png" alt="" /></span>
                        </div>
                    </div>
                    {/* 2nd div  */}
                    <div data-aos="zoom-in" data-aos-duration="1500" className='lg:h-[29rem] lg:py-3 rounded-3xl bg-[#F5F7F6] w-80 px-6 flex flex-col justify-around mb:h-auto mb:py-3'>
                        <div className='flex justify-center flex-col items-center space-y-2'>
                            <img className='h-32 rounded-full' src="\Images\customer2.png" alt="Img" />
                            <p className='font-Poppins text-[#0AD5A5] font-[500]'> Monika Gupta</p>
                        </div>

                        <div>
                            <span className='w-full flex justify-start'><img className='h-5 ' src="\Images\quote1.png" alt="" /></span>
                            <p className='font-Poppins text-center py-2 px-3'>Very much satisfied with service, levels which are provided are accurate and you will be able to earn good profits. They were amazing and very helpful and provides timely instructions, experience was very good</p>
                            <span className='flex w-full justify-end'><img className='h-5' src="\Images\quote2.png" alt="" /></span>
                        </div>
                    </div>
                    {/* 3rd div  */}
                    <div data-aos="fade-left" data-aos-duration="1500" className='lg:h-[29rem] lg:py-3 rounded-3xl bg-[#F5F7F6] w-80 px-6 flex flex-col justify-around mb:h-auto mb:py-3'>
                        <div className='flex justify-center flex-col items-center space-y-2'>
                            <img className='h-32 rounded-full' src="\Images\customer3.png" alt="Img" />
                            <p className='font-Poppins text-[#0AD5A5] font-[500]'>Aniruddha Jain</p>
                        </div>

                        <div>
                            <span className='w-full flex justify-start'><img className='h-5' src="\Images\quote1.png" alt="" /></span>
                            <p className='font-Poppins text-center py-2 px-3'>Best Bank Nifty tips providing company. Well Informed and helpful staff, delivered great quality services and very good investment and trading ideas. Any query related to the market they solved easily.</p>
                            <span className='flex w-full justify-end'><img className='h-5' src="\Images\quote2.png" alt="" /></span>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Customer