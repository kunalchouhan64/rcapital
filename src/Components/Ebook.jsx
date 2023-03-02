import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ebook = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='e_book_bg lg:h-[23rem]  mb:h-[16rem]'>
                <div data-aos="fade-right" data-aos-duration="1500" className='h-full lg:flex flex-col lg:justify-center lg:items-end lg:pr-20 space-y-7 mb:flex mb:justify-center mb:items-center mb:bg-black mb:bg-opacity-50'>
                    <h2 className='font-Poppins text-white lg:text-5xl lg:w-[28rem] text-center mb:text-2xl mb:w-80'>Bank Nifty Option
                        Tips &  Strategies</h2>
                    <div className='w-[27rem] flex justify-center'>
                        <button className='py-3 rounded-[2.5rem] font-semibold px-8 font-Poppins text-white bg-[#02B58B]'>
                            <a href="https://drive.google.com/file/d/1sZ36SZpngWJEwpeM8CkWtwaykYn1w8-q/view" target='_blank' >
                                Download E-Book
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ebook