import { Container, Row } from 'react-bootstrap'
import CardItem from './CardItem'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: {
        rate: number;
    };
}

const SlideCard: React.FC = () => {
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Container
                style={{ borderRadius: ".4rem" }}
                className='shadow-sm mb-4 p-3 bg-light'>
                <h2>Flash Sale</h2>
                <Row>
                    <Carousel responsive={responsive}>
                        {product.map((product) => (
                            <CardItem
                                rate={product?.rating?.rate}
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgURL={product.image}
                                price={product.price}
                            />
                        ))}
                    </Carousel>
                </Row>
            </Container>
        </>
    );
}

export default SlideCard;
