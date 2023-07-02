'use client';
import React from 'react';
import './NotesMenu.css';
import {images} from '../../assets';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';

const NotesMenu = () => {
    return (
        <section className='notes'>
            <h2 className='notes__title'>My Notes</h2>
            <Container>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={images.logo} alt='logo' />
                            <Card.Body>
                                <Card.Title>React.js</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NotesMenu;
