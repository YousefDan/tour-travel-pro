import { useContext } from "react";
import Header from "./components/header/Header";
import TravelContext from "./context/context";
import "./app.scss"
import Intro from "./components/intro/Intro";


const App = () => {
 const {darkMode} = useContext(TravelContext)
  return ( <section className={darkMode && "active"}>
    <Header />
    <Intro />
  </section> );
}
 
export default App;