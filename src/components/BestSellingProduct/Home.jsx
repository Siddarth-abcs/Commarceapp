import React from 'react';
import BestSaleData from './BestSaledata.json';
import Hero from '../Hero/Hero';
import Frame684 from './Arrival/Frame684.svg';
import Frame685 from './Arrival/Frame685.svg';
import Frame686 from './Arrival/Frame686.svg';
import Frame687 from './Arrival/Frame687.svg';
import { Services } from '../Services/Services';


const Home = ({ addToCart }) => {
  
  return (
    <div>
      <Hero/>
      <div className='w-5/6 m-auto'>
        <div className='mt-24'>
          <h4 className='flex items-center text-red-600 text-[1.25rem]'>
            <div className='h-12 w-6 rounded-lg bg-red-400 mr-6'></div>
            <span>This Month</span>
          </h4>
          <h2 className='text-5xl font-bold my-6'>Best Selling Products</h2>
        </div>
        <div className='flex flex-wrap gap-6 mt-12'>
          {BestSaleData.map((product, index) => (
            <div key={index} className='w-[270px] h-[370px] text-[1.2rem] font-bold shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'>
              <img className='h-[270px] w-full' src={product.url} alt="" />
              <h3 className='my-2 py-2 ml-4'>{product.name}</h3>
              <p className='ml-4 pb-4'>
                <span>${product.price}</span><span className='line-through ml-4'>${product.discountprice}</span>
              </p>
              <button className='relative bottom-14 text-[1rem] left-40 bg-black hover:bg-slate-700 text-white rounded p-2 ' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className='w-5/6 m-auto'>
        <div>
          <div className='flex items-center text-xl gap-4 mt-20'>
            <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="40" rx="4" fill="#DB4444"/>
            </svg>
            Featured
          </div>
          <h2 className='text-6xl my-6 font-medium'>New Arrival</h2>
        </div>
        <div className='my- w-5/6 mt-12 mx-auto text-white grid grid-cols-4 grid-rows-2 gap-4'>
        <div className='bg-yellow-400 col-span-2 row-span-2 relative'>
            <img className='absolute inset-0 w-full h-full object-cover' src={Frame684} alt="" />
            <div className='absolute inset-0 z-10 h-full opacity-0 hover:opacity-100'>
              <div className='w-3/6 m-6 absolute bottom-1.5'>
              <h2 className='text-2xl font-medium'>PlayStation 5</h2>
              <p className='text-1xl py-1'>Black and White version of the PS5 coming out on sale.</p>
              </div>
            </div>
        </div>
        <div className='bg-blue-400 col-span-2 relative'>
            <img className='absolute inset-0 w-full h-full object-cover' src={Frame685} alt="" />
            <div className='absolute inset-0 z-10 h-full opacity-0 hover:opacity-100'>
              <div className='w-3/6 m-6 absolute bottom-1.5'>
              <h2 className='text-2xl font-medium'>Women’s Collections</h2>
              <p className='text-1xl py-1'>Featured woman collections that give you another vibe.</p>
              </div>
            </div>
        </div>
        <div className='bg-red-400 relative'>
            <img className='absolute inset-0 w-full h-full object-cover' src={Frame686} alt="" />
            <div className='absolute inset-0 z-10 h-full opacity-0 hover:opacity-100'>
              <div className='m-6 absolute bottom-1.5'>
              <h2 className='text-2xl font-medium'>Speakers</h2>
              <p className='text-1xl py-1'>Amazon wireless speakers</p>
              </div>
            </div>
        </div>
          <div className='bg-green-400 relative'>
          <img className='w-full h-full object-cover' src={Frame687} alt="" />
          <div className='absolute inset-0 z-10 h-full opacity-0 hover:opacity-100'>
              <div className='m-6 absolute bottom-1.5'>
              <h2 className='text-2xl font-medium'>Perfume</h2>
              <p className='text-1xl py-1'>GUCCI INTENSE OUD EDP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default Home;
