interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
}
import { Col, Row } from "react-bootstrap"


interface CheckoutCartProps {
    product: Product | null;
}

const CheckoutCart: React.FC<CheckoutCartProps> = ({ product }) => {
    return (

        <div className="shadow p-4 rounded d-flex flex-column">
            <h4>Tonny Toys</h4>
            <span className="text-muted">jakarta Timur</span>

            <div className="d-flex align-items-center mt-4 mb-4 justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={product?.image} width={'50px'} alt={product?.image} />
                    <div className="ml-2">
                        <h6>{product?.title}</h6>
                        <span className="text-muted" style={{ fontSize: '.8rem' }}>1 item</span>
                    </div>
                </div>
                <h4>${product?.price}</h4>
            </div>

            <hr className="border" />
            <div className="mb-4 mt-4 d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    style={{ height: '3.2rem', outline: 'none' }}
                    placeholder="Enter gift code or discount code"
                    className="rounded w-100 border p-2"
                />

            </div>
            <hr className="border" />
            <div className="mt-2">
                <h3>Shopping summary</h3>
                <Row className="w-100 mt-4 d-flex flex-column">
                    <Col className="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span>${product?.price}</span>
                    </Col>
                    <Col className="d-flex justify-content-between mb-2">
                        <span>Tax</span>
                        <span>$0</span>
                    </Col>
                    <Col className="d-flex justify-content-between mb-4">
                        <span>Shipping</span>
                        <span>$0</span>
                    </Col>
                    <hr className="border" />
                    <Col className="d-flex justify-content-between mt-2 mb-2">
                        <span><h4>Total</h4></span>
                        <span>${product?.price}</span>
                    </Col>
                </Row>
            </div>

        </div>

    )
}

export default CheckoutCart