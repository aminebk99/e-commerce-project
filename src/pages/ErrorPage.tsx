import { Button, Col, Container, Row } from "react-bootstrap";
import logo from '../assets/react.svg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use

const ErrorPage = () => {
    return (
        <Container
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}>
            <Row>
                <Col xl={12} className="mb-3 d-flex align-items-center justify-content-center">
                    <img src={logo} alt="" style={{ width: '100px' }} />
                </Col>
                <Col xl={12} className="d-flex align-items-center justify-content-center">
                    <h4>Error this page not found</h4>
                </Col>
                <Col xl={12} className="d-flex align-items-center justify-content-center">
                    <Link to={"/home"}>
                        <Button>
                            <FontAwesomeIcon icon={faArrowLeftLong} /> back to page Home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;
