import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import image1 from '../../assets/1.webp'
import AboutSection from '../AboutSection/AboutSection'
import FAQ from '../Faq/Faq'
import GetInTouch from '../GetInTouch/GetInTouch'
export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className='relative text-center' style={{ zIndex: '-1' }}>
                <img className='w-full' style={{ minHeight: '600px', maxHeight: '100vh', zIndex: '-1' }} src={image1} />
                <div className='absolute top-1/4 left-24'>
                    <h1 className='text-6xl'>We are at the <br /> forefront of AI</h1>
                    <p className='text-base p-6'>From Conserving Wildlife to Automatically<br /> Generating Caricatures– <strong>We Do It All</strong> </p>
                    <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>

            <AboutSection />
            <div style={{ backgroundColor: "#272e5c" }} className='text-white p-10'>
                <h1 className='text-center text-5xl'>By the numbers</h1>
                <div className='grid justify-center gap-8 mt-8' style={{ gridTemplateColumns: "25% 25% 25%" }}>
                    <div className='flex justify-center' style={{ borderRight: "1px solid white" }}>
                        <div className='m-auto'>
                            <strong className='text-4xl'>15<span style={{ color: '#0091ff', fontWeight: "lighter" }}>+</span></strong>
                            <p className='text-lg'>Solutions for<br /> Global crises</p>
                        </div>
                    </div>
                    <div className='flex justify-center' style={{ borderRight: "1px solid white" }}>
                        <div className='m-auto'>
                            <strong className='text-4xl'>10<span style={{ color: '#0091ff', fontWeight: "lighter" }}>+</span></strong>
                            <p className='text-lg'>University<br /> Collaborations</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='m-auto'>
                            <strong className='text-4xl'>25<span style={{ color: '#0091ff', fontWeight: "lighter" }}>+</span></strong>
                            <p className='text-lg'>Employees <br />Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-14'>
                <FAQ />
            </div>

            <div>
                <GetInTouch />
            </div>
            <Footer />
        </div>
    )
}
