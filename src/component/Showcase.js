import React, { Component } from 'react';
import '../style/Showcase.css'
import bg from '../img/bg2.jpg';

class Showcase extends Component{
    render(){
        return(<div className='overlay'>
            <div className='showcase'>
            
                <img src={bg}/>
                <div className='info'>
                    <h1>Be fast</h1>
                    <h2>Xpeed where you never wait</h2>

                </div>
            </div>
            </div>
        )
    }
}

export default Showcase;