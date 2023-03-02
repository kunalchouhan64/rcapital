import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';

const Enquiryform = () => {

    useEffect(() => {
        AOS.init();
        

    }, [])

    const notify = () => toast("Thank You...You Response Has Been Submitted!!");

    const [Data, SetData] = useState({

        fName: "",
        lName: "",
        Email: "",
        Number: "",
        State: "",
        Segment: ""

    })
    const { fName, lName, Email, Number, State, Segment } = Data
    const handleInput = (e) => {
        SetData({ ...Data, [e.target.name]: e.target.value })
    }

    const SubmitHandle = async (event) => {
        event.preventDefault();

        try {
            if (fName === '') {
                alert('Please Enter Name')
            }
            if (lName === '') {
                alert('Please Enter Name')
            }
            else if (Email === '') {
                alert('Please Enter Email')
            }
            else if (Number === '') {
                alert('Please Enter Number')
            }
            else if (State === '') {
                alert('Please Enter City')
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
                    body: JSON.stringify([[fName, lName, Email, Number, State, Segment, new Date().toLocaleString()]])
                });
                await response.json()
                SetData({ ...Data, fName: '', lName: '', Email: '', Number: '', State: '', State: '' })
                // alert('Thank You So Much...You Response Has Been Submitted.')
                notify()
            }

        } catch (err) {
            console.log(err)

        }
    }



    return (
        <>
            <div className='lg:h-[22rem] bg-[#224072] bg-opacity-10 flex justify-center items-center flex-col mb:h-auto mb:py-5 lg:py-0'>
                <div><h2 className='font-Poppins text-3xl font-semibold text-[#224072]'>Enquiry Form</h2></div>
                <ToastContainer />
                <form onSubmit={SubmitHandle}
                    method="POST" className=' lg:h-52 flex flex-col justify-center gap-9 items-center mb:h-auto mb:py-10 mb:items-center mb:justify-center mb:w-auto lg:py-0'>
                    {/* 1st form div  */}
                    <div data-aos="fade-right" data-aos-duration="1500" className='flex lg:space-x-14 lg:flex-row mb:flex mb:flex-col mb:items-center mb:justify-center mb:space-y-7 mb:space-x-0 lg:space-y-0'>
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]' name="fName" value={Data.fName} onChange={handleInput} required id="" placeholder='First Name' />
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]' name="lName" value={Data.lName} onChange={handleInput} id="" placeholder='Last Name' />
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]' name="Number" value={Data.Number} onChange={handleInput} required id="" placeholder='Mobile Number' />

                    </div>
                    {/* 2nd form div  */}
                    <div data-aos="fade-left" data-aos-duration="1500" className='flex lg:space-x-14 mb:flex mb:flex-col mb:space-x-0 mb:space-y-7 lg:flex-row lg:space-y-0'>
                        <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none  border-[#224072]' name="Email" value={Data.Email} onChange={handleInput} required id="" placeholder='Your Email' />
                        <select name="State" value={Data.State} onChange={handleInput} required id="state" className="font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none  border-[#224072]" placeholder='Your State'>
                            <option>Your State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>

                        <select name="Segment" value={Data.Segment} onChange={handleInput} required id="Segment" className="font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none  border-[#224072]" placeholder='Choose Segment'>

                            <option value="Select Your Segment">Select Your Segment</option>
                            <option value="Stock Services - Cash, Future, Option">Stock Services - Cash, Future, Option</option>
                            <option value="Nifty/Bank Nifty Services - Option Future">Nifty/Bank Nifty Services - Option Future</option>
                            <option value="Advance Trading Plan (ATP) Services">Advance Trading Plan (ATP) Services</option>
                            <option value="Commodity Services">Commodity Services</option>
                        </select>

                        {/* <input type="text" className='font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]' name="Segment" value={Data.Segment} onChange={handleInput} id="" placeholder='Segment' /> */}

                    </div>
                </form>
                <div className='flex justify-center items-center'>
                    <button data-aos="zoom-in" data-aos-duration="1500" type='submit' onSubmit={SubmitHandle} onClick={SubmitHandle} className='py-2 px-10 bg-[#224072] font-[500] rounded-3xl font-Poppins text-white text-xl'>Submit</button>

                </div>
            </div>
        </>
    )
}

export default Enquiryform