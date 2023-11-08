import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"

const Checkout = () => {
    const[product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() =>{
        fetchProduct()
    }, [id])
    const fetchProduct = async ()=>{
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Container>
            <Row>
                <Col>

                    <h3>Checkout</h3>
                    <Row>
                        <Col>
                            <p>Contact information</p>
                            <span>change</span>
                        </Col>
                        <Col>
                            <p>{product.title}</p>
                            <span>change</span>
                        </Col>

                    </Row>

                </Col>
                <Col>Username and details products</Col>
            </Row>

        </Container>
    )
}

export default Checkout