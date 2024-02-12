import React from "react";
import {CDN_URL} from "../utilis/constants";
import"./Card.css";


const Card=(props)=>{
    const{restroData}=props;
    const{name,avgRating,cuisines,costForTwo,sla,cloudinaryImageId}=restroData.info;



    return(
        <div className="res-card" style={{
            backgroundColor: '#f0f0f0',
          }}>
            <img src={CDN_URL+cloudinaryImageId} alt="restro-logo" className="card-logo"/>
            <div className="res-card-content">
            <h4>{name}</h4>
            <h6>{cuisines.join(", ")}</h6>
            <h6>{costForTwo}</h6>
            <h6>{sla.slaString}</h6>
            <h6>{avgRating}</h6>
            </div>



        </div>


    )
}
export default Card