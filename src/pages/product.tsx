import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardBuyNow from "../components/CardBuyNow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    }
}

const ProductPage = () => {
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
        }
        fetchProduct()
    }, [setProduct, id]);



    return (
        <>
            <Header />
            <Container className="w-100 mt-5 mb-5">
                <Row className="d-flex justify-content-center">
                    <Col xl={3} sm={12} className="mb-5 bg-light rounded-4">
                        {product && (
                            <img src={product.image} alt={product.title} style={{ width: "100%" }} />
                        )}
                    </Col>
                    <Col xl={4} sm={12}>
                        {product && (
                            <>
                                <h4>{product.title}</h4>
                                <span className="me-3">
                                    <FontAwesomeIcon style={{ color: "#ffaa28" }} icon={faStar} /> {product.rating.rate}
                                </span>
                                <span>Sold {product.rating.count}</span>
                                <h6 className="mt-3 mb-3">${product.price}.00</h6>
                                <h6 className="mb-3 mt-3">Category : <span>{product.category}</span> </h6>
                                <h4>Description :</h4>
                                <p>
                                    {product.description}
                                </p>
                            </>
                        )}
                    </Col>
                    <Col className="bg-light rounded-4 shadow-sm" xl={2}>
                        {product && (
                            <CardBuyNow id={product.id} title={product.title} price={product.price} imgURL={product.image} />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductPage;
