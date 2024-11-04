import React, { useContext, useState } from 'react';
import Banner from './Banner';
import { DataContext } from '../Root/Root';
import Cards from './Cards';
import { useLoaderData } from 'react-router-dom';
import BlankPage from './BlankPage';



const Home = () => {
  const { data, updatedData, setUpdatedData } = useContext(DataContext);
 
 
  const infoCategory= useLoaderData();
  const [category,setCategory]=useState('all')

  

  const categoryHandler=(status)=>{
    setCategory(status);
    
    if(status==='all'){
      setUpdatedData(data);
      console.log(updatedData)
    }

      else{
        let selectedData=data.filter(gadgeted=>gadgeted.category===status);
        console.log(selectedData);
        setUpdatedData(selectedData);
        console.log(updatedData);}

        console.log(category);
    
  }
  
      return (
        <div className='min-h-96'>
          
          <Banner></Banner>
          <h2 className='text-5xl text-center font-semibold py-5 text-gray-600'>Explore Cutting Edge Gadgets</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <div className='border-green-800 border-2 py-10 flex flex-col gap-5 mr-5'>
            <button className='btn focus:bg-special-500 focus:text-white w-40 mx-auto' onClick={()=>categoryHandler('all')}> All Products </button>
              {infoCategory.map(gadget=> <button key={gadget.id} className='btn focus:bg-special-500 focus:text-white w-40 mx-auto' onClick={()=>categoryHandler(`${gadget.category}`)}> {gadget.category} </button>)} 
              </div>
            <div className='lg:col-span-3 md:col-span-2 border-2 border-blue-800 py-10'>
              {updatedData.length===0?<BlankPage/>:  <Cards/>}
           
             </div>
          </div>
          <div>
            
          </div>
        </div>
    );
};

export default Home;