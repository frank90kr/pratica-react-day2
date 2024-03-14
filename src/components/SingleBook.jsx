// Crea un componente SingleBook utilizzando una funzione. Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).

// Creiamo un componente che mostra un libro sottoforma di card

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  //La mia props sarà bookJson
  //props.bookJson è l'oggetto del libro
  render() {
    return (
      //quì dovevamo ritornare un singolo libro
      //prendiamo una card di bootstrap
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={this.props.bookJson.img}
          style={{ height: "300px", objectFit: "cover" }}
          onClick={() => {
            this.setState({
              selected: this.state.selected ? false : true, //!this.state.selected
            });
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.bookJson.title}</Card.Title>
          <Card.Text>{this.props.bookJson.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
