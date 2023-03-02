import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='lg:h-80 bg-[#224072] flex justify-around items-center mb:h-auto mb:flex-col mb:py-10 mb:space-y-8 mb:justify-start mb:items-center lg:py-0 lg:space-y-0 lg:justify-around lg:flex-row'>
                <div className="logo space-y-5">
                    <img className='h-32' src="\Images\footer_logo.png" alt="" />
                    <div>
                        <p className='font-Poppins text-white mb:text-center lg:text-start'>Connect With Us</p>
                        <div className='flex space-x-5 pt-3 mb:text-center mb:flex mb:justify-center lg:text-start lg:justify-start'>
                            <a href="https://wa.me/9909043263?text=" target='_blank'>
                                <img className='h-6' src="\Images\whatsapp.png" alt="" />
                            </a>
                            <a href="https://www.instagram.com/redditocapital/?hl=hi" target='_blank' > <img className='h-6' src="\Images\instagram.png" alt="" /></a>
                            <a href="https://twitter.com/CapitalLimite" target='_blank' >
                                <img className='h-6' src="\Images\twitter.png" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/redditocapital/?originalSubdomain=in" target='_blank' >
                                <img className='h-6' src="\Images\linkedin.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <p className='font-Raleway text-[#02B58B] text-2xl font-semibold mb:text-center lg:text-start'>Quick Links</p>
                    <div className='font-Poppins space-y-3 pt-3 text-white text-lg mb:text-center lg:flex lg:flex-col mb:flex mb:flex-col'>
                        <a href='https://redditocapital.com/about-us' target='_blank' >About Us</a>
                        <a href='https://redditocapital.com/contact' target='_blank'>Contact Us</a>
                        <a href='https://redditocapital.com/stock-cash-service' target='_blank' >Services </a>
                        <Link to='/enquiry'>Enquiry Form</Link>
                    </div>
                </div>
                <div className="links">
                    <p className='font-Raleway text-[#02B58B] text-2xl font-semibold mb:text-center lg:text-start'>Quick Links</p>
                    <div className='font-Poppins space-y-3 pt-3 text-white text-lg mb:text-center lg:text-start lg:flex lg:flex-col mb:flex mb:flex-col'>
                        <a href='https://redditocapital.com/stock-cash-service' target='_blank' >Equity Services
                        </a>
                        <a href='https://redditocapital.com/option-service' target='_blank' >Options Services
                        </a>
                        <a href='https://redditocapital.com/future-service' target='_blank' >Future Services
                        </a>
                        <a href='https://redditocapital.com/stock-cash-service' target='_blank' >Commodity Services
                        </a>
                        <a href='https://redditocapital.com/all-commodities-service' target='_blank' >ATP Services </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer