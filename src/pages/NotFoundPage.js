import React, {Component } from 'react';
import error404 from '../img/404.jpg';
import '../style/404.css';
// import '../style/general.css';

class  NotFoundPage extends Component{
    render(){
        return(
            <div className='container error-container'>
                <img src={error404}/>
                <h1>page not found</h1>
            </div>
        )
    }
}

export default NotFoundPage;
