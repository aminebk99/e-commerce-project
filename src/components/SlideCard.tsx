
import { Container, Row } from 'react-bootstrap'
import CardItem from './CardItem'
import axios from 'axios';
import { useEffect, useState } from 'react';



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

    return (
        <>
            <Container
                style={{ borderRadius: ".4rem" }}
                className='shadow-sm p-3 bg-light'>
                <h1>Flash Sale</h1>
                <Row>

                    {product.map((product) => (
                        <CardItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imgURL={product.image}
                            price={product.price}
                        />

                    ))}

                </Row>



            </Container>
        </>
    )
}

export default SlideCard