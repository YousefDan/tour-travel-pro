import { useContext } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import TravelContext from "./context/context";
import Intro from "./components/intro/Intro";
import BookForm from "./components/book-form/BookForm";
import Packages from "./components/packages/Packages";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Review from "./components/review/review";

const App = () => {
  const { darkMode } = useContext(TravelContext);
  return (
    <section className={darkMode ? "active" : ""}>
      <Header />
      <Intro />
      <BookForm />
      <Packages />
      <Services />
      <Pricing />
      <Review />
    </section>
  );
};

export default App;
