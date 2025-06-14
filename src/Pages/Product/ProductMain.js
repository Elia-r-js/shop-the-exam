import React, { useContext } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Button from '../../components/Buttons/Button';
import ThemeContext from '../../context/ThemeContext';
import ProductItemReducer from './ProductItem/ProductItem.reducer';
import CartContext from '../../context/CartContext';

export default function ProductMain({ data }) {
  const ThemeValue = useContext(ThemeContext);
  const {carts,dispatchCart} = useContext(CartContext);



  const added = carts.includes(data.id)
  const handelAdd = ()=> {
    if(added){
       dispatchCart({
        type:'REMOVE_FROM_CART',
        id:data.id
      });
    }else{
      dispatchCart({
        type:"ADD_TO_CART"
      });
    }
  }
  

  return (
    <div className="product-card">
      <h3 className="product-name">{data.name}</h3>

      <img src={data.img} alt={data.name} className="product-image" />

      <Button

       handleClick={handelAdd}

        title=
            {added ? (    <>
            <MdRemoveShoppingCart/>
            Remove from the cart
          </>) :(    <>
            <IoMdAdd  />
            Add to My Cart
          </>)}
        
        fullwidth
        height="48px"
        backgroundColor={ThemeValue.theme.color}
      />

      <span className="product-price">
        ${data.price}
      </span>

      <p className="stock-status">
        {data.inStock ? (
          <span className="in-stock">✓ In Stock</span>
        ) : (
          <span className="out-of-stock">✗ Out of Stock</span>
        )}
      </p>
    </div>
  );
}
