import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className='w-5/6 m-auto flex my-20'>
        <div className='w-2/6'>
            <div>
                <div className='flex items-center '>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#DB4444"/>
                    <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2 className='ml-4 text-2xl'>Call To Us</h2>
                </div>
                <p className='text-[1rem] my-4'>We are available 24/7, 7 days a week.</p>
                <p className='text-[1rem] my-4'>Phone: +8801611112222</p>
            </div>
            <hr className='my-6 bg-blue-400 h-1 w-4/6'/>
            <div>
            <div className='flex items-center '>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#DB4444"/>
                    <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2 className='ml-4 text-2xl'>Write To US</h2>
                </div>
                <p className='text-[1rem] my-4'>Fill out our form and we will contact <br /> you within 24 hours.</p>
                <p className='text-[1rem] my-4'>Emails: customer@exclusive.com</p>
                <p className='text-[1rem] my-4'>Emails: support@exclusive.com</p>
            </div>
        </div>
        <div className='w-4/6 flex flex-col justify-center items-center'>
        <div className='w-11/12 my-6'>
            <input className='h-12 w-[30%] rounded m-3' placeholder='       Your Name *' type="text" />
            <input className='h-12 w-[30%] rounded m-3' placeholder='       Your Email *' type="text" />
            <input className='h-12 w-[30%] rounded m-3' placeholder='       Your Phone *' type="text" />
        </div>
        <textarea rows="6" placeholder='    Your Message'
            class="appearance-none block w-11/12 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
        <div className='self-end'>        
            <Link to=''><button className='text-[1rem] mr-8 my-4 bg-red-600 hover:text-red-600 hover:bg-white hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] font-bold text-white rounded px-8 py-4'>Send Message</button></Link>
        </div>
        </div>
    </div>
  );
};
