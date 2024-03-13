import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import items from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <SingleBook></SingleBook>
      <BookList arrayOfBooks={items} />
      {/* <AllTheBooks></AllTheBooks> */}
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
