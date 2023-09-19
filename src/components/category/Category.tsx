import { Container } from "react-bootstrap"
import './category.css'
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchCatgories();
    }, []);

    const fetchCatgories = async() =>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products/categories");
            setCategory(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Container className="p-0 mb-4 d-flex justify-content-between">
                {category.map((category) => (
                    <div className="cards bg-light shadow-sm">
                    <span>Icons</span>
                    <h5>{category}</h5>
                </div>

                ))}
                
                
            </Container>
        </>
    )
}

export default Category