import { Link, useLoaderData } from "react-router-dom";
import { RiStarSLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const ProductDetail = () => {
    const product = useLoaderData();
    const { data, updatedData, setUpdatedData, cartData, setCartData, wishlist, setWishlist } = useContext(DataContext);

    const { product_title, price, availability, description, specification, rating, product_image } = product;
    let specificationKeys = Object.keys(specification)

    
    const cartHandler = (gadget) => {
        let newCartData = [...cartData, gadget];
        setCartData(newCartData);
        toast.success("Gadget Added to your Cart!");
        
    }

    const[wished,setWished]=useState(false);

    const wishlistHandler = (gadget) => {
        setWishlist([...wishlist, gadget]);
        setWished(true);
        toast.success("Gadget Added to your Wishlist!");
        
    }


    return (
        <div className='relative mb-96 md:mb-80'>
            <div className='space-y-3 md:space-y-8 flex flex-col items-center p-20 pb-60 bg-special-500 '>
                <h1 className='text-center text-5xl max-w-5xl mx-auto text-white'>Product Details</h1>
                <p className='text-center max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className=' border-white rounded-lg absolute top-[60%] w-10/12 lg:w-7/12 left-[50%] -translate-x-1/2 z-50'>
                <div className="card md:card-side bg-base-100 shadow-xl p-1">
                <div className="text-end">
                <Link to="/" className="w-10 ">
                        <button className=" bg-special-500 text-white rounded-full"><IoIosCloseCircle className="text-xl font-semibold  rounded-full w-7 h-7" />
                        </button></Link>
                </div>
                    <figure>
                        <img
                            src={product_image} className="h-40 md:h-80"
                            alt="Album" />
                    </figure>
                    <div className="card-body">


                        <h2 className="card-title">{product_title}</h2>
                        <h3 className="text-left">Price : ${price}</h3>
                        <button className="text-left">
                            {availability ? "Stock Available" : "Out of stock"}
                        </button>
                        <div className="h-52">
                            <h2>Specification:</h2>


                            {specificationKeys.map((key, idx) => <p key={idx}>
                                <span className="text-sm">{key} :</span>
                                <span className="text-special-500 text-sm font-semibold"> {specification[key]}</span>
                            </p>)}


                        </div>

                        <div className="rating bg-yellow-400">
                            <p className="flex">Rating <RiStarSLine />:{rating}</p>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-special-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-special-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-special-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-special-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-special-500" />
                        </div>

                        <div className="card-actions justify-between">
                            <button className="btn bg-special-500 text-white" onClick={() => cartHandler(product)}>Add to Cart <AiOutlineShoppingCart className="text-xl font-semibold rounded-full w-7 h-7" /> </button>
                            <button disabled={wished} className={`btn  text-white rounded-full ${wished?'cursor-not-allowed ' : ' cursor-pointer'}`}  onClick={() => wishlistHandler(product)}>{wished? 'In Wishlist':<IoMdHeartEmpty className="text-xl font-semibold  rounded-full w-7 h-7" />} </button>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;