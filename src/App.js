import Part1 from "./components/Part1";
import About from "./components/About";
import Tecnos from "./components/Tecnos";
import Conocimientos from "./components/Conocimientos";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
        <Part1/>
        <About/>
        <Tecnos/>
        <Conocimientos/>
        <Services/>
        <Portfolio/>
        <Contacto/>
    </div>
  );
}

export default App;
