import React, { useState } from 'react';
import Cart from './Cart';
import WishList from './WishList';

const Dashboard = () => {
  const [state,setState]=useState('cart')

  const dashboardHandler=(status)=>{
    setState(status);
  }
  
    return (
        <div>
         <div className='relative'>
          <div className='space-y-3 md:space-y-8 flex flex-col items-center p-20  bg-special-500 '>
            <div className='space-y-3 md:space-y-8'>
            <h1 className='text-center text-5xl max-w-5xl mx-auto text-white'>Dashboard</h1>
            <p className='text-center max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex gap-5 pt-10'>
            <button className={`btn w-32 border-none text-xl text-special-500 focus:bg-yellow-300 ${(state=='cart')? 'bg-yellow-400' : 'bg-white' }`} onClick={()=>dashboardHandler('cart')}>Cart</button>
            <button className={`btn w-32 border-none text-xl text-special-500 focus:bg-yellow-300 `} onClick={()=>dashboardHandler('wish')}>WishList</button>
            </div>
          </div>
          <div className=' w-11/12 md:w-11/12 mx-auto pt-5 md:pt-10'>
{ (state=='cart')? <Cart></Cart>:<WishList></WishList>}
          </div>
          
        </div>
        </div>
    );
};

export default Dashboard;