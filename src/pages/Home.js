import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Showcase from '../component/Showcase';
// import CarouselPage from '../component/slider';
import Prices from '../component/Prices';
import Steps from '../component/Steps';
import Footer from '../component/Footer';
import Joinbar from '../component/Joinbar';

import '../style/Prices.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Showcase />
                {/* <CarouselPage /> */}
                <div className='Price-grid Prices-container container'>
                    <Prices plan='Silver' price={20} info='Hola como estas esto es una prueba'/>
                    <Prices plan= 'Gold' price= {20} info='Hola como estas esto es una prueba'/>
                    <Prices plan='Platinum' price={20} info='Hola como estas esto es una prueba'/>
                </div>
                {/* <Form /> */}
                <Steps />
                <Joinbar />
                <Footer />
            </div>
        )
    }
}

export default Home;