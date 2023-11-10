import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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
    // const [tax, setTax] = useState(10);
    // const [shipping, setShipping] = useState(10);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);
    // const total = (tax + shipping + product?.price).toFixed(2);

    return (
        <Container className="p-0 w-100">
            <Row className="d-flex justify-content-between">
                <Col xl={7} className="me-5">
                    <h3>Checkout</h3>
                    <Row >
                        
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4}>
                    <Row>
                        <div className="shadow p-4 rounded d-flex flex-column">
                            <h4>Tonny Toys</h4>
                            <span className="text-muted">jakarta Timur</span>

                            <div className="d-flex align-items-center mt-4 mb-4 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={product?.image} width={'50px'} alt={product?.image} />
                                    <div className="ml-2">
                                        <h6>{product?.title}</h6>
                                        <span className="text-muted" style={{ fontSize: '.8rem' }}>1 item</span>
                                    </div>
                                </div>
                                <h4>{product?.price}</h4>
                            </div>

                            <div className="d-flex align-items-center mt-4 mb-4 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={product?.image} width={'50px'} alt={product?.image} />
                                    <div className="ml-4">
                                        <h6 className="ml-4">{product?.title}</h6>
                                        <span className="text-muted" style={{ fontSize: ('.8rem') }}>item</span>
                                    </div>
                                </div>
                                <h4>{product?.price}</h4>
                            </div>
                            <hr className="border" />
                            <div className="mb-4 mt-4 d-flex align-items-center justify-content-center">
                                <input
                                    type="text"
                                    style={{ height: '3.2rem', outline: 'none' }}
                                    placeholder="Enter gift code or discount code"
                                    className="rounded w-100 border p-2"
                                />

                            </div>
                            <hr className="border" />
                            <div className="mt-2">
                                <h3>Shopping summary</h3>
                                <Row className="w-100 mt-4 d-flex flex-column">
                                    <Col className="d-flex justify-content-between mb-2">
                                        <span>Subtotal</span>
                                        <span>${product?.price}</span>
                                    </Col>
                                    <Col className="d-flex justify-content-between mb-2">
                                        <span>Tax</span>
                                        <span>$0</span>
                                    </Col>
                                    <Col className="d-flex justify-content-between mb-4">
                                        <span>Shipping</span>
                                        <span>$0</span>
                                    </Col>
                                    <hr className="border" />
                                    <Col className="d-flex justify-content-between mt-2 mb-2">
                                        <span><h4>Total</h4></span>
                                        <span>${product?.price}</span>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
