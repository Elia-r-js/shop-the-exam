import React from "react";
import "./ProductItem.css";
import ProductMain from "../ProductMain";
import PRODUCT from "../../../PRODUCT.json";
export default function Product() {
  return (
    <ul className="ProductItem"> 
        {PRODUCT.map((item)=>(
            <div>
            <ProductMain data ={item}/>

            </div>
        ))}
    </ul>
  )
}



