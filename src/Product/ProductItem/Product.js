import React from "react";
import "./ProductItem.css"
import Buttons from "../Buttons/Buttons";


export default function Product({data}) {
  return (
    <ul className="ProductItem"> 
        {data.map((item)=>(
            <div>
            <li>{item.name}</li>
            <img src={item.img}/>
            <Buttons/>

            <span className="price">
                {item.price}$
            </span>

            <p className="stock-status">
            {item.inStock ? (
              <span className="in-stock">✓ In Stock</span>
            ) : (
              <span className="out-of-stock">✗ Out of Stock</span>
            )}
          </p>

            </div>
        ))}
    </ul>
  )
}



