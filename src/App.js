import Part1 from "./components/Part1";
import About from "./components/About";
import Tecnos from "./components/Tecnos";
import Conocimientos from "./components/Conocimientos";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App flex">
      {/* Barra lateral */}
      <div className="w-[calc(3vw)] h-screen pt-[calc(15vh)] pb-[calc(5vh)] px-0 fixed bg-c_Ebony">
        <div className="w-full h-full leftBarr"></div>
      </div>
      <div className="w-[calc(3vw)] h-screen bg-c_Dark"></div>
      {/* Cuerpo */}
      <div className="spContainer">
        <Part1/>
        <About/>
        {/* <Tecnos/> */}
        <Conocimientos/>
        <Services/>
        <Portfolio/>
        <Contacto/>
      </div>
    </div>
  );
}

export default App;
