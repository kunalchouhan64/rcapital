import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicePackage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='h-auto mb:py-10 lg:py-2'>
                <div className='flex justify-center flex-col items-center'>
                    <h2 className='font-Poppins font-[1000] text-3xl text-[#224072]'>Service Package</h2>
                    <p className='font-Poppins'>PER MONTH</p>
                </div>
                {/* 1st div container  */}
                <div className="wrapper flex justify-evenly gap-2 py-10 mb:flex-col mb:items-center mb:gap-6 lg:flex-row lg:justify-evenly lg:gap-2 lg:py-10">

                    {/* 1 inner div  */}
                    <div data-aos="fade-right" data-aos-duration="1500" className='w-[26vw] h-auto flex flex-col items-center mb:w-[93vw] md:w-auto lg:w-[26vw]'>
                        <h3 className='py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center'>Equity Services</h3>
                        <div className='py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center'>
                            <h3 className='animate-bounce'>₹4,999 / Per Year</h3>
                            <p className='line-through font-Poppins font-extralight text-base'>₹7,999/-</p>
                        </div>
                        <div className='px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]'>
                            <div className=' flex flex-col justify-start space-y-7 px-4'>

                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>24/7 customer support.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Get 1-2 Calls on intraday basis through dedicated expert.</p>
                                <p className='flex space-x-2  justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Complete Resistance & Support on daily basis.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Proper follow up through SMS and Whatsapp.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>All important news and economy updates.</p>
                            </div>
                            <div className='w-full gap-5 py-2 flex justify-center'>
                                <Link to='/enquiry' >
                                    <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base mb:px-1 md:px-0'>
                                        Enquiry Now
                                    </button>
                                </Link>
                                <button className='py-2 px-4 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base mb:px-1'>
                                    <a href="https://wa.me/9909043263?text=" target='_blank'>  WhatsApp Now</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2nd inner div  */}
                    <div data-aos="zoom-in" data-aos-duration="1500" className='w-[26vw] flex flex-col items-center mb:w-[93vw] lg:w-[26vw]'>
                        <h3 className='py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center'>Options Services </h3>
                        <div className='py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center'>
                            <h3 className='animate-bounce'>₹4,999 / Per Year</h3>
                            <p className='line-through font-Poppins font-extralight text-base'>₹7,999/-</p>
                        </div>
                        <div className='px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]'>
                            <div className=' flex flex-col justify-start space-y-7 px-3'>

                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>24/7 customer support.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Get 1-2 Calls on intraday basis through dedicated expert.</p>
                                <p className='flex space-x-2  justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> Complete Resistance & Support on daily basis.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Proper follow up through SMS and Whatsapp.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>All important news and economy updates.</p>

                            </div>
                            <div className='w-full gap-5 py-2 flex justify-center'>
                                <Link to='/enquiry' >
                                    <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                        Enquiry Now
                                    </button>
                                </Link>
                                <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                    <a href="https://wa.me/9909043263?text=" target='_blank'>  WhatsApp Now</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 3rd inner div  */}

                    <div data-aos="fade-left" data-aos-duration="1500" className='w-[26vw] flex flex-col items-center mb:w-[93vw] lg:w-[26vw]'>
                        <h3 className='py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center'>Future Services </h3>
                        <div className='py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center'>
                            <h3 className='animate-bounce'>₹4,999 / Per Year</h3>
                            <p className='line-through font-Poppins font-extralight text-base'>₹7,999/-</p>
                        </div>
                        <div className='px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]'>
                            <div className=' flex flex-col justify-start space-y-7 px-3'>


                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>24/7 customer support.</p>
                                <p className='flex space-x-2  justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> All important news and economy updates.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> Proper follow up through SMS and Whatsapp.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> Complete Resistance & Support on daily basis.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>      Get 1-2 Calls on intraday basis through dedicated expert.</p>
                            </div>
                            <div className='w-full gap-5 py-2 flex justify-center'>
                                <Link to='/enquiry' >
                                    <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                        Enquiry Now
                                    </button>
                                </Link>
                                <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                    <a href="https://wa.me/9909043263?text=" target='_blank'>  WhatsApp Now</a>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* 2nd container  */}
                <div className="wrapper flex justify-center gap-16 py-10 mb:py-0 mb:flex-col mb:items-center mb:gap-6 lg:flex-row lg:py-10 lg:gap-16">

                    <div data-aos="fade-right" data-aos-duration="1500" className='w-[26vw] flex flex-col items-center mb:w-[93vw] lg:w-[26vw]'>
                        <h3 className='py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center'>Commodity Services</h3>
                        <div className='py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center'>
                            <h3 className='animate-bounce'>₹4,999 / Per Year</h3>
                            <p className='line-through font-Poppins font-extralight text-base'>₹7,999/-</p>
                        </div>
                        <div className='px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]'>
                            <div className=' flex flex-col justify-start space-y-7 px-3'>


                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>24/7 customer support.</p>
                                <p className='flex space-x-2  justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>All important news and economy updates.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> Proper follow up through SMS and Whatsapp.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> Complete Resistance & Support on daily basis.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> High Reward Ratio with Low Risk.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> All Segment Calls from NISM Certified.</p>
                            </div>
                            <div className='w-full gap-5 py-2 flex justify-center'>
                                <Link to='/enquiry' >
                                    <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                        Enquiry Now
                                    </button>
                                </Link>
                                <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                    <a href="https://wa.me/9909043263?text=" target='_blank'>  WhatsApp Now</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1500" className='w-[26vw] flex flex-col items-center mb:w-[93vw] lg:w-[26vw]'>
                        <h3 className='py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center'>ATP Services</h3>
                        <div className='py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center'>
                            <h3 className='animate-bounce'>₹4,999 / Per Year</h3>
                            <p className='line-through font-Poppins font-extralight text-base'>₹7,999/-</p>
                        </div>
                        <div className='px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]'>
                            <div className=' flex flex-col justify-start space-y-7 px-3'>


                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>24/7 customer support.</p>
                                <p className='flex space-x-2  justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span> All important news and economy updates.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Proper follow up through SMS and Whatsapp.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>Complete Resistance & Support on daily basis.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>      High Reward Ratio with Low Risk.</p>
                                <p className='flex space-x-2 justify-start items-center font-Poppins'> <span><img className='h-7 pr-2' src="\Images\Hero_Imgs\done.png" alt="" /></span>  All Segment Calls from NISM Certified.</p>
                            </div>
                            <div className='w-full gap-5 py-2 flex justify-center'>
                                <Link to='/enquiry' >
                                    <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                        Enquiry Now
                                    </button>
                                </Link>
                                <button className='py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base'>
                                    <a href="https://wa.me/9909043263?text=" target='_blank'>  WhatsApp Now</a>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}

export default ServicePackage