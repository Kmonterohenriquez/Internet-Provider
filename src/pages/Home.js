import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Showcase from '../component/Showcase';
// import CarouselPage from '../component/slider';
import Prices from '../component/Prices';

import '../style/Prices.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Showcase />
                {/* <CarouselPage /> */}
                <div className='Price-grid Prices-container container'>
                    <Prices price={20} info='Hola como estas esto es una prueba'/>
                    <Prices price={20} info='Hola como estas esto es una prueba'/>
                    <Prices price={20} info='Hola como estas esto es una prueba'/>
                </div>
            </div>
        )
    }
}

export default Home;