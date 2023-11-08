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
        fetchProduct();
    }, [id]);

    return (
        <Container>
            <Row >
                <Col xl={2}>
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
                                </div>
                            )}
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div>
                            <Col>
                                <h4>Tonny toys</h4>
                                <span className="mute">Jakarta Timur</span>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-between bg-primary mt-5">
                                <div className="d-flex align-items-center">
                                    <img src={product?.image} width={'80px'} alt={product?.image} />
                                    <h6 className="d-inline-block ml-5">{product?.title}</h6>
                                </div>
                                <h4>{product?.price}</h4>
                            </Col>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
