import React from 'react';
import bannerImage from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative border-red-500 border-4 mb-60'>
          <div className='space-y-3 md:space-y-8 flex flex-col items-center p-20 pb-60 bg-special-500 '>
            <h1 className='text-center text-5xl max-w-5xl mx-auto text-white'>Upgrade Your Tech Accessorise with Gadget Heaven Accessories</h1>
            <p className='text-center max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className='btn bg-white text-special-500'>Shop Now</button>
          </div>
          <div className='border-2 border-white rounded-lg absolute top-[60%] w-7/12 left-[20.8%]'>
            <div className='p-5'>
            <img src={bannerImage} className='rounded-lg shadow-lg' alt="" />
            </div>
          </div>
        </div>
    );
};

export default Banner;