'use client';

import React from 'react';
import { images } from '../../assets';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className='bg-body-tertiary custom-navbar'>
            <Container className="nav-container">
                <Navbar.Brand href='#'>
                    <img className='logo' src={images.logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-center'>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Notes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/HTML">Html</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/CSS">CSS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/JavaScript">Javascript</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/React">React</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Next">Next</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Documents">Documents</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
