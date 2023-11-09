import { Container, Spinner } from "react-bootstrap"

const SpinnerLoading = () => {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ width: "100%", height: "85vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

      </Container>
    </>
  )
}

export default SpinnerLoading