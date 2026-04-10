import React from 'react';
import logo from '../../assets/images/hero.png'
const Banner = () => {
    return (
        <div>
            <div className='flex justify-center text-center space-y-4 flex-col pt-20'>
                <h1 className='font-black text-7xl' >We Build <br />
                    Productive Apps
                </h1>
                <p className='text-lg leading-8'>
                    At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center mt-5'>
                    <img src={logo} className='max-w-200' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;