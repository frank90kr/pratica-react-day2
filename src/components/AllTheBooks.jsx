import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AllTheBooks.css";

function AllTheBooks() {
  return (
    <Container fluid>
      <h1 className="text-dark mx-5">Shop</h1>
      <Row className="mx-4">
        {items.map((book, index) => {
          return (
            <Col xs={12} md={6} lg={3} key={index} className="py-3">
              <Card style={{ height: "27rem" }} className="body-card">
                <Card.Img variant="top" src={book.img} className="cover object-fit-cover h-50 w-100" />
                <Card.Body className="border">
                  <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.asin}</Card.Text>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text className="fw-bold">{book.price}</Card.Text>
                  <Button variant="dark" size="sm" className="p-1">
                    Acquista subito
                  </Button>
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
