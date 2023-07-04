import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header&Footer/Header";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import 'animate.css'
function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
