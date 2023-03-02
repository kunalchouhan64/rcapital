import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    const notify = () => toast("Thank You...You Response Has Been Submitted!!");

    const [Data, SetData] = useState({

        fName: "",
        Email: "",
        Number: "",
        Segment: ""

    })
    const { fName, Email, Number, Segment } = Data
    const handleInput = (e) => {
        SetData({ ...Data, [e.target.name]: e.target.value })
    }

    const SubmitHandle = async (event) => {
        event.preventDefault();

        try {
            if (fName === '') {
                alert('Please Enter Name')
            }
            else if (Email === '') {
                alert('Please Enter Email')
            }
            else if (Number === '') {
                alert('Please Enter Number')
            }
            else if (Segment === '') {
                alert('Please Enter City')
            }
            else {
                const response = await fetch('https://v1.nocodeapi.com/reddito/google_sheets/gWWyLZFCoBeQjWNj?tabId=Reddito_Capital_Data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[fName, Email, Number, Segment, new Date().toLocaleString()]])
                });
                await response.json()
                SetData({ ...Data, fName: '', Email: '', Number: '', State: '' })
                // alert('Thank You So Much...You Response Has Been Submitted.')
                notify()
            }

        } catch (err) {
            console.log(err)

        }
    }

    return (
        <>
            <section className='h-[110vh] lg:px-10 flex justify-between  items-center mb:h-auto mb:flex-col mb:items-center mb:justify-center mb:py-5 mb:px-2 lg:h-[100vh] lg:flex-row lg:justify-between lg:py-0'>
                <div className='h-[70vh] w-auto flex flex-col justify-center mb:h-auto mb:space-y-10 lg:space-y-4 lg:h-[75vh]'>
                    <div className=' lg:pl-10'> <Link to='/' > <img className='h-32 mb:h-16 lg:h-28' src="\Images\Hero_Imgs\hero_logo.png" alt="" /></Link></div>
                    <div className="text lg:space-y-12 lg:pt-12 lg:pl-10 mb:space-y-3 ">
                        <p className='font-Poppins lg:text-[1.8rem] font-semibold w-[30rem] text-[#000000] mb:text-lg mb:w-[20rem] lg:w-[30rem] leading-5'>India's Most Accurate Stock Market Advisory Service Provider.</p>
                        <p className='lg:text-[4.5rem] font-Poppins font-bold text-[#224072] mb:text-4xl md:text-sm md:w-[40rem]'>Reddito Capital</p>
                        <p className='font-Poppins text-lg'>Index Option ( Bank | Nifty ) Specialist.</p>

                        <div className='space-x-4 mb:flex'>
                            <Link to='/enquiry' >
                                <button className='lg:py-[0.7rem] px-4 mb:py-3 mb:px-2 bg-[#02B58B] rounded-3xl font-Poppins text-white font-[500] mb:text-sm  lg:text-lg'>Send Enquiry</button>
                            </Link>

                            <button className='lg:py-[0.7rem] px-4 mb:px-2 bg-[#02B58B] rounded-3xl font-Poppins text-white font-[500] mb:text-sm  mb:py-3 lg:text-lg'> <a href="https://wa.me/9909043263?text=" target='_blank'> WhatsApp Now</a></button></div>
                    </div>
                </div>
                <div className='h[70vh] heroimg w-[45vw] lg:pt-0 hauto wauto bg-cyan400 mb:h-auto mb:w-full mb:pt-5 lg:h-[90vh] lg:w-[45vw] lg:flex lg:justify-center'>
                    <ToastContainer />
                    <form onSubmit={SubmitHandle}
                        method="POST" className='h-full lg:h-[92vh] lg:w-[35vw] rounded-3xl bg-[#224072] bgopacity-75 flex items-center flex-col justify-center space-y-5 mb:py-4 lg:py-5 md:h-[100vh]'>
                        <div className='flex justify-center items-center flex-col space-y-2 mb:flex mb:justify-center mb:items-center mb:py-2 mb:px-3 mb:text-center'>
                            <h2 className='font-Poppins  md:text-xl lg:text-2xl font-semibold text-white mb:text-center mb:text-xl'>Register For Free Trail: 5-7 Days</h2>
                            <h3 className='font-Poppins lg:text-lg font-semibold text-white mb:text-lg mb:w-auto animate-bounce'>Earn Upto Rs 15000 every week </h3>
                            {/* <h4 className='font-Poppins lg:text-lg text-white mb:text-base'>We specialise in Intraday markets. </h4> */}
                        </div>
                        <p className='font-Poppins text-white bg-black p-2 bg-opacity-50 rounded-xl'>SEBI Registration : <span className='font-Poppins font-semibold'>INAO00013040</span> </p>
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg  lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-8 mb:w-auto' name="fName" value={Data.fName} onChange={handleInput} required id="" placeholder='Your Name' />
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-8 mb:w-auto' name="Email" value={Data.Email} onChange={handleInput} required id="" placeholder='Your Email' />
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-8 mb:w-auto' name="Number" value={Data.Number} onChange={handleInput} required id="" placeholder='Your Number' />
                        <select name="Segment" required id="Segment" className="font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none  border-[#224072] mb:py-0 mb:px-6 mb:w-72 mb:text-base" value={Data.Segment} onChange={handleInput} placeholder='Choose Segment'>

                            <option value="Select Your Segment">Select Your Segment</option>
                            <option value="Stock Services - Cash, Future, Option">Stock Services - Cash, Future, Option</option>
                            <option value="Nifty/Bank Nifty Services - Option Future">Nifty/Bank Nifty Services - Option Future</option>
                            <option value="Advance Trading Plan (ATP) Services">Advance Trading Plan (ATP) Services</option>
                            <option value="Commodity Services">Commodity Services</option>
                        </select>
                        <p className='font-Poppins text-white text-base text-center px-4 lg:w-[28rem] md:text-base'> <span className='font-semibold'> Reddito Capital</span> gives you access to highly accurate and profitable trade recommendations.
                            WE COVER EQUITY, NIFTY, BANK NIFTY.
                        </p>

                        <div className='flex justify-center items-center'>
                            <button type='submit' onSubmit={SubmitHandle} onClick={SubmitHandle} className='py-2 px-10 bg-[#02B58B] font-[500] rounded-3xl font-Poppins text-black text-xl border-2 border-white'>Submit</button>

                        </div>
                    </form>
                    {/* <img className='lg:h-[37rem] lg:w-[40vw] mb:h-auto mb:w-full' src="\Images\Hero_Imgs\hero_img.png" alt="" /> */}

                </div>
            </section>


        </>
    )
}

export default Hero