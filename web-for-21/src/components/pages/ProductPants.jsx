import React from 'react';
import '../../App.css';
import LargeCard from '../LargeCard';
import { Link } from "react-router-dom"
import Tshirt from '../Tshirt';
import Pant from '../Pant';

export default function ProductsPant() {
  return <>
    <>
      <div class="row align-items-center my-5 justify-content-md-center" >
        <div class="col-lg-4 ">
          <h1 class='header-border'>Our Products</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis
            imperdiet aenean eu velit maecenas integer. Viverra mauris mauris scelerisque
            pulvinar nibh sed sit sodales.</p>
        </div>
      </div>
      <div class="row  justify-content-md-center" >
        <div class="col-lg-4 ">
           <Link to='/products/tshirt' class="  w-50 p-3  text-size "><h1 className='header-border'> Tshirt </h1></Link>

        </div>
        <div class="col-lg-4 ">
           <Link to='/products/pant' class="  w-50 p-3  text-size"><h1 className='header-border'> Pant </h1></Link>

        </div>
      </div>
      <Pant/>
    </>
  </>;
}

