import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const Root = () => {
    const data= useLoaderData();
    
    const [updatedData,setUpdatedData]=useState(data)
    


    return (
        <div className="w-11/12 md:10/12 mx-auto font-sora">
           
            <DataContext.Provider value={{data,updatedData,setUpdatedData}}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataContext.Provider>


        </div>
    );
};

export default Root;