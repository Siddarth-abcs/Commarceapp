import React from 'react'
import SideImage from './Aboutdata/Side Image.svg'

export const Aboutstory = () => {
  return (
    <div className='w-5/6 m-auto my-16 flex items-center'> 
        <div className='w-3/6 mr-16'>
            <h1 className='text-6xl py-2'>Our Story</h1>
            <p className='text-[1.25rem] text-justify py-4'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className='text-[1.25rem] text-justify py-4'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
      
        <div className='w-3/6 bg-blue-400'>
            <img className='h-full w-full' src={SideImage} alt="" />
        </div>
    </div>
  )
}
