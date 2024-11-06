import React, { useContext } from 'react';
import { DataContext } from '../Root/Root';
import WishItems from './WishItems';

const WishList = () => {
    const { data, updatedData, setUpdatedData,cartData, setCartData,wishlist, setWishlist }=useContext(DataContext);
    return (
        <div>
           
      
         
                <p className='text-lg font-semibold text-gray-700'>WishList</p>
          
           
     
        <div className='min-h-52'>
           {wishlist.map((wishitem,idx)=><WishItems key={idx} wishitem={wishitem}></WishItems>)}
        </div>
    </div>
    );
};

export default WishList;