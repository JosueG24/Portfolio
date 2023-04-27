import Part1 from "./components/Part1";
import About from "./components/About";
import Tecnos from "./components/Tecnos";
import Conocimientos from "./components/Conocimientos";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
    <div className="App flex h-[calc(100vh-30px)]
    md:h-screen">
      {/* Barra lateral */}
      {/* <div className="w-[calc(3vw)] h-screen pt-[calc(15vh)] pb-[calc(5vh)] px-0 fixed bg-c_Ebony">
        <div className="w-full h-full leftBarr"></div>
      </div>
      <div className="w-[calc(3vw)] h-screen bg-c_Dark"></div> */}
      {/* Cuerpo */}
      <div className="spContainer bg_Stars h-full
      md:bg_StarsMd
      lg:bg_StarsLg">
        <Part1/>
        <About/>
        {/* <Tecnos/> */}
        <Conocimientos/>
        <Services/>
        <Portfolio/>
        <Contacto/>
      </div>
    </div>
    <div className="bg-c_Ebony h-[calc(30px)] z-50 relative
    md:hidden"></div>
    </>
  );
}

export default App;
