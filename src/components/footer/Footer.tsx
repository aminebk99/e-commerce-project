import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <Container fluid className=" bg-light shadow-sm mt-5">
        <Container>
          <Row>

          <Row md={2}>
            <Col>


              <h3>Emmable</h3>
              <div>

                  <span>Apple Store</span>
                  <span>Play Store</span>

                </div>
            </Col>
            </Row>
            <Row md={1}>
              <Col>
                

              </Col>
            </Row>

          </Row>
         


          
        </Container>

      </Container>
    </>
  )
}

export default Footer