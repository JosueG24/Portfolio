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
      <section className="bg_Portada w-full h-9/10">
        <div className='relative top-1/2 left-20 txtXl'>
          <p className='txtSecondary txtXl'>Soy Josue Guzman</p>
          <p className=''>Desarrollador Web</p>
          <button className=''>ImAButton</button>
        </div>
      </section>
    </div>
  )
}
