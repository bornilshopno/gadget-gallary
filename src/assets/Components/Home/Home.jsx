import React, { useContext, useEffect, useState } from 'react';
import Banner from './Banner';
import { DataContext } from '../Root/Root';
import Cards from './Cards';
import { useLoaderData } from 'react-router-dom';
import BlankPage from './BlankPage';
import { Helmet } from 'react-helmet-async';



const Home = () => {
  const { data, updatedData, setUpdatedData, cartData, setCartData, wishlist, setWishlist } = useContext(DataContext);

  const infoCategory= useLoaderData();
  const [category,setCategory]=useState('all')
 

  useEffect(()=>{
    if(category==='all'){
      setUpdatedData(data);
          }
   
      else{
        let selectedData=data.filter(gadgeted=>gadgeted.category===category);
        setUpdatedData(selectedData);
        }
  } , [category, data, setUpdatedData])

  const categoryHandler=(status)=>{
    setCategory(status);
    console.log(status)
  }
  
      return (
        <div className='min-h-96 '>
          <Helmet>
          <title>Gadget Heaven || Home</title>
          </Helmet>
          <Banner></Banner>
          <h2 className='text-5xl text-center font-semibold py-5 text-gray-600'>Explore Cutting Edge Gadgets</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <div className=' py-10 flex flex-col gap-5 mr-5'>
            <button className='btn focus:bg-special-500 focus:text-white w-40 mx-auto' onClick={()=>categoryHandler('all')}> All Products </button>
              {infoCategory.map(gadget=> <button key={gadget.id} className='btn focus:bg-special-500 focus:text-white w-40 mx-auto' onClick={()=>categoryHandler(`${gadget.category}`)}> {gadget.category} </button>)} 
              </div>
            <div className='lg:col-span-3 md:col-span-2  py-10'>
              {updatedData.length===0?<BlankPage/>:  <Cards/>}
           
             </div>
          </div>
          <div>
            
          </div>
        </div>
    );
};

export default Home;