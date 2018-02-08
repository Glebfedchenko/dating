import React, { Component } from "react";
import Register from './Register'
import {Link} from 'react-router-dom'

class Header extends Component {
    state = {
        register:false
    }
    toggleRegister = () => {
        this.setState({register:!this.state.register})
    }
    render() {
        return (
            <section className='headersection'>
                <nav className="navbar navbar-default navbar-fixed-top" id='navigation'>
                    <div className="container">
                        <div id='logo' className="col-lg-3 col-md-2 col-xs-2 col-sm-2">
                            <Link to='/' id='logolink'>Carma</Link>
                        </div>
                        <div className='navbar-collapse collapse '>
                            <div className="col-lg-7 col-md-8 col-xs-5 col-sm-8" id='navbarul'>
                                <ul>
                                    <li><Link to='/' id='navlink'>Home</Link></li>
                                    <li><Link to='/' id='searchlink'>Search</Link></li>
                                    <li><Link to='/' id='navlink'>Members</Link></li>
                                    <li><Link to='/' id='navlink'>Extras</Link></li>
                                    <li><Link to='/' id='navlink'>Contact Us</Link></li>
                                    <li><Link to='/' id='navlink'>Blog</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 col-md-2 col-xs-2 col-sm-2 text-center' id='signup'>
                                <div id='signuplink-wrapper'>
                                    <Link to='/' onClick={this.toggleRegister} id='signuplink'>Login / Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <h1>All You Need <br /> is <i>Love</i> </h1>
                {this.state.register ? <Register close={this.toggleRegister}/>: null}  
            </section>
        )
    }
}
export default Header