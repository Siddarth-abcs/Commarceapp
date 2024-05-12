import React from 'react'
import Founder1 from './Aboutdata/Founder1.svg'
import Director from './Aboutdata/Director.svg'
import Designer from './Aboutdata/Designer.svg'
import Socialmedia from './Aboutdata/Socialmedia.svg'

export const Aboutfounder = () => {
  return (
    <div className='w-5/6 py-8 m-auto grid grid-cols-1 md:grid-cols-3 gap-24'>
        <div className='border-2'>
            <div className='bg-sky-200 pt-8 flex justify-center items-end'><img className='h-80' src={Founder1} alt="" /></div>
            <div className='m-8'>            
                <h2 className='text-4xl py-1'>Tom Cruise</h2>
                <p className='text-2xl'>Founder & Chairman</p>
                <img className='py-2' src={Socialmedia} alt="" /></div>
        </div>
        <div className='border-2'>
            <div className='bg-sky-200 pt-8 flex justify-center items-end'><img className='h-80' src={Director} alt="" /></div>
            <div className='m-8'>            
                <h2 className='text-4xl py-1'>Emma Watson</h2>
                <p className='text-2xl'>Managing Director</p>
                <img className='py-2' src={Socialmedia} alt="" /></div>
        </div>
        <div className='border-2'>
            <div className='bg-sky-200 pt-8 flex justify-center items-end'><img className='h-80' src={Designer} alt="" /></div>
            <div className='m-8'>            
                <h2 className='text-4xl py-1'>Will Smith</h2>
                <p className='text-2xl'>Product Designer</p>
                <img className='py-2' src={Socialmedia} alt="" /></div>
        </div>
    </div>
  )
}
