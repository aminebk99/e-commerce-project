import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"

const SlideHeader = () => {
    return (
        <>
            <Container 
            style={{borderRadius: "1rem", overflow: "hidden"}}
            className='shadow-sm mb-4 p-0'>



                <Carousel>
                    <Carousel.Item>

                        <img src={img1} alt="" style={{ width: "100%" }} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt="" style={{ width: "100%" }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt="" style={{ width: "100%" }} />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default SlideHeader