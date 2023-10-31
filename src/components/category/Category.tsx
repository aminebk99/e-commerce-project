import { Col, Container, Row } from "react-bootstrap";
import './category.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/categories");
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Container className="mt-5">
                <h2 className="text-center">Popular Categories</h2>
                <Container className="p-0 mb-4">
                    <Row xl={4} lg={3} md={2} xs={1} className="w-100">
                        {categories.map((cat, index) => (
                            <Col key={index} className="d-flex justify-content-center">
                                <div className="cards bg-light shadow-sm">
                                    <span>Icons</span>
                                    <h5>{cat}</h5>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Category;
