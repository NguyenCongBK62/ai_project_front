import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return(
        <div>
            <Navbar className="navbar" fixed='top'>
                <Logo/>
                <Navbar.Brand className="nav-link">Diagnostics Covid and Pneumonia</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Navigation;