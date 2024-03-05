import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function MyStories() {
    return (
        <div>

            <div className='flex justify-between ml-20 mr-20 items-center mt-5 flex-col lg:flex-row  container'>
                <div className='flex flex-col gap-5 lg:items-start  container'>
                    <h1 className='text-center lg:text-left'>My Stories</h1>
                    <div className='flex gap-5 lg:text-2xl justify-center lg:justify-start'>
                        <p className='font-medium'>All</p>
                        <p className='text-gray-600'>Drafts</p>
                        <p className='text-gray-600'>Published</p>
                    </div>
                </div>
                <div >
                    <Link to="/create">
                        <button className='bg-black text-white lg:p-2 lg:px-3 lg:w-28 rounded p-1 px-2 text-xs lg:text-sm'>Write Story</button>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-500 h-px  lg:w-11/12 mx-5 w-4/5 mx-4 lg:mx-9 mt-3 mb-8"></div>


            <div className='flex justify-between items-center mb-2 flex-col lg:flex-row  container'>
                <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:items-start'>
                    <h1 className='text-center lg:text-xl text-sm'>The 20 Biggest Fintech Companies In Nigeria 2022</h1>
                    <div>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....</p>
                    </div>
                    <p className='italic px-4 lg:px-0'>Published</p>
                </div>
                <div className='flex gap-3 mb-40 justify-center lg:justify-end'>
                    <Link to="/update">
                        <button className='bg-blue-500 p-1 text-white px-2 text-sm rounded'>Edit Post</button>
                    </Link>
                    <button className='border-1 border-blue-100 hover:bg-red-800 hover:text-white p-1 text-blue-500 px-2 text-sm rounded'>Delete</button>
                </div>
            </div>

            <div className='flex justify-between items-center mb-2 flex-col lg:flex-row  container'>
                <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:items-start'>
                    <h1 className=' text-center lg:text-xl text-sm'>The 20 Biggest Fintech Companies In Nigeria 2022</h1>
                    <div>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....</p>
                    </div>
                    <p className='italic px-4 lg:px-0'>Drafts</p>
                </div>
                <div className='flex gap-3 mb-40 justify-center lg:justify-end'>
                    <Link to="/update">
                        <button className='bg-blue-500 p-1 text-white px-2 text-sm rounded'>Edit Post</button>
                    </Link>
                    <button className='border-1 border-blue-100 hover:bg-red-800 hover:text-white p-1 text-blue-500 px-2 text-sm rounded'>Delete</button>
                </div>
            </div>

            <div className='flex justify-between items-center mb-2 flex-col lg:flex-row  container'>
                <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:items-start'>
                    <h1 className=' text-center lg:text-xl text-sm'>The 20 Biggest Fintech Companies In Nigeria 2022</h1>
                    <div>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....</p>
                    </div>
                    <p className='italic px-4 lg:px-0'>Published</p>
                </div>
                <div className='flex gap-3 mb-40 justify-center lg:justify-end'>
                    <Link to="/update">
                        <button className='bg-blue-500 p-1 text-white px-2 text-sm rounded'>Edit Post</button>
                    </Link>
                    <button className='border-1 border-blue-100 hover:bg-red-800 hover:text-white p-1 text-blue-500 px-2 text-sm rounded'>Delete</button>
                </div>
            </div>

            <div className='flex justify-between items-center mb-2 flex-col lg:flex-row  container'>
                <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:items-start'>
                    <h1 className=' text-center lg:text-xl text-sm'>The 20 Biggest Fintech Companies In Nigeria 2022</h1>
                    <div>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, constur adipisjj que ve....</p>
                    </div>
                    <p className='italic px-4 lg:px-0'>Drafts</p>
                </div>
                <div className='flex gap-3 mb-40 justify-center lg:justify-end'>
                    <Link to="/update">
                        <button className='bg-blue-500 p-1 text-white px-2 text-sm rounded'>Edit Post</button>
                    </Link>
                    <button className='border-1 border-blue-100 hover:bg-red-800 hover:text-white p-1 text-blue-500 px-2 text-sm rounded'>Delete</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MyStories
