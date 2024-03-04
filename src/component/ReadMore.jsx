import React from 'react'
import psp from '../assets/images/psp.png'


function ReadMore() {
    return (
        <div>
            <div className='flex justify-around  flex-col gap-3 w-2/4 ml-24 mt-5'>
                <button className='bg-blue-500 w-36 text-white font-medium py-1 rounded'>Technology</button>
                <h1>The 20 Biggest Fintech Companies In Nigeria 2022</h1>
                <span className='flex items-center gap-3'>
                    <img src={psp} alt="" />
                    <p className='mt-3'>By<span className='font-medium'> Chizu Praise </span>-</p>
                    <p className='mt-3'>May 21, 2023</p>

                </span>
            </div>
            <div className="bg-gray-500 h-px w-full lg:w-11/12 mx-5 w-4/5 mx-4 lg:mx-9 mt-3 mb-8"></div>
        </div>


    )
}

export default ReadMore
