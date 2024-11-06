import React from 'react';
import bannerImage from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative mb-60'>
          <div className='space-y-3 md:space-y-8 flex flex-col items-center py-5 md:py-20 pb-36 md:pb-60 bg-special-500 '>
            <h1 className='text-center text-5xl max-w-5xl mx-auto text-white'>Upgrade Your Tech Accessorise with Gadget Heaven Accessories</h1>
            <p className='text-center max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to='/dashboard'>
            <button className='btn bg-white text-special-500'>Shop Now</button></Link>
          </div>
          <div className='border-2 border-white rounded-lg absolute btm-0 -translate-y-1/2 w-10/12 md:w-7/12 left-[8%] md:left-[20.8%]'>
            <div className='p-5'>
            <img src={bannerImage} className='rounded-lg shadow-lg' alt="" />
            </div>
          </div>
        </div>
    );
};

export default Banner;