import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <div class="flex flex-col items-center justify-center h-screen bg-white">
        <h2 class="text-3xl font-bold mb-6">JOIN POST<span className='text-blue-500'>it</span>.</h2>
        <p class="sm:text-lg text-xs mb-3 ">Enter your email address to create an account on Post<span className='text-blue-500'>it</span>.</p>
        <p class="text-lg mb-2">Username</p>
        <input type="text" placeholder="" class="w-72 h-12 px-4 mb-4 border-b border-gray-300" />
        <p class="text-lg mb-2">Your Email Address</p>
        <input type="text" placeholder="" class="w-72 h-12 px-4 mb-4 border-b border-gray-300" />
        <p class="text-lg mb-2">Password</p>
        <input type="password" placeholder="" class="w-72 h-12 px-4 mb-4 border-b border-gray-300" />
        <button class="w-72 h-12 bg-blue-500 text-white rounded-md mb-4">Continue</button>
        <div class="flex items-center">
          <p class="text-lg">Already have an account?</p>
          <Link to='/sign' class="ml-1 text-blue-500 mb-3">Sign in</Link>
        </div>
      </div>

    </div>
  )
}

export default Signup

