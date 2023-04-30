import React, {useState} from 'react';
import {Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
// row 칸으로 나눠줌

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const userInput = {
                email, password
            }
            console.log(userInput)

        } catch (err){
            console.log(err)
        }
    }

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>KoreaMarket Login</h1>
                    <Form className={"mt-4"} onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className={"mt-3 mb-4"}>
                            Submit
                        </Button>
                        <Row className={"justify-content-md-center"}>
                            <Col xs>
                                <Nav.Link href="/forgot/password">Find Email</Nav.Link>
                            </Col>
                            <Col  xs>
                                <Nav.Link href="/forgot/password">Forgot Password</Nav.Link>
                            </Col>
                            <Col  xs>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>


        </Container>
    );
};

export default Login;