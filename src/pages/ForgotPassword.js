import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ForgotPassword = () => {
    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>Reset Password</h1>
                    <Form.Text className="text-muted mt-4">
                        Did you lose your password?
                    </Form.Text>
                    <Form.Text className="text-muted">
                        Please enter the email you signed up for Korea Market correctly
                    </Form.Text>
                    <Form.Text className="text-muted">
                        A password change link will be sent via email
                    </Form.Text>
                    <Form className={"mt-4"} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@gamil.com"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className={"mt-4 mb-4"}>
                            Send authentication mail
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default ForgotPassword;