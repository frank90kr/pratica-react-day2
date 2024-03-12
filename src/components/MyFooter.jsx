import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyFooter() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body className="bg-dark">
        <Card.Title className="text-white">Special title treatment</Card.Title>
        <Card.Text className="text-white">
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="bg-dark text-white">2 days ago</Card.Footer>
    </Card>
  );
}

export default MyFooter;
