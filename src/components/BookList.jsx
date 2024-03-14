// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  //Booklist riceve dalle props un Array di libri
  //la riceve sottoforma di prop chiamata "listOfBooks"
  return (
    <Container>
      <Row className="gy-4">
        {props.listOfBooks.map((oneBook) => {
          //oneBook è un oggetto libro
          return (
            <Col key={oneBook.asin} xs={12} md={4} lg={3}>
              <SingleBook bookJson={oneBook} />;
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
