import React, { useContext } from 'react';
import { DataContext } from '../Root/Root';
import WishItems from './WishItems';
import { Link } from 'react-router-dom';

const WishList = () => {
    const { data, updatedData, setUpdatedData, cartData, setCartData, wishlist, setWishlist } = useContext(DataContext);
    return (
        <div>
            <div className='flex gap-2 md:gap-5 items-center flex-col md:flex-row justify-between bg-yellow-300 rounded-3xl border-2 border-special-500 w-2/3 sm:w-1/2 mx-auto'>
                <p className='text-2xl border-2 bg-special-500 px-10 py-3 rounded-3xl font-semibold text-white'>WishList</p>
                <div className='px-5'>
                    <Link to="/"><p className='text-lg  text-special-500  hover:font-extrabold'> Expore More? </p></Link>
                    
                    <p className='text-lg'> In WishList: <span className="font-semibold  text-special-500">{wishlist.length}</span></p>
                </div>
            </div>
            <div className='min-h-52'>
                {wishlist.map((wishitem, idx) => <WishItems key={idx} wishitem={wishitem}></WishItems>)}
            </div>
        </div>
    );
};

export default WishList;