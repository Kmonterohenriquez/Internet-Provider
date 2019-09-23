import React, { Component } from 'react';
import '../style/Steps.css';


class Steps extends Component{
    render(){
        return(
            <div className='Steps-container'>
                <div className='margin-container'>
                    <h1 className='Steps-title'>Set up Xpeed service in 3 easy steps:</h1>
                    <div className='Steps-grid'>

                        <div className='Steps-card step1'>
                            <h3>1</h3>
                            <h2>Choose your deal</h2>
                            <p>Select the package that’s right for you. Then, customize it!</p>
                        </div>
                        <div className='Steps-card step2'>
                            <h3>2</h3>
                            <h2>Confirm your installation</h2>
                            <p>Schedule a professional installation or order an easy-to-use Self-Install Kit.</p>
                        </div>
                        <div className='Steps-card step3'>
                            <h3>3</h3>
                            <h2>Experience the best in entertainment</h2>
                            <p>Watch, stream, and surf your favorite shows and movies with your new Xpeed service.</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Steps;