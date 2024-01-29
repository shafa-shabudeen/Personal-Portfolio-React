// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";



function App(){
  return(
    <div className="app">
    <Header />
    {/* <br /> */}
    <About />
    <Skills />
    <Experience />
    <br />
    <br />
    <Projects />
    </div>
  );
}

export default App;
