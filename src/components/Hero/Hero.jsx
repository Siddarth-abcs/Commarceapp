import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import Applephone from './Applephone.svg';
import Applelogo from'./Applelogo.svg';
import RightArrow from'./icons arrow-right.svg';
import Pods from './Pods.jpg';
import Bunny from './Bunny.png'
import Phone from './Phone.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96"
      >
      <SwiperSlide className='bg-black text-white'>
            <div className='grid grid-cols-2 mt-auto'>
                {/* Text Part */}
                <div className='w-4/6'>
                    <h4 className='flex items-center'><span className='mr-4'><img src={Applelogo} alt="" /></span><span>iPhone 14 Series</span></h4>
                    <h1 className='text-5xl text-left font-bold my-8'>Up to 10% off Voucher</h1>
                    <button className='text-2xl flex items-center justify-center'><span className='border-b-2'>Shop Now</span><span><img className='text-white mt-1 ml-2 font-light' src={RightArrow} alt="" /></span></button>
                </div>
                {/* Image Part */}
                <div>
                    <img src={Applephone} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-6/6 h-96' src={Pods} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-6/6 h-96' src={Bunny} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-6/6 h-96' src={Phone} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
