import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Root/Root';

const Card = ({ gadget }) => {
   const {product_image, product_title, price,product_id}=gadget;
   
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure>
                    <img
                        src={product_image} className=' h-40 cover'
                        alt="Gadget" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-sm">{product_title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                       

                       <Link to={`/${product_id}`}>
                       <button className="btn min-h-8 h-8 rounded-3xl bg-white text-special-500 border-2 border-special-500 hover:bg-special-500 hover:text-white">View Detail</button>
                       </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;