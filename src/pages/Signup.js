import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Signup = () => {
    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>KoreaMarket Signup</h1>
                    <Form className={"mt-4"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Name" />
                        </Form.Group>
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
                        <Button variant="primary" type="submit" className={"mt-4 mb-4"}>
                            Submit
                        </Button>
                        <>
                            <Form.Text className="text-muted">
                                When you sign up, you can use all the services provided by Infrap with an integrated account.
                            </Form.Text>
                            <Form.Text className="text-muted">
                                I agree to the integrated account and service terms and conditions KoreaMarket and the personal information processing policy.
                            </Form.Text>
                        </>
                        <Form.Group className="mt-3 mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I'd like to receive discounts and useful news." />
                        </Form.Group>

                    </Form>
                </Col>
            </Row>


        </Container>
    );
};

export default Signup;