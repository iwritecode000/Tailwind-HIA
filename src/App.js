import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Content from "./components/Content.js";
import Faq from "./components/Faq";
import Step from "./components/Step";
import Blog from "./components/Blog";
import Cards from "./components/Cards";
import Stastistics from "./components/Stastistics";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Content />
      <Blog />
      <Step />
      <Cards />
      <Faq />
      <Stastistics />
      <Footer />
    </>
  );
}

export default App;
