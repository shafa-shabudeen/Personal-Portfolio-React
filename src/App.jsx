// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import About from "./components/About/About";
import Skills from "./components/About/Skills/Skills";



function App(){
  return(
    <div className="app">
    <Header />
    {/* <br /> */}
    <About />
    <Skills />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nesciunt.</p> <br /><br />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, veniam!</p> <br /><br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod.</p> <br /><br />         
    </div>
  );
}

export default App;
