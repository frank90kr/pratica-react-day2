import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook.jsx";
import BookList from "./components/BookList.jsx";
import fantasyBook from "./data/fantasy.json";
import CommentArea from "./components/CommentArea.jsx";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <SingleBook bookJson={fantasyBook[0]} />
      <CommentArea></CommentArea>
      <BookList listOfBooks={fantasyBook} />
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
