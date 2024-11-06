import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Root/Root';
import CartItems from './CartItems';
import { BsFillGiftFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Cart = () => {
    const { data, updatedData, setUpdatedData, cartData, setCartData, wishlist, setWishlist,totalCost,setTotalCost } = useContext(DataContext);
  
useEffect(()=>{
    const cost = cartData.reduce((accumulator,current)=>accumulator+current.price ,0);
    setTotalCost(cost)    
},[cartData])




const sortHandler =()=>{
    const sortedCart= cartData.sort((a,b)=> b.price-a.price);
    setCartData(sortedCart);

}

const[isVisible,setIsVisible]=useState(false);

const purchaseHandler=()=>{
        setIsVisible(true);
           
}
let navigate=useNavigate();
const closeModal=()=>{
    setIsVisible(false);
    setCartData([]);
    toast.success("Congratuation, Payment Done!")
    navigate('/');
}

    return (
        <div className={`${isVisible ? 'bg-gray-300' : 'bg-white'}`}>
           
            <div className='flex flex-col md:flex-row justify-between py-5 gap-5'>
                <div className='flex gap-2 md:gap-5 items-center flex-col md:flex-row justify-between bg-yellow-300 rounded-3xl border-2 border-special-500'>
                    <p className='text-2xl border-2 bg-special-500 px-10 py-3 rounded-3xl font-semibold text-white'>Cart</p>
                <div className='px-3'>
                <p className='text-sm'> Total Cost :$ <span className="font-semibold  text-special-500">{totalCost}</span>  </p>
                <p className='text-sm'>Products in Cart: <span className="font-semibold  text-special-500">{cartData.length}</span></p>
                </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                <button className= "btn w-32 bg-white text-special-500 focus:bg-special-500 focus:text-white border-2 border-special-500 " onClick={()=>sortHandler()}>SortBy Price</button>
                <button disabled={!cartData.length} className= "btn w-32 bg-white text-special-500  border-2 border-special-500 " onClick={()=>purchaseHandler()}>Purchase</button>
                </div>
            </div>
            <div className='relative min-h-96'>
                <div className={`${isVisible ? 'bg-gray-300' : 'bg-white'}`}>  {cartData.map((cartItem,idx)=><CartItems key={idx}  cartItem={cartItem}></CartItems>)}
                </div>
                <div className={` absolute top-10 left-[50%] -translate-x-1/2 w-80 mx-auto py-5 rounded-3xl bg-white ${isVisible ? 'flex' : 'hidden'} flex-col items-center gap-4 border-2 border-special-500 z-10`}>
                <BsFillGiftFill  className='text-5xl text-special-500' />
                <h2 className='text-center text-green-600'>Payment Successful!</h2>
                <h2 className='text-center'>Thanks for Purchasing.</h2>
                <h2 className='text-center'>Total Cost: ${totalCost}</h2>
                <button className='py-1 px-5 w-24 mx-auto border-2 rounded-3xl text-center' onClick={()=>closeModal()} >Close</button>
                </div>
             
            </div>
        </div>
    );
};

export default Cart;