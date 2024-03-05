import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



function Footer() {
    return (
        <div className='bg-current '>
            <div className='flex lg:justify-around gap-8 lg:items-center lg:flex-row justify-around container px-4 flex-col '>
                <div className='text-white lg:mt-5 lg:mb-5 mb-3 mt-5'>
                    <p className='text-white font-medium text-lg'>About Post<span className='text-blue-500'>it</span>.</p>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Tincidunt id sem vel quis in turpis sit eget pellentesque.<br></br> Nunc etiicies in rhoncus, rhoncus in arcu.<br></br> Tincidunt neque fusce vitaenisi aliquet.<br></br> que maeae tortoere necsem commodo ac.</p>
                </div>
                <div className='text-white lg:mt-5 lg:mb-5 mb-3'>
                    <p className='font-bold'>Quick Menu</p>
                    <p>Home</p>
                    <p>Stories</p>
                    <p>Trending Stories</p>
                    <p>Popular Stories</p>
                </div>
                <div className='text-white lg:mt-5 lg:mb-5 mb-3'>
                    <p>Sign Up</p>
                    <p>Log In</p>
                    <p>Contact Us</p>
                </div>
                <div className='text-white mt-5 mb-5 flex  flex-col'>
                    <p>Subscribe to our newsletter</p>
                    <div class="flex items-center lg:justify-end">
                        <div class="relative mr-2 mb-5">
                            <input type="text" class="h-10 lg:w-96 w-64 text-xs border border-gray-300 rounded-l-lg px-4 py-2 bg-gray-50" placeholder="Email address..." />
                            <button class="mr-3 mb-1 mt-1 absolute inset-y-0 right-0 bg-blue-400 hover:bg-blue-700 text-white text-sm px-3 flex items-center">
                                Subscribe
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L11.586 10l-2.707 2.707a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-gray-500 h-px  lg:w-11/12 mx-5 w-4/5 mx-4 lg:mx-9 mt-3 mb-8"></div>

            <div className='text-white flex justify-end items-center space-x-5 mr-6 lg:mt-5 '>
                <p>Terms and Policy</p>
                <p>
                    <FaTwitter />

                </p>
                <p>
                    <FaFacebookF />

                </p>
                <p>
                    <FaLinkedinIn />

                </p>
            </div>

        </div>
    )
}

export default Footer




