import React, { useEffect } from "react";
import './smallCard.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from 'react-router-dom';


function SmallCard(props) {
    
    return (
        <div class="card smallCard" >
            <img class="card-img-top" src={props.path} />
            <div class="card-body">
                <h5 class="card-title display-4">{props.name}</h5>
                <p class="card-text">Price: ##0.000 VND</p>
                <Link to={`/products/tshirt/${props.name}/`} class="btn btn-dark text-secondary w-25 ">View</Link>
                <a href="#" class="btn btn-dark  text-secondary w-25 ">Buy</a>
            </div>

        </div>

    )
}

export default SmallCard
