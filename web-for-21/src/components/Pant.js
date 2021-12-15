import React from 'react'
import "./Cards.css"
import SmallCard from './SmallCard'




function Pant() {
    return (
        <div className="cards">
        <div class="row align-items-center  justify-content-center my-5">
            <div class="col-lg-3">
                <SmallCard path="/images/21Salvador4738-Edit.jpg" />
            </div>
            <div class="col-lg-3">
                <SmallCard path="/images/21Salvador4748-Edit.jpg" />
            </div>
        </div>
    </div>
    )
}

export default Pant
