import { Container } from "react-bootstrap";
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
            <Container className="p-0 mb-4 d-flex justify-content-between">
                {categories.map((cat, index) => (

                    <div key={index} className="cards bg-light shadow-sm">
                        <span>Icons</span>
                        <h5>{cat}</h5>
                    </div>
                ))}
            </Container>
        </>
    );
};

export default Category;
