import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Started = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='started_bg lg:h-[28rem] bg-green-500 mb:h-auto'>
                <div className='h-full space-y-9 flex  items-center flex-col justify-center bg-[#02B58B] lg:bg-opacity-50 mb:py-5 lg:py-0 mb:bg-opacity-30 mb:px-5 lg:px-0'>
                    <p data-aos="zoom-out" data-aos-duration="1500" className='lg:text-2xl font-Poppins text-white mb:text-xl lg:text-start mb:text-center'>Make you earn with best and accurate bank nifty and intraday option tips</p>
                    <h2 data-aos="zoom-in" data-aos-duration="1500" className='lg:text-5xl font-semibold font-Poppins text-white lg:w-[35rem] mb:text-2xl mb:w-auto mb:text-center lg:text-start'>We Are With You Every Step
                        Get Started Easily</h2>
                    <div  data-aos="zoom-out" data-aos-duration="1500" >
                        <button className='py-2 px-10 rounded-3xl font-Poppins text-white bg-[#224072] font-[550] text-lg'> <Link to='/enquiry' >  Get Started Now!</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Started