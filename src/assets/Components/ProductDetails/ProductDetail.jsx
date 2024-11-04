import { useLoaderData } from "react-router-dom";
import { RiStarSLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";




const ProductDetail = () => {
    const product = useLoaderData();
    
    const { product_title, price, availability, description, specification, rating, product_image } = product;
    return (
        <div className='relative border-green-500 border-4 mb-60'>
            <div className='space-y-3 md:space-y-8 flex flex-col items-center p-20 pb-60 bg-special-500 '>
                <h1 className='text-center text-5xl max-w-5xl mx-auto text-white'>Product Details</h1>
                <p className='text-center max-w-3xl mx-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className='border-2 border-white rounded-lg absolute top-[60%] w-7/12 left-[20.8%]'>
                <div className="card lg:card-side bg-base-100 shadow-xl p-1">
                    <figure>
                        <img
                            src={product_image} className="h-80"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <h3 className="text-left">Price : ${price}</h3>
                        <button className="text-left">
                            {availability ? "in Stock" : "Out of stock"}
                        </button>
                        <div className="h-52 bg-yellow-200">Specification</div>
                        <p className="flex">Rating <RiStarSLine />:{rating}</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add to Cart <AiOutlineShoppingCart  className="text-xl font-semibold rounded-full w-7 h-7" /> </button>
                            <button className="btn btn-primary"> <IoMdHeartEmpty className="text-xl font-semibold border-2 rounded-full w-7 h-7" /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;