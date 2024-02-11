import React from "react";
import "./Header.css";
import { Logo } from "../utilis/Logo";
import { useState } from "react";


const Header=()=>{

const[login,setLogin]=useState("Login");



    return(
        <div className="head-container">
            <div className="head-wrapper">
                <img src={Logo} alt="food_nation"/>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
                <button onClick={(()=>{
                    setLogin(login==="Login"?"Logout":"Login")
                })}>{login}</button>
            </div>
        
        
        
        
        </div>
    )

}

export default Header;