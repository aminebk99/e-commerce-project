import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Header from "../components/Header";
import FilterProducts from "../components/FilterProducts";
import CardItem from "../components/CardItem";

const PRODUCTS_API = "https://fakestoreapi.com/products";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number;
    };
}

const Products = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(PRODUCTS_API);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Header />
            {loading ? (
                <Container className="d-flex align-items-center justify-content-center" style={{width: "100%" ,height: "85vh"}}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                </Container>
            ) : (
                <Container>
                    <Row>
                        <Col className="bg-light" xl={3} lg={3} md={3}>
                            <FilterProducts />
                            
                        </Col>
                        <Col xl={9} md={3} sm={1}>
                            <Row xl={3} lg={2} md={2} sm={1}>
                                {products &&
                                    products.map((product) => (
                                        <Col key={product.id}>
                                            <CardItem
                                                id={product?.id}
                                                title={product?.title}
                                                price={product?.price}
                                                imgURL={product?.image}
                                                rate={product?.rating.rate}
                                            />
                                        </Col>
                                    ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )
            }

        </>
    );
};

export default Products;
