import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Header />
            <Container style={{height: '80vh'}} className='w-100'>
                <Row className='w-100 h-100 d-flex justify-content-center align-items-center'>
                    <Col xl={6}>

                        <Form className='shadow-sm p-3' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} className='mb-3' md="12" controlId="validationCustom01">
                                    <Form.Label>E-mail :</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="E-mail..."
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mb-3' as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="password..."
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Row className='text-center'>
                                    <span>If you don't have account? <Link to={'/register'}>Create account</Link></span>
                                </Row>

                            </Row>


                            <Button type="submit" className='w-100'>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
