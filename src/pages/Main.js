import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel, Col, Container, Row, Tabs, Tab} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Main = () => {
    const navigate = useNavigate()
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

    const carouselData = [
        {
            "id" : 1,
            "title" : "First slide label",
            "desc" : "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6BDQ58gN_aJNjUoHl01aQE-3wUTCx9gCDQ&usqp=CAU"
        },

        {
            "id" : 2,
            "title" : "무료 나눔 행사",
            "desc" : "뉴욕에 거주시 무료나눔 행사합니다.",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRdl9E7zlLInaGiu-Jxr2mjd3fsHe86ByA&usqp=CAU"
        },
        {
            "id" : 3,
            "title" : "Stttttttt",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscinsdsdsd elitdsdsdsd.",
            "img" : "data:image/jpeg;base64,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"
        }
    ]


    return (
        <>
        <Carousel nextLabel={""} prevLabel={""}>
            {carouselData && carouselData.map(item => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt="First slide"
                        style={{ height : "450px"}}
                    />
                    <Carousel.Caption>
                        <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px'}}>{item.title}</h1>
                        <br/>
                        <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px'}}>{item.desc}</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}

        </Carousel>
            <Container style={{ marginTop: '3rem'}}>
                <Row>
                    {products && products.map(product => (
                        <Col style={{ marginTop: '2rem'}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{height: '250px', width: '100%'}} src={product.picture} />
                                <Card.Body>
                                    <Card.Title>{product.name.slice(0, 12)}</Card.Title>
                                    <Card.Text>
                                        {product.desc1.slice(0,40)} ...
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => navigate(`/product/${product._id}`) }>상세보기</Button>
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