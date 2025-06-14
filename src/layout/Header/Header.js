import React, {useContext} from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"
import { useLocation, useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Header = ( )=>{
    const navigate = useNavigate();
    const location = useLocation();
    const {carts} = useContext(CartContext);
    console.log("carts",carts);
    return(<div>


        <ul className="Header">
            <li>
                
                <button onClick={()=>navigate("/")}>shop</button>
            </li>
            <li>
                <button onClick={()=>navigate("/contact")}>contact</button>
            </li>
            <li>
                <button onClick={()=>navigate("/Info")}>Info</button>
            </li>
            <li>
                <button onClick={()=>navigate("/Aboutme")}>aboutme</button>
            </li>
            </ul>




                     <div className="cart">
                <h4>
                    {carts.length}<FaShoppingCart />
                </h4>
            </div>

        <h3>{location.pathname  ==="/"? "shop" : location.pathname.slice (1)}</h3>
        </div>
    )
}
export default Header