'use client';
import React, {useState, useEffect} from 'react';
import './NotesMenu.css';
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
                        {categories.map((categories, index) => (
                            <Card style={{width: '18rem'}} key={categories.title + index}>
                            <Card.Img variant='top' src={urlFor(categories.imgUrl).url()} alt={categories.title} />
                            <Card.Body>
                                <Card.Title>{categories.title}</Card.Title>
                                <Card.Text>{categories.desc}</Card.Text>
                                <Button variant='primary'>See Notes</Button>
                            </Card.Body>
                        </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NotesMenu;
