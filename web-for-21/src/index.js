import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx';
import Products from './components/pages/Products.jsx';
import Pant from './components/Pant';
import Tshirt from './components/Tshirt';
import SignUp from './components/pages/SignUp.jsx';
import Footer from './components/Footer';
import ProductsPant from './components/pages/ProductPants';
import ProductView from './components/pages/ProductView'

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/products" element={<Products/>} />
          <Route path="/pants" element={<Pant/>} />
          <Route path="/tshirt" element={<Tshirt/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/products/pant" element={<ProductsPant />}/>
          <Route path="/products/tshirt" element={<Products />}></Route>
          <Route path="/products/tshirt/:name" element={<ProductView/>}></Route>
    </Routes>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

