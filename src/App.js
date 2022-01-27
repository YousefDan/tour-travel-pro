import { useContext } from "react";
import Header from "./components/header/Header";
import TravelContext from "./context/context";
import "./app.scss"


const App = () => {
 const {darkMode} = useContext(TravelContext)
  return ( <section className={darkMode && "active"}>
    <Header />
  </section> );
}
 
export default App;