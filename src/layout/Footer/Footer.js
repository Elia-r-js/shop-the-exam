import React from "react";
import "./Footer.css"
import Button from "../../components/Buttons/Button";

const Footer = () =>{
    return(
        <div className="Footer">
        <p>&copy; frontend by me</p>
        <div className="FooterButton">
            <Button title={"green"} backgroundColor={"#90EE90"}/>
            <Button title={"blue"} backgroundColor={"#ADD8E6"}/>
        </div>  
        </div>
    )
}

export default Footer