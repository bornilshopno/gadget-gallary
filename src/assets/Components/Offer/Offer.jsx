import { Link } from 'react-router-dom';
import saleimage from '../../../assets/sale.webp'
import { Helmet } from "react-helmet-async";

const Offer = () => {
    return (
        <div className='bg-gradient-to-bl  from-amber-500 to-special-500' >
            <Helmet>
            <title>Gadget Heaven || Offer</title>
            </Helmet>
            <h3 className='text-center text-3xl font-medium bg-gradient-to-tr from-amber-500 to-special-500'>Exciting offer below to be Grabed! Are you ready?</h3>
           <div className='  w-96 mx-auto '>
           <Link to='/'> <button className='btn btn-primary w-96 mx-auto text-xl my-4 bg-special-500'>Explore Available Gadgets!</button></Link>
           </div>
            <img src={saleimage} alt="" className='w-full'/>
        </div>
    );
};

export default Offer;