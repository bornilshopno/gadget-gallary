import { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { DataContext } from "../Root/Root";
import { toast } from "react-toastify";

const WishItems = ({wishitem}) => {
    const { data, updatedData, setUpdatedData, cartData, setCartData, wishlist, setWishlist } = useContext(DataContext);
    const {product_image, product_title, price,product_id,description}=wishitem;
    const removeFromWish=(wishitem)=>{
        let remaining= wishlist.filter(wishes=>wishes.product_id!==wishitem.product_id );
        setWishlist(remaining);
        toast.info('Gadget Removed from your Wishlist');
        


    }
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-10/12 mx-auto p-5 my-5 border-2 border-special-500 rounded-xl">
         <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-10">
            <img src={product_image} className="h-20 w-24" alt="" />
            <div>
                <h1 className="text-lg font-bold">{product_title}</h1>
                <h2 className="text-sm">{description}</h2>
                <h3 className="font-bold">Price : ${price}</h3>
            </div>
         </div>
         <div><button onClick={()=>removeFromWish(wishitem)}>
         <IoIosCloseCircleOutline className="text-4xl text-special-500" /></button></div>
        </div>
    );
};

export default WishItems;