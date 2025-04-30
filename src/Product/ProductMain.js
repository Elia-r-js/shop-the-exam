import React from 'react'
import Buttons from './Buttons/Buttons'
export default function ProductMain({data}) {
  return (
    <div><li>{data.name}</li>
    <img src={data.img}/>
    <Buttons/>

    <span>
        {data.price}
    </span>

    <p className="stock-status">
    {data.inStock ? (
      <span className="in-stock">✓ In Stock</span>
    ) : (
      <span className="out-of-stock">✗ Out of Stock</span>
    )}
  </p></div>
  )
}
