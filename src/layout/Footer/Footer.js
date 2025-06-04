import React,{useContext} from "react";
import "./Footer.css"
import Button from "../../components/Buttons/Button";
import ThemeContext from "../../context/ThemeContext";
const Footer = () =>{
    const ThemeValue = useContext(ThemeContext)
    return(
        
    <div className="Footer">
        <p>&copy; frontend by me</p>
        <div className="FooterButton">
            <Button handleClick={() => ThemeValue.setActiveTheme("green")}  title={"green"} backgroundColor={"#90EE90"}/>
            <Button handleClick={() => ThemeValue.setActiveTheme("blue")} title={"blue"} backgroundColor={"#ADD8E6"}/>
        </div>  
        </div>
    )
}

export default Footer