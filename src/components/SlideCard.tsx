
import { Container, Row } from 'react-bootstrap'
import CardItem from './CardItem'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SlideCard = () => {


    const [product, setProduct] = useState([]);

    useEffect(() => {
        fecthProduct();
    }, []);

    const fecthProduct = async () => {
        try {

            const response = await axios.get("https://fakestoreapi.com/products");
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
                className='shadow-sm p-3 bg-light'>
                <h1>Flash Sale</h1>
                <Row>
                <Carousel responsive={responsive}>
                    {product.map((product) => (
                        <CardItem
                        rate={product.rating.rate}
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
    )
}

export default SlideCard