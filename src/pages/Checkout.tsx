import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
}

const Checkout = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct(); // Call the fetchProduct function inside useEffect
    }, [id]); // Add id to the dependency array

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
                            {product && (
                                <div>
                                    <p>{product.title}</p>
                                    <span>{product.title}</span>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Col>
                <Col>Username and details products</Col>
            </Row>
        </Container>
    );
};

export default Checkout;
