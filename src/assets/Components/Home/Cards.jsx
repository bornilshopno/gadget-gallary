import { useContext } from "react";
import { DataContext } from "../Root/Root";
import Card from "./Card";


const Cards = () => {
  const { data, updatedData, setUpdatedData } = useContext(DataContext);
  
 


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {updatedData.map(gadget=><Card key={gadget.product_id} gadget={gadget}></Card>)}
        </div>
    );
};

export default Cards;