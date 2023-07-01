import React from 'react';
import Link from 'next/link';
import {images} from '../../assets';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Nav.css';


const NavBar = () => {
    return (
        <nav className='nav'>
            <img className='nav__logo' src={images.logo} alt='logo' />
            <ul className='nav__links'>
                {['home', 'notes', 'documents', 'about'].map((item) => (
                    <li className='nav__link' key={item}>
                        <Link href={`#`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;