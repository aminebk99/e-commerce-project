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
                    <Row xl={1}>
                        <Col >
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
                    <Row xl={2}>
                        <div className="shadow p-4 rounded d-flex flex-column">
                            <h4>Tonny Toys</h4>
                            <span className="text-muted">jakarta Timur</span>
                            <div className="d-flex mb-4 mt-4 align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={product?.image} width={'50px'} alt={product?.image} />
                                    <h6 className="ml-4">{product?.title}</h6>
                                </div>
                                <h4>{product?.price}</h4>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={product?.image} width={'50px'} alt={product?.image} />
                                    <div className="ml-4">
                                    <h6 className="ml-4">{product?.title}</h6>
                                    <span className="text-muted" style={{fontSize:('.8rem')}}>item</span>
                                    </div>
                                </div>
                                <h4>{product?.price}</h4>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
