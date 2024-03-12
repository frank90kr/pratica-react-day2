import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AllTheBooks() {
  return (
    <Container>
      <h1 className="">Shop</h1>
      <Row>
        {items.map((book, index) => {
          return (
            <Col xs={12} md={6} lg={4} xl={2} key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default AllTheBooks;
