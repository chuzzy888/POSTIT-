import React from 'react'
import { Link } from 'react-router-dom';

function Sign() {
  return (
    <div>
      <div class="flex flex-col items-center justify-center h-screen bg-white">
        <h2 class="text-3xl font-bold mb-12">Welcome Back</h2>
        <p class="text-lg mb-2">Your Email Address</p>
        <input type="text" placeholder="" class="w-72 h-12 px-4 mb-4 border-b border-gray-300" />
        <p class="text-lg mb-2">Password</p>
        <input type="password" placeholder="" class="w-72 h-12 px-4 mb-4 border-b border-gray-300" />
        <button class="w-72 h-12 bg-blue-500 text-white rounded-md mb-4">Continue</button>
        <div class="flex items-center">
          <p class="text-lg">No account?</p>
          <Link to='/signup' class="ml-1 text-blue-500 mb-3">Sign Up</Link>
        </div>
      </div>

    </div>
  )
}

export default Sign

