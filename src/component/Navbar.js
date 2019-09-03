import React, { Component } from 'react';
import '../style/Navbar.css';
import logo from '../img/logo3.png';


class Navbar extends Component{
    render(){
        return(
            <div className='container absolute'>
                <nav className='navbar-container'>
                <div className='logo'><a href="#"><img src={logo} /></a></div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Plan</a></li>
                        <li><a href='#'>Location</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;