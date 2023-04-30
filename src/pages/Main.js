import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

const Main = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const address = "http://localhost:9000/product/"
            const result = await axios.get(address)
            console.log(result.data.products)
            setProducts(result.data.products)


        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => { //무조건 실행
        getProducts()
    }, [])

    return (
        <>
        <Carousel nextLabel={""} prevLabel={""}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300"
                    alt="First slide"
                    style={{ height : "450px"}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="data:image/jpeg;base64,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"
                    alt="Second slide"
                    style={{ height : "450px"}}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="data:image/jpeg;base64,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"
                    alt="Third slide"
                    style={{ height : "450px"}}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container style={{ marginTop: '3rem'}}>
            <Row>
            {products && products.map(product => (
                <Col style={{ marginTop: '2rem'}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height: '250px'}} src={product.picture} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.desc1.slice(0,70)} ...
                            </Card.Text>
                            <Button variant="primary">예약하러 가기</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
        </>
    );
};

export default Main;