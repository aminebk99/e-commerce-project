import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardBuyNow from "../components/CardBuyNow";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}



const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header />
            <Container className="w-100 p-0">
                <Row className="w-100">
                    <Col xl={3} sm={12} className="mb-5">
                        {product && (
                            <img src={product.image} alt={product.title} style={{ width: "100%" }} />
                        )}
                    </Col>
                    <Col xl={4} sm={12}>
                        {product && (
                            <>
                                <h4>{product.title}</h4>
                                <h6>${product.price}.00</h6>
                            </>
                        )}
                    </Col>
                    <Col className="bg-light" xl={2}>
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
