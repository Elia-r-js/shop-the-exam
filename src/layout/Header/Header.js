import React from "react";

import "./Header.css"
import { useLocation, useNavigate } from "react-router-dom";

const Header = ( )=>{
    const navigate = useNavigate();
    const location = useLocation();
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
                <button>aboutme</button>
            </li>

        </ul>
        <h3>{location.pathname  ==="/"? "shop" : location.pathname.slice (1)}</h3>
        </div>
    )
}
export default Header