import React from 'react'
import puzzle from '../assets/images/puzzle.png'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'

function Stories() {
  return (
    <div>

      <div className='flex flex-col lg:flex-row justify-around items-center bg-gray-200 p-8'>
        <div className='flex flex-col lg:w-1/2'>
          <h1 className='text-center lg:text-left'>Welcome Maria</h1>
          <p className='text-center lg:text-left'>Lorem ipsum dolor sit ameetur adipiscing elit. Cocteturegestas <br />massa velit aliquam. Molestim bibendum  hnt ipsum <br />orci, platea aliquam id ut.</p>
          <div className='flex justify-center items-center  mt-4 lg:mt-0'>
            <Link to='/mystories'>
              <button className='bg-blue-500 text-white px-4 py-2 mr-4'>My Stories</button>
            </Link>
            <Link to='/myfeed'>
              <button className='border-4 border-blue-100 text-blue-500 px-4 py-2 hover:bg-blue-300 hover:text-white'>Go to Feed</button>
            </Link>
          </div>
        </div>
        <div className='mt-4 lg:mt-0'>
          <img src={puzzle} alt="" className='w-full lg:w-auto' />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Stories

