import React from 'react'
import { Container } from 'react-bootstrap'
import CardItem from './CardItem'

const SlideCard = () => {
    return (
        <>
            <Container 
            style={{borderRadius: ".4rem"}}
            className='shadow-sm p-3 bg-light'>
                <h1>Flash Sale</h1>
                <CardItem />

            </Container>
        </>
    )
}

export default SlideCard