'use client';

import React from 'react';
import Link from 'next/link';
import { images } from '../../assets';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Nav.css';


const NavBar = () => {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#'>
                    <img className='logo' src={images.logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Notes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Html & Css</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Javascript
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">React.js</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Next.js
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Documents</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;