import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <>
            <Container fluid className='d-flex justify-content-between p-3 bg-light'>
                <div>
                    <span>Call us : (00) 33 169 7720</span>
                </div>
                <div>
                    <span>Take 35% off when you spend $99 or more with code "Emmable99"<a href="" style={{ color: "#5A4098" }}>more details</a></span>
                </div>
                <div >
                    <span className='about'>About Emmable</span>
                    <span>helps</span>
                </div>

            </Container>
            <Container fluid className=' mb-4 shadow-sm d-flex align-items-center justify-content-between p-3'>
                <div className="logo">
                    <Link to={'/'}>

                        Emmable

                    </Link>
                </div>
                <div
                    className="search-bar" style={{ width: "50%" }}>
                    <input className='pl-2'
                        type="search" placeholder='Search Here...' />
                </div>
                <div className="cart">
                    {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
                    <span>Cart</span>
                    <Link to={'/login'}>
                        <Button

                            style={{
                                marginLeft: '1rem',
                                background: 'none',
                                border: "solid #5A4098 1px",
                                color: '#5A4098'
                            }}>Login</Button>
                    </Link>
                </div>

            </Container>
        </>
    )
}

export default Header