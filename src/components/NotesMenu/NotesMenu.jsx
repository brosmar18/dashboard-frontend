'use client';
import React, {useState, useEffect} from 'react';
import './NotesMenu.css';
import {images} from '../../assets';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import client, { urlFor } from '../../client/client';

const NotesMenu = () => {
    const [categories, setCateegories] = useState([]);

    useEffect(() => {
        const query = `*[_type == "notesCategory"]`;

        client.fetch(query)
        .then((data) => setCateegories(data));
    }, [])

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
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel at officiis ratione aspernatur.
                                </Card.Text>
                                <Button variant='primary'>See Notes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NotesMenu;
