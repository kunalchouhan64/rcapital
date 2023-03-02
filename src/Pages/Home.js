import React from 'react'
import Aboutus from '../Components/Aboutus'
import Customer from '../Components/Customer'
import Ebook from '../Components/Ebook'
import Enquiryform from '../Components/Enquiryform'
import Footer from '../Components/Footer'
import Growwprofit from '../Components/Growwprofit'
import Hero from '../Components/Hero'
import ServicePackage from '../Components/ServicePackage'
import Started from '../Components/Started'
import Stats from '../Components/Stats'
import WhyChoose from '../Components/WhyChoose'
import Livecalls from '../Components/Livecalls'

const Home = () => {
    return (
        <>
            <Hero />
            <ServicePackage />
            <Stats />
            <Aboutus />
            <WhyChoose />
            <Ebook />
            <Growwprofit />
            <Livecalls/>
            <Started />
            <Customer />
            <Enquiryform/>
            <Footer/>
        </>
    )
}

export default Home