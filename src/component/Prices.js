import React, { Component } from 'react';
import '../style/Prices.css';

class Prices extends Component{
    render(){
        const { price, info, plan} = this.props;
        return(
            <div className='container'>
                {/* Card */}
                    <div className='Prices-card'>
                            <h1 className='Prices-plan'>{ plan }</h1>
                            <h1 className='Prices-price'>{ price }$</h1>
                            <hr />
                            
                            <p className='Prices-info'>{ info }</p>
                            <button id='info-btn'>More info</button>
                    </div>
            </div>
        )  
    }
}
export default Prices;