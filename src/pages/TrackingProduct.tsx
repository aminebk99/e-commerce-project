import { Col, Container, Row } from "react-bootstrap"
import Header from "../components/Header"

const TrackingProduct = () => {
    return (
        <>
            <Header />
            <Container className="d-flex align-items-center justify-content-center" style={{ width: "100%", height: "85vh" }}>
                <Row xl={2} className="w-100 bg-primary">
                    <Col className="d-flex justify-content-between">
                    <h4>Tracking order</h4>
                    <span>Delivery</span>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default TrackingProduct