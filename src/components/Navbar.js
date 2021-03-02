import React, { Component } from 'react';
import logo from '../images/logo.png';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    //to toggle the burger menu
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav>
            <div className="logo">
                <Link to="/" >
                    <img className="logo" src={logo} alt="company logo"/>
                </Link>
                <h2>Digital Solutions</h2>
            </div>
            <ul onClick={this.handleToggle} className={this.state.isOpen? "nav-links nav-active":"nav-links"}>
                <li>
                    <a href="#about">About Us</a>
                </li>
                <li>
                    <a href="#team">Our Team</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                <Link to="/contact">Reach Us</Link>
                </li>
            </ul>
            <div className={this.state.isOpen?"burger toggle":"burger"} onClick={this.handleToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        )
    }
}
