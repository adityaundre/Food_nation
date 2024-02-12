import React from "react";
import "./Header.css";
import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";


const Header=()=>{

const[login,setLogin]=useState("Login");



    return(
        <div className="head-container">
            <div className="logo-container">
                <img src={LOGO_URL} alt="food_nation" className="head-logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={(()=>{
                    setLogin(login==="Login"?"Logout":"Login")
                })}>{login}</button>
                </ul>
            </div>
                
        </div>
        
        
        
        
    )

}

export default Header;