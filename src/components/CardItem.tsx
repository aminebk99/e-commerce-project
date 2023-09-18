
import { Card, Button } from "react-bootstrap"

const CardItem = ({ id, title, price, imgURL }) => {

    return (
        <>
            <Card style={{ width: '15rem', margin: '1rem' }}>
                <Card.Img variant="top" src={imgURL} style={{ objectFit: 'cover' }} height={"200px"} />
                <Card.Body>
                    <Card.Text>
                        <h6>{title}</h6>
                    </Card.Text>
                    <Card.Title>
                        {price}
                    </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardItem