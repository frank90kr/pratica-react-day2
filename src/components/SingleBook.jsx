import { Component } from "react";
import items from "../data/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = { currentBook: items[0] };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {this.state.currentBook.title}
              </Card.Title>
              <Card.Img variant="top" src={this.state.currentBook.img} className="cover object-fit-cover h-100 w-25" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SingleBook;
