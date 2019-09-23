import React, { Component } from 'react';
import '../style/Joinbar.css'

class Joinbar extends Component{
    render(){
        return(
            <div className='Join-container'>
                <div className='container'>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon">
                            <i className="fa fa-user prefix"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon" />
                    </div>
                    <button className='join-btn join-line'>Join Us</button>
                </div>
            </div>
        )
    }
}

export default Joinbar;