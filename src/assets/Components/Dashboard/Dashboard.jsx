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
         <div className='relative border-red-500 border-4'>
          <div className='space-y-3 md:space-y-8 flex flex-col items-center p-20  bg-special-500 '>
            <h1 className='text-center text-5xl max-w-5xl mx-auto text-white'>Dashboard</h1>
            <p className='text-center max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex gap-5'>
            <button className={`btn w-32 border-none bg-white text-special-500 ${state==='cart'? 'bg-green-700 text-white' : 'bg-white' }`} onClick={()=>dashboardHandler('cart')}>Cart</button>
            <button className={`btn w-32 border-none bg-white text-special-500 ${state!=='cart'? 'bg-green-700 text-white' : 'bg-white' }`} onClick={()=>dashboardHandler('wish')}>WishList</button>
            </div>
          </div>
          <div className='h-60'>
{ (state=='cart')? <Cart></Cart>:<WishList></WishList>}
          </div>
          
        </div>
        </div>
    );
};

export default Dashboard;