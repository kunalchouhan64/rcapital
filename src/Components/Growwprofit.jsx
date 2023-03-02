import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Growwprofit = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='lg:h-96 flex justify-around items-center mb:h-auto mb:flex-col-reverse mb:py-7 mb:px-5 lg:flex-row'>
                <div data-aos="fade-right" data-aos-duration="1500" className="text space-y-6 mb:px-5 lg:px-0">
                    <h2 className='font-Poppins lg:w-[32rem] lg:text-4xl font-semibold text-[#224072] mb:text-2xl mb:w-auto'>Grow Your Profit with our
                        Bank Nifty Advisory Services</h2>
                    <p className='font-Poppins lg:text-xl lg:w-[32rem] mb:w-auto mb:text-base'>Get reliable & accurate stock market trading tips with best research and telephonic support in India.</p>
                      <button className='py-2 px-10 rounded-3xl bg-[#02B58B] text-white font-Poppins font-[500] text-xl'> <Link to='/enquiry' >  Get Free Trial</Link> </button>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className="img mb:pb-5 lg:pb-0"> <img className='lg:h-[20rem] mb:h-auto' src="\Images\free_trial.png" alt="" /></div>
            </div>
        </>
    )
}

export default Growwprofit