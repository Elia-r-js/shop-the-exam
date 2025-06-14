import React, { useReducer } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CartContext from "../context/CartContext";
import CartReducer from "../reducers/Cart";

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    carts: []
  });

  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        dispatchCart: dispatch
      }}
    >
      <>
        <Header />
        {children}
        <Footer />
      </>
    </CartContext.Provider>
  );
};

export default Layout;
