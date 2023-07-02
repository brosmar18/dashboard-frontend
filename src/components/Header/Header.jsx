'use client';

import React from 'react';
import './Header.css';
import { images } from '../../assets';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Row className="align-items-center justify-content-center" style={{ height: '70vh' }}>
                    <Col md={6} className="text-center">
                        <h1 className='header__title'>My Second Brain</h1>
                        <p className='header__description'>
                            Embark on a journey through the depths of my digital mind. Here you'll find a curated collection of notes, insights, and resources amassed through my odyssey in software development. A treasure trove for the curious and passionate, this space is where knowledge transforms and ideas take flight.
                        </p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
