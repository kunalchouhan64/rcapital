import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center py-8 space-y-5'>
                <h2 className='text-3xl text-[#224072] font-Poppins font-semibold'>About Us</h2>
                <div className='lg:px-36 space-y-5'>


                    <p className='text-lg font-Poppins text-center mb:text-base mb:px-5 lg:text-lg lg:px-0'>We are the most accurate stock market advisory services, we are basically a technology research firm that believes in trading.</p>
                    <p className='text-lg font-Poppins text-center mb:text-base mb:px-5 lg:text-lg lg:px-0'>Our Expert advisors give tips in index trading like BANKNIFTY and NIFTY, we are specialists in Banknifty, and nifty Option Advisory, and we have served 9,000+happy clients with more than 12 years of experience in the stock market.
                        We provide medium Risk, High-reward option trading tips.</p>
                </div>
                <div className='pt-3'>
                <Link to='/enquiry' >  <button className='rounded-3xl px-10 font-Poppins text-[#ffffff] font-[500] py-2 bg-[#02B58B] text-lg'>GET A FREE TRIAL</button></Link>

                </div>
            </div>
        </>
    )
}

export default Aboutus