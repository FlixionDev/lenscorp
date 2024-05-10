import React from 'react'
import map from '../../assets/map.webp'
export default function GetInTouch() {
  return (
    <div className='flex justify-around items-center'>
        <div>
            <h1 className='text-7xl mt-10' style={{textAlign:'center'}}>Get in touch <br/> with us</h1>
            <p className='text-center text-2xl mt-5'>Send your enquiry now!</p>
            <div className='grid mt-10' style={{gridTemplateColumns:"65% 35%",backgroundColor:'#ededed',borderRadius:"30px"}}>

            <input type='email' className='p-4' style={{backgroundColor:"inherit",borderRadius:'30px',outline:"none"}} placeholder='Enter email address'/>
            <button style={{backgroundColor:"#272e5c",borderRadius:"30px"}} className='text-white p-4'>Request Demo</button>
            </div>
        </div>
        <div>
            <img src={map}/>
        </div>
    </div>
  )
}
