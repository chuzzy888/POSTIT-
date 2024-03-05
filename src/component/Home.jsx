import React from 'react';
import img1 from '../assets/images/hero.png';
import img2 from '../assets/images/rct1.png'
import img3 from '../assets/images/rct2.png'
import img4 from '../assets/images/rct3.png'
import img5 from '../assets/images/rct4.png'
import img6 from '../assets/images/txt.png'
import Footer from './Footer';

function Home() {
    return (
        <>
            <div className="lg:gap-4 bg-cover bg-right lg:bg-center h-[500px] flex justify-center gap-[30px] flex-col " style={{ backgroundImage: `url(${img1})` }}>
                <div className='lg:ml-14 lg:justify-start lg:flex container'>
                    <h1 className='lg:text-8xl font-medium text-center'>Stay Curious .</h1>
                </div>

                <div className='list-none lg:ml-14 lg:flex lg:justify-start flex justify-center text-center container flex-col ml-9'>
                    <li className='lg:text-xl lg:text-left'> Error iure est adipisci consequatur ducimus ptates natus ipsa vero,</li>
                    <li className='lg:text-xl lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
                    <li className='lg:text-xl lg:text-left'>laboriosam, doloremque, quod enim mollitia sequi.</li>
                </div>

                <div className='lg:ml-14 lg:flex lg:justify-start flex justify-center container'>
                    <button className='bg-blue-400 font-medium text-white px-3 py-1.5 rounded hover:bg-blue-300'>Get Started</button>

                </div>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12 mr-12 mt-16 mb-16  lg:border border-gray5700 rounded-lg container">
                <div className=" p-4 lg:flex lg:flex-row lg:gap-4 flex flex-col items-center">
                    <img src={img4} alt="Card 1" className="w-full object-cover mb-4" />
                    <div className="flex flex-col space-y-4 lg:mb-3">
                        <button className="bg-yellow-800 text-white font-medium py-1 px-1 w-24 rounded">Lifestyle</button>
                        <p className="text-gray-800 lg:text-sm text-xs">The 20 Biggest Fashion Companies In Nigeria 2022</p>
                    </div>
                </div>

                <div className=" p-4 lg:flex lg:flex-row lg:gap-4 flex flex-col items-center">
                    <img src={img3} alt="Card 2" className="w-full object-cover mb-4" />
                    <div className="flex flex-col space-y-4 lg:mb-3">
                        <button className="bg-green-500 text-white font-medium  py-1 px-1 w-24  rounded">Nature</button>
                        <p className="text-gray-800 lg:text-sm text-xs">The 20 Biggest Agro Companies In Nigeria 2022</p>
                    </div>
                </div>

                <div className=" p-4 lg:flex lg:flex-row lg:gap-4 flex flex-col items-center">
                    <img src={img2} alt="Card 3" className="w-full object-cover mb-4" />
                    <div className="flex flex-col space-y-4 lg:mb-3">
                        <button className="bg-blue-500 text-white font-medium  py-1 px-1 w-24  rounded">Technology</button>
                        <p className="text-gray-800 lg:text-sm text-xs">The 20 Biggest Fintech Companies In Nigeria 2022</p>
                    </div>
                </div>
            </div>


            <div className="  bg-green-300 p-4 flex justify-center items-center space-y-4 flex-col ml-12 mr-12 mt-16 mb-16" style={{ backgroundImage: `url(${img5})`, height: "250px" }}>
                <img src={img6} alt="" />
                <p className='lg:text-xl text-xs'>Do you want to write or discover stories from writers on any topic?</p>
                <div class="flex items-center lg:flex-row md:flex-row flex-col gap-3">
                    <input type="text" class="lg:h-10 h-8 lg:w-72 w-48 border border-gray-300  px-4 py-2 bg-gray-50 text-sm" placeholder="Enter email address..." />
                    <button class="lg:h-10 px-2 h-8 bg-blue-400 w-20 hover:bg-blue-700 text-white text-xs  lg:text-xs ">Get Started</button>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Home;

