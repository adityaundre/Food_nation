import React from "react";
import { useState,useEffect } from "react";
import Card from "./Card";
import "./Body.css";
import axios from 'axios';
import Shimmer from "./Shimmer";

const Body=()=>{

const[listofRestro,setListofRest]=useState([])
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const[searchText,setSearchText]=useState();


const fetchData=async()=>{

    try {
        let resData=await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        setListofRest(resData.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(resData.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }
    catch(e){

        console.log(e);
    }
        
  

}

useEffect(()=>{
    fetchData();
},[]);

const handleSearch = () => {
    const filtered = listofRestro.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurant(filtered);
    console.log(filtered)
}



    return listofRestro === 0? (<Shimmer/>) : (
        <div className="body">
           
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={((e)=>(
                        setSearchText(e.target.value)
                    )
                    )}/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button  className="filter-btn" onClick={(()=>{
                    let filterTop=listofRestro.filter((res)=>(
                        res.info.avgRating > 4 
                     )
                    )
                    setFilteredRestaurant(filterTop);
                })}>Top Rated Restaurants</button>


            </div>
            <div className="card-container">
                {filteredRestaurant.map((res)=>(
                    <Card key={res.info.id} restroData={res}/>
                ))}
            </div>
        </div>
        
        
    )
    
}

export default Body;