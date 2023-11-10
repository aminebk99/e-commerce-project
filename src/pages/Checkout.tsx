import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import CheckoutCart from "../components/CheckoutCart";

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
        <>
            <Header />
            <Container className="p-0 w-100">
                <Row className="d-flex justify-content-between">
                    <Col xl={7} className="me-5">
                        <h3>Checkout</h3>
                        <Row >

                            <Col>
                                <Row className="d-flex w-100">
                                    <Col className="d-flex justify-content-between mt-4">
                                        <h4>Contact information</h4>
                                        <span>Already have an account?
                                            <Link className="text-decoration-none"
                                                style={{ color: 'rgb(90, 64, 152)' }}
                                                to={"/login"}> log in</Link>
                                        </span>
                                    </Col>
                                </Row>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Control type="email" placeholder="Your email" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupFirstname">
                                                <Form.Control type="text" placeholder="First name" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="Lastname">
                                                <Form.Control type="text" placeholder="Last name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formGroupAddress">
                                        <Form.Control type="text" placeholder="Address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupCity">
                                        <Form.Control type="text" placeholder="City" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupFirstname">
                                                <Form.Control type="text" placeholder="First name" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupPostalCode">
                                                <Form.Control type="text" placeholder="Postal code" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formGroupPhone">
                                        <Form.Control type="text" placeholder="Phone" />
                                    </Form.Group>
                                    <Row className="w-100 ">
                                        <Col className="d-flex justify-content-between align-items-center mt-4">
                                            <Link
                                                className="text-decoration-none text-dark"
                                                to={"/products"}>
                                                <FontAwesomeIcon icon={faAngleLeft} /> Return to cart
                                            </Link>
                                            <Button style={{ padding: '10px 20px', border: 'none', background: 'rgb(90, 64, 152)' }}>Continue</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4}>
                        <Row>
                            <CheckoutCart product={product}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Checkout;
