
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import CheckoutCart from "../components/CheckoutCart";
import CheckoutForm from "../components/CheckoutForm";
import SpinnerLoading from "../components/SpinnerLoading";

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
    const [loading, setLoading] = useState(false)
    // const [tax, setTax] = useState(10);
    // const [shipping, setShipping] = useState(10);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false)
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        };
        fetchProduct();
    }, [id]);
    // const total = (tax + shipping + product?.price).toFixed(2);
    return (
        <>
            <Header />
            {
                loading ? (
                    <SpinnerLoading />

                ):(

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
                                <CheckoutForm />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4}>
                        <Row>
                            <CheckoutCart product={product} />
                        </Row>
                    </Col>
                </Row>
            </Container>
                )
            }
        </>
    );
};

export default Checkout;
