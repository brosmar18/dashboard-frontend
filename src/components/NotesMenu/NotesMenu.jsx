'use client';

import React, { useState, useEffect } from 'react';
import './NotesMenu.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import client, { urlFor } from '../../client/client';

const NotesMenu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const query = `*[_type == "notesCategory"]`;

        client.fetch(query)
            .then((data) => setCategories(data));
    }, [])

    return (
        <section className='notes'>
            <h2 className='notes__title'>My Notes</h2>
            <Container>
                <Row>
                    {categories.map((category, index) => (
                        <Col sm={12} md={6} lg={4} key={category.title + index}>
                            <Card className="mb-4" style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={urlFor(category.imgUrl).url()} alt={category.title} />
                                <Card.Body>
                                    <Card.Title>{category.title}</Card.Title>
                                    <Card.Text>{category.desc}</Card.Text>
                                    <Button variant='primary'>See Notes</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default NotesMenu;
