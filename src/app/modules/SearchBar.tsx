import {
  Container, Row, Col,
  Button,
  Form,
} from 'react-bootstrap';

export default function SearchBar () {
  return (
    <Container>
      <Row>
        <Col xs={2}>Chords</Col>
        <Col xs md={10}>
          <Form>
            <Form.Control id="searchInput" placeholder="Song name..." />
          </Form>
        </Col>
        <Col xs="auto" className="d-block d-md-none">
          <Button variant="secondary">三</Button>
        </Col>
      </Row>
    </Container>
  );
}
