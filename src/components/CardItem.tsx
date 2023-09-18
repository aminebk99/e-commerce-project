
import { Card, Button } from "react-bootstrap"

const CardItem = ({id, title, price, imgURL}) => {

    return (
        <>
            <Card style={{ width: '18rem', margin: '1rem'}}>
                <Card.Img variant="top" src={imgURL} style={{objectFit: 'cover'}} height={"200px"}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardItem