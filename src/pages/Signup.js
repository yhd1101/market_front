import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
// e..preventDefault() 반복 동작을 막아줌

const Signup = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPw, setConfirmPw] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            if (password !== confirmPw) {
                alert("password do not match")
            }
            const userInput = {
                name, email, password
            }
            const {data, status } = await axios.post("http://localhost:9000/user/signup", userInput)
            console.log(data)
            if (status === 200) {
                navigate("/login")
            }
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>KoreaMarket Signup</h1>
                    <Form className={"mt-4"} onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="enter email"
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
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="confirm password"
                                value={confirmPw}
                                onChange={e => setConfirmPw(e.target.value)}
                            />
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