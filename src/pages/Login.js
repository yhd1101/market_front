import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
// row 칸으로 나눠줌
const Login = () => {
    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>KoreaMarket Login</h1>
                    <Form className={"mt-4"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={"mt-4"}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>


        </Container>
    );
};

export default Login;