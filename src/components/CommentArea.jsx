import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmFlOTcxYWZhZjAwMTkxNTY2YjgiLCJpYXQiOjE3MTA0MjI3NjEsImV4cCI6MTcxMTYzMjM2MX0.TIycw-4G8Tvjqp1WCEwvJ_zNu65Jvg-b6hQXuYpuYLg",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema chiamata Api");
        }
      })
      .then((commentsFromApi) => {
        // gestisci i dati qui
        console.log("Comments", commentsFromApi);
        this.setState({
          comments: commentsFromApi,
        });
      })
      .catch((error) => {
        // gestisci gli errori qui
        console.error("Fetch error:", error);
      });
  };
  componentDidMount() {
    // componentDidMount è un METODO DI LIFECYCLE
    // questo metodo viene eseguito in AUTOMATICO da React, quando? un istante dopo il PRIMO montaggio del componente
    console.log("IO SONO COMPONENTDIDMOUNT");
    // io qui dentro farò la mia fetch, recupererò le prenotazioni e riempirò lo stato
    // componentDidMount è GARANTITO essere eseguito UNA VOLTA SOLA, dopo il PRIMO render.
    this.fetchComments();
  }

  render() {
    // Renderizza i commenti qui, usando this.state.comments
    return (
      <>
        <CommentList commento={this.state.comments}></CommentList>
      </>
    );
  }
}
export default CommentArea;
