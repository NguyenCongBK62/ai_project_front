import React from 'react';
import logo from './Logo.png';
import './Logo.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = () => {
    return (
        <Navbar.Brand href="#home">
            <img
                src={logo}
                width="35"
                height="45"
            />
        </Navbar.Brand>
    );
}

export default Logo;