import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Container } from "react-bootstrap";


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


    return (
        <Container>
            <h2>이름: {productInfo.name}</h2>
            <h2>가격: {productInfo.price}</h2>
            <h2>브랜드: {productInfo.brand}</h2>
            <h2>거래가능 지역: {productInfo.region}</h2>
        </Container>
    );
};

export default ProductDetail;