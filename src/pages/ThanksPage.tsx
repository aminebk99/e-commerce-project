import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const ThanksPage = () => {
    return (
        <>
            <Container style={{ height: "100vh" }} className="w-100 d-flex align-items-center justify-content-center">
                <Container className="shadow-sm rounded p-5 d-flex flex-column align-items-center" style={{ position: "relative" }}>
                    <div className="check  shadow d-flex align-items-center justify-content-center rounded-circle" style={{ width: "100px", height: "100px" }}>
                        <FontAwesomeIcon icon={faCircleCheck} shake size="xl" style={{ color: "#ff7050", }} />
                    </div>
                    <h1>Thanks for your order!</h1>
                    <span className="mt-2">Thanks for placing order "number of order" </span>
                    <span className="mb-5">We will send you a notification within 2days when it ships.</span>
                    <p style={{ fontSize: '1.3rem' }} className="mb-5 text-center">
                        Get in touch with us if you have any question or concerns.
                    </p>
                    <Row className="d-flex" style={{ width: "fit-content" }}>
                        <Col>
                            <Link to={"/products"} >
                                <Button
                                    style={{
                                        background: 'none',
                                        border: "solid #5A4098 1px",
                                        color: '#5A4098'
                                    }}
                                >Go back shopping</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/tracking"}>
                                <Button
                                    style={{
                                        background: '#5A4098',
                                        border: 'none',
                                        color: 'white'
                                    }}
                                >Tracking order</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default ThanksPage
