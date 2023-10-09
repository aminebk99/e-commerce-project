import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardBuyNow: React.FC<{ id: number; title: string; price: number; imgURL: string }> = ({ id, title, price, imgURL }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(price);
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value);
        if (newQuantity >= 1 && newQuantity <= 6) {
            setTotalPrice(price * newQuantity);
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="card-buy rounded-4">
            <Row className="w-100">
                <Col xl={12}
                    style={{ borderBottom: 'solid 1px rgb(230, 230, 230)' }}
                    className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                    <img src={imgURL} alt={title} style={{ width: "25%" }} className="mb-3" />
                    <span className="mb-3 mt-3">In Stock</span>

                </Col>
                <Col className="mb-3 d-flex justify-content-between align-items-center" xl={12}>
                    <span>Quantity :</span>
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        style={{ width: "25%", borderRadius: '4px', border: 'none' }}
                        min={quantity}
                        max={6}
                    />
                </Col>
                <Col className="mb-3 d-flex justify-content-between align-items-center">
                    <span>Subtotal: </span>
                    <span>${totalPrice}</span>
                </Col>
                <Col xl={12} className="mb-3 d-flex justify-content-center align-items-center">
                <Link to={`/addtocart/${id}`} className="w-100">
                    <Button
                        style={{
                            background: 'none',
                            border: "solid #5A4098 1px",
                            color: '#5A4098'
                        }}
                        className="w-100">Add To Cart</Button>
                        </Link>
                </Col>
                <Col xl={12} className="mb-3 d-flex justify-content-center align-items-center">
                    <Link to={`/checkout/${id}`} className="w-100">
                        <Button
                            style={{
                                background: '#5A4098',
                                border: 'none',
                                color: 'white'
                            }}
                            className="w-100">
                            Buy Now
                        </Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default CardBuyNow;
