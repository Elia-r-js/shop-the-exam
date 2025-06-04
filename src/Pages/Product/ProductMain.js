import React,{useContext} from 'react'

import Button from '../../components/Buttons/Button'
import ThemeContext from '../../context/ThemeContext'
export default function ProductMain({data}) {
  const ThemeValue=useContext(ThemeContext)
  console.log("ThemeValue" ,ThemeValue)
  return (
    <div><li>{data.name}</li>
    <img src={data.img}/>
    <Button title ="add to my cart" fullwidth height="48px" backgroundColor= {ThemeValue.theme.color}/>

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
