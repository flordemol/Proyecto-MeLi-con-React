import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Header = React.memo(() => {
    const search = (e) => {}

    return ( 
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form onSubmit={search}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Encontrá lo que buscás..."
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
     );
});
 
export default Header;