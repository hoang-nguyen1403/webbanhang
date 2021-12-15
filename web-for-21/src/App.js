import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services';
import About from './components/pages/About.jsx';
import Products from './components/pages/Products.jsx';
import SignUp from './components/pages/SignUp.jsx';

function App() {
  return (
    <>
      <Router>
      <Navbar></Navbar>
        <Home />
        <Routes>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
