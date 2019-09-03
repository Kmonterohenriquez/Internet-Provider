import React, { Component } from 'react';
import '../style/Prices.css';

class Prices extends Component{
    render(){
        const { price, info } = this.props;
        return(
            <div className='container'>
                {/* Card */}
                    <div className='Prices-card'>
                        <div className='front'>
                            <h1 className='Prices-price'>{ price }$</h1>
                            <hr />
                            <h3>More Info</h3>
                        </div>
                        <div className='back'>    
                            <p className='Prices-info'>{ info }</p>
                        </div>
                    </div>
            </div>
        )  
    }
}
export default Prices;