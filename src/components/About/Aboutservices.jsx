import React from 'react'
import About1 from './Aboutdata/About1.svg'
import About2 from './Aboutdata/About2.svg'
import About3 from './Aboutdata/About3.svg'
import About4 from './Aboutdata/About4.svg'


export const Aboutservices = () => {
  return (
    <div className='w-5/6 py-12 text-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col items-center justify-center hover:bg-red-600 hover:text-white py-8'>
            <img className='h-20 my-2' src={About1} alt="" />
            <h1 className='text-4xl font-bold'>10.5k</h1>
            <p>Sallers active our site</p>
        </div>
        <div className='flex flex-col items-center justify-center hover:bg-red-600 hover:text-white py-8'>
            <img className='h-20 my-2' src={About2} alt="" />
            <h1 className='text-4xl font-bold'>33k</h1>
            <p>Mopnthly Produduct Sale</p>
        </div>
        <div className='flex flex-col items-center justify-center hover:bg-red-600 hover:text-white py-8'>
            <img className='h-20 my-2' src={About3} alt="" />
            <h1 className='text-4xl font-bold'>45.5k</h1>
            <p>Customer active in our site</p>
        </div>
        <div className='flex flex-col items-center justify-center hover:bg-red-600 hover:text-white py-8'>
            <img className='h-20 my-2' src={About4} alt="" />
            <h1 className='text-4xl font-bold'>25k</h1>
            <p>Anual gross sale in our site</p>
        </div>
    </div>
  )
}
