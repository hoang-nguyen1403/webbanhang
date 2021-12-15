import React from 'react'
import "./Cards.css"
import SmallCard from './SmallCard'
import ProductView from './pages/ProductView'

function Tshirt() {
    return (
        <div className="cards">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
                <SmallCard path="/images/MAT_SAU_1.jpg" name="tshirt1"/>
            </div>
            <div class="col-lg-3">
                <SmallCard path="/images/MAT_SAU_5.jpg" />
            </div>
            <div class="col-lg-3">
                <SmallCard path='/images/MAT_SAU_3.jpg' />
            </div>
            <div class="col-lg-3">
                <SmallCard path='/images/MAT_SAU_4.jpg' />
            </div>
        </div>
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
                <SmallCard path="/images/MAT_SAU_2.jpg" />
            </div>
            <div class="col-lg-3">
                <SmallCard path="/images/MAT_SAU_6.jpg" />
            </div>
            <div class="col-lg-3">
                <SmallCard path='/images/MAT_SAU_7.jpg' />
            </div>
            <div class="col-lg-3">
                <SmallCard path='/images/MAT_SAU_4.jpg' />
            </div>
        </div>
        {/* <h1 class='header-border'>BOTTOM</h1>
        <div class="row align-items-center  justify-content-center my-5">
            <div class="col-lg-3">
                <SmallCard path="/images/21Salvador4738-Edit.jpg" />
            </div>
            <div class="col-lg-3">
                <SmallCard path="/images/21Salvador4748-Edit.jpg" />
            </div>
        </div> */}
    </div>
    )
}

export default Tshirt
