import React from "react";
import "./ProductItem.css"
import Buttons from "../Buttons/Buttons";
import ProductMain from "../ProductMain";

export default function Product({data}) {
  return (
    <ul className="ProductItem"> 
        {data.map((item)=>(
            <div>
            <ProductMain data ={item}/>

            </div>
        ))}
    </ul>
  )
}



