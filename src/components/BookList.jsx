// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import items from "../data/fantasy.json";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Component } from "react";
// import SingleBook from "./SingleBook";

// class BookList extends Component {
//   render() {
//     return this.props.fantasy.map((libro) => {
//       return <SingleBook book={libro} />;
//     });
//   }
// }

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Component } from "react";
import items from "./data/fantasy.json";

class BookList extends Component {
  state = {
    categoria: this.props.arrayOfBooks,
  };
  render() {
    return (
      <Container>
        <h1 className="text-center">Romance Books</h1>
        <Button onClick={() => this.setState({ categoria: items })}>cliccami qui!!</Button>
        <Row>
          {this.state.categoria.map((book) => (
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card style={{ height: "20rem" }}>
                <Card.Img variant="top" src={book.img} className="object-fit-cover h-50 w-100" />
                <Card.Body>
                  <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {book.title}
                  </Card.Title>
                  <Card.Text className="d-flex">{book.price}</Card.Text>

                  <Button onClick={() => this.setState({ selected: true })} variant="success opacity-75">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
