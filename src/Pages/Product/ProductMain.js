import React from 'react'

import Button from '../../components/Buttons/Button'
export default function ProductMain({data}) {
  return (
    <div><li>{data.name}</li>
    <img src={data.img}/>
    <Button title ="add to my cart" fullwidth height="48px" backgroundColor="orange"/>

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
