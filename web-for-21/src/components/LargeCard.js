import React from 'react'
import './largeCard.css'
import { Link } from "react-router-dom"



function LargeCard(props) {
    return (
        <div class="card">
            <div class="card bg-dark text-white justify-content-md-center">
                <img class="card-img  img-largeCard" src={props.src}
                    alt="Card image" />
                <div class="card-img-overlay d-flex flex-column-reverse ">
                    <Link to={props.path}class="btn btn-light btn-lg w-50 p-3  text-size">View All Products</Link>
                    <h1 class="card-title display-3 text-left align-bottom text-style font-weight-bold">
                        {props.title}
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default LargeCard
