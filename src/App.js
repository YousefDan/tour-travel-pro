import { useContext } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import TravelContext from "./context/context";
import Intro from "./components/intro/Intro";
import BookForm from "./components/book-form/BookForm";
import Packages from "./components/packages/Packages";


const App = () => {
 const {darkMode} = useContext(TravelContext)
  return ( <section className={darkMode && "active"}>
    <Header />
    <Intro />
    <BookForm />
    <Packages />
  </section> );
}
 
export default App;