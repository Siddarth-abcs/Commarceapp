import React from 'react'
import Services2 from './Services2.svg'
import Services1 from './Services1.svg'
import Services0 from './Services.svg'


export const Services = () => {
  return (
    <div className='py-16 w-5/6 m-auto'>
        <div className='m-auto grid grid-cols-3 text-center'>
            <div className='flex flex-col'>
                <img className='h-16 my-2' src={Services2} alt="" />
                <h2 className='text-xl font-bold'>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $1400</p>
            </div>
            <div className='flex flex-col'>
                <img className='h-16 my-2' src={Services1} alt="" />
                <h2 className='text-xl font-bold'>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col'>
                <img className='h-16 my-2' src={Services0} alt="" />
                <h2 className='text-xl font-bold'>MONEY BACK GUARANTEE</h2>
                <p>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
  )
}
