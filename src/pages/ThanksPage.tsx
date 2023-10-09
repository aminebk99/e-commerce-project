import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const ThanksPage = () => {
    return (
        <>
        <Container>
            <div className="thanks-card">
<h1>Thanks for your order!</h1>
<span>Thanks for placing order "number of order" </span>
<span>We will send you a notification within 2days when it ships.</span>
<p>
    Get in touch with us if you have any question or concerns.
</p>
<Row>
    <Link to={"/products"}>
    <Button>Go to back shopping</Button>
    </Link>
    <Link to={"/tracking"}>
        <Button>Tracking order</Button>
    </Link>
</Row>
            </div>
            
        </Container>

        </>
    )
}

export default ThanksPage
