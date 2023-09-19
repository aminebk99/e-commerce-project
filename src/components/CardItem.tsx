import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button } from "react-bootstrap";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardItem: React.FC<{ id: number; title: string; price: number; imgURL: string; rate: number }> = ({ title, price, imgURL, rate }) => {
    return (
        <Card 
        className="shadow"
        style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={imgURL} style={{ objectFit: 'cover' }} height={"200px"} />
            <Card.Body>
                <Card.Text>
                    <h6>{title}</h6>
                </Card.Text>
                <Card.Title>
                    ${price}
                </Card.Title>
                <Card.Text>
                    <span><FontAwesomeIcon style={{ color: "#ffaa28" }} icon={faStar} /> {rate}</span>
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    )
}

export default CardItem;
