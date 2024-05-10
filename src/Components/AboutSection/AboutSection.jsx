import React from 'react'

export default function AboutSection() {
  return (
    <div>
        <div><h1 className='text-7xl mt-10' style={{textAlign:'center'}}>About Us</h1></div>
        <div  className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mx-9">
            <div style={{backgroundColor:'#e2f2ff'}} className="flex flex-col lg:flex-row justify-between p-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Welcome To LENS</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
                    <button style={{border:'1px solid',width:"20%",borderRadius:'7px'}} className='p-3 mb-3'>Learn More</button>
                </div>
                <div style={{width:'50%',height:"400px"}}>
                    <img style={{width:'100%',height:'100%'}} src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75" alt="A group of People" />
                </div>
            </div>
        </div>
    </div>
  )
}
