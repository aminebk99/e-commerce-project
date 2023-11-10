import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CheckoutForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupFirstname">
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="Lastname">
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupAddress">
                <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCity">
                <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupFirstname">
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupPostalCode">
                        <Form.Control type="text" placeholder="Postal code" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupPhone">
                <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Row className="w-100 ">
                <Col className="d-flex justify-content-between align-items-center mt-4">
                    <Link
                        className="text-decoration-none text-dark"
                        to={"/products"}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Return to cart
                    </Link>
                    <Link to={"/thanks"}>
                        <Button style={{ padding: '10px 20px', border: 'none', background: 'rgb(90, 64, 152)' }}>Continue</Button>
                    </Link>
                </Col>
            </Row>

        </Form>

    )
}

export default CheckoutForm
