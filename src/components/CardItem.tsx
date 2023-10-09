import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button } from "react-bootstrap";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const CardItem: React.FC<{ id: number; title: string; price: number; imgURL: string; rate: number }> = ({ id, title, price, imgURL, rate }) => {
    return (
        <Card
            className="shadow"
            style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={imgURL} style={{ objectFit: 'cover' }} height={"200px"} />
            <Card.Body>
                <Card.Title>
                    <h6>{title}</h6>
                </Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Card.Text>
                    <span><FontAwesomeIcon style={{ color: "#ffaa28" }} icon={faStar} /> {rate}</span>
                </Card.Text>
                <Link to={`/product/${id}`}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CardItem;
