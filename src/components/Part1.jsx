import { useState, useEffect } from "react"

export default function Part1() {

  const [activeSection, setActiveSection] = useState('inicio');
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentSection = findCurrentSection(); // función que encuentre la sección actual
  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  return (
    <div className='scrollEfect w-screen h-screen txtSm'>
      {/* Header */}
      <header className='txtSecondary fixed z-20 top-0 left-0 bg-c_Ebony w-[calc(100%-1.3vw)] h-1/10 flexAllCenter justify-around border-b-2 border-c_Mischka'>
        <div className='w-1/10 h-full p-3'>
            <img alt="Logo" className='w-6/10 h-full' src='/Logo.png'/>
        </div>
        <div className='flexAllCenter justify-around w-5/10'>
          <a className={activeSection==="about"?"activeA":"inactiveA"} href="#About" onClick={()=>setActiveSection("about")}>Sobre mi</a>
          <a className={activeSection==="conoc"?"activeA":"inactiveA"} href="#Conocimientos" onClick={()=>setActiveSection("conoc")}>Conocimientos</a>
          <a className={activeSection==="portfolio"?"activeA":"inactiveA"} href="#Portafolio" onClick={()=>setActiveSection("portfolio")}>Portafolio</a>
          <a className={activeSection==="contact"?"activeA":"inactiveA"} href="#Contacto" onClick={()=>setActiveSection("contact")}>Contacto</a>
        </div>
      </header>
      <div className="w-full h-1/10"></div>
      {/* Portada */}
      <section className="relative bg_Portada w-full h-9/10">
        <div className='absolute bottom-8 left-8 txtXl glassDark w-2/5 p-3 text-c_Mischka'>
          <p className='txtSecondary txtXLg pb-1 text-center'>{"-- Josué Guzman --"}</p>
          <p className='txtSecondary txtLg text-center'>Desarrollador web</p>
          <p className='txtSm text-center'>Autodidacta, junior, frontend, backend, nodeJs, .Net.</p>
        </div>
      </section>
    </div>
  )
}
