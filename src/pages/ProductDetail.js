import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import {Map} from "../components";





const ProductDetail = () => {
    const {productid} = useParams()
    const [productInfo, setProductInfo] = useState({})

    const getProductInfo = async () => {

        try {
            const { data, status } = await axios.get(`http://localhost:9000/product/${productid}`)
            if (status === 200){
                console.log(data)
                setProductInfo(data.product)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProductInfo()
    }, [])

    const relatedProducts = [
        {
            "id" : 1,
            "title" : "폴로 티셔츠",
            "desc" : "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            "img" : "https://assets.burberry.com/is/image/Burberryltd/709BA03F-AA3A-4863-B55F-E86BF44E760C?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
        },

        {
            "id": 2,
            "title": "리바이스 청바지",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "img": "https://assets.burberry.com/is/image/Burberryltd/603C9580-3210-46A0-9E90-0EA631ACCF10?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
        },
        {
            "id": 3,
            "title": "나이키 골프",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscinsdsdsd elitdsdsdsd.",
            "img": "https://image.msscdn.net/images/goods_img/20220726/2681983/2681983_16824031024435_220.png"
        },
        {
            "id" : 4,
            "title" : "아디다스 신발",
            "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscinsdsdsd elitdsdsdsd.",
            "img" : "https://image.msscdn.net/images/goods_img/20170615/577636/577636_5_220.jpg"

        },
    ]


    return (
        <>
            <Container>
                <Link className={"btn btn-light my-3"} to="/">
                    Go Back
                </Link>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image style={{width: "500px", height: "400px"}} src={productInfo.picture} alt={productInfo.name} fluid/>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>
                                <h5>{productInfo.name}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Price: ${productInfo.price}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Brand: {productInfo.brand  ? productInfo.brand : "내용없음"}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Category: {productInfo.category}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>updated : {productInfo.updatedAt}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row style={{height: "720px"}}>
                    <Col md={6}>
                        <Container className={"mt-5 mb-2"}>
                            <h3>product Description</h3>
                        </Container>
                        <p>{productInfo.desc1}</p>
                        <h3>region {productInfo.region}</h3>
                        <Map/>
                    </Col>
                    <Col md={4}>
                        <Button  style={{width: "350px", marginBottom: "30px"}} variant={"primary"}>
                            예약하기
                        </Button>
                        <Card style={{ width: '22rem' }}>
                            <Card.Header>판매자 정보</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>지역: 뉴저지 11번가</ListGroup.Item>
                                <ListGroup.Item>판매중인 상품: 5EA</ListGroup.Item>
                                <Button>
                                    상점으로 가기
                                </Button>
                            </ListGroup>
                        </Card>



                    </Col>
                </Row>
                <Container>
                    <h3>관련상품</h3>

                        <Row className={"mt-4"}>
                            {relatedProducts && relatedProducts.map(product => (
                                <Col md-3>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img style={{height: "250px"}} variant="top" src={product.img} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}

                        {/*    <Col md-3>*/}
                        {/*        <Card style={{ width: '15rem' }}>*/}
                        {/*            <Card.Img style={{height: '250px'}} variant="top" src="https://assets.burberry.com/is/image/Burberryltd/603C9580-3210-46A0-9E90-0EA631ACCF10?$BBY_V2_SL_1x1$&wid=1251&hei=1251" />*/}
                        {/*            <Card.Body>*/}
                        {/*                <Card.Title>체크 코튼 메시 슬라이드</Card.Title>*/}
                        {/*            </Card.Body>*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*    <Col md-3>*/}
                        {/*        <Card style={{ width: '15rem' }}>*/}
                        {/*            <Card.Img variant="top" src="https://assets.burberry.com/is/image/Burberryltd/709BA03F-AA3A-4863-B55F-E86BF44E760C?$BBY_V2_SL_1x1$&wid=1251&hei=1251" />*/}
                        {/*            <Card.Body>*/}
                        {/*                <Card.Title>폴로 티셔츠</Card.Title>*/}
                        {/*            </Card.Body>*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}
                        {/*    <Col md-3>*/}
                        {/*        <Card style={{ width: '15rem' }}>*/}
                        {/*            <Card.Img variant="top" src="https://assets.burberry.com/is/image/Burberryltd/709BA03F-AA3A-4863-B55F-E86BF44E760C?$BBY_V2_SL_1x1$&wid=1251&hei=1251" />*/}
                        {/*            <Card.Body>*/}
                        {/*                <Card.Title>폴로 티셔츠</Card.Title>*/}
                        {/*            </Card.Body>*/}
                        {/*        </Card>*/}
                        {/*    </Col>*/}


                        </Row>
                </Container>
            </Container>
        </>
    );
};

export default ProductDetail;