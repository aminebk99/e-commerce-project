import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"

const Checkout = () => {
    const { id } = useParams();
    return (
        <Container>
            <Row>
                <Col>

                    <h3>Checkout</h3>
                    <Row>
                        <Col>
                            <p>Contact information</p>
                            <span>change</span>
                        </Col>

                    </Row>

                </Col>
                <Col>Username and details products</Col>
            </Row>

        </Container>
    )
}

export default Checkout