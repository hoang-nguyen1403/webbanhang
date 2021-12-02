import React from 'react'
import '../../App.css'
import Herosection from '../../components/HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';

function Home(){
    return(
        <> 
        <Herosection/>
        <Cards/>
        <Footer />
        </>
    )
}
export default Home;