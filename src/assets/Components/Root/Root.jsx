import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export const DataContext = createContext();
const Root = () => {
    const data= useLoaderData();
    const [updatedData,setUpdatedData]=useState(data.slice(0,9));
    const [cartData, setCartData]=useState([]);
    const [wishlist, setWishlist]=useState([]);
    const [totalCost,setTotalCost]=useState([]);

    


    return (
        <div className="font-sora">
            
           <ToastContainer autoClose={2000} position="top-center" />
            <DataContext.Provider value={{data,updatedData,setUpdatedData,cartData, setCartData,wishlist, setWishlist,totalCost,setTotalCost}}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataContext.Provider>


        </div>
    );
};

export default Root;