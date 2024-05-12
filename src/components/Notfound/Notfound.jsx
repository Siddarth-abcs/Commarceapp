import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className='text-center mt-20'>
        <h2 className='font-bold text-8xl'>404 Not Found</h2>
        <p className='font-bold text-2xl my-4'>Your visited page not found. You may go home page.</p>
        <Link to='/'><button className='text-[1rem] my-4 left-40 bg-red-600 text-white rounded px-6 py-4 '>Back to home page</button>
        </Link>
    </div>
  )
}
