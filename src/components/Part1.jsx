import { useState } from "react"

export default function Part1() {

  const [activeSection, setActiveSection] = useState('inicio');
  const [HambButton, setHambButton] = useState(false)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentSection = findCurrentSection(); // función que encuentre la sección actual
  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  return (
    <div className='scrollEfect w-screen h-full txtSm'>
      {/* Header */}
      <header className='txtSecondary fixed z-20 top-0 left-0 bg-c_Ebony w-screen h-1/10 flexAllCenter justify-around border-b-2 border-c_Mischka'>
        <div className='w-2/10 h-full p-3
        lg:w-1/10'>
            <img alt="Logo" src='/Logo.png' className='w-9/10 h-full
            lg-w-6/10'/>
        </div>
        <div onClick={()=>setHambButton(!HambButton)} className='w-1/10 h-full
        lg:hidden'>
            <BurguerMenu/>
        </div>
        <nav className={HambButton == false ? " burguerDes lg:txtMd"
                                            : " burguerAct sm:txtXl lg:txtMd"}>
          <a className={activeSection==="about"?"activeA":"inactiveA"} href="#About" onClick={()=>{setActiveSection("about"); setHambButton(!HambButton)}}>Sobre mi</a>
          <a className={activeSection==="conoc"?"activeA":"inactiveA"} href="#Conocimientos" onClick={()=>{setActiveSection("conoc"); setHambButton(!HambButton)}}>Conocimientos</a>
          <a className={activeSection==="portfolio"?"activeA":"inactiveA"} href="#Portafolio" onClick={()=>{setActiveSection("portfolio"); setHambButton(!HambButton)}}>Portafolio</a>
          <a className={activeSection==="contact"?"activeA":"inactiveA"} href="#Contacto" onClick={()=>{setActiveSection("contact"); setHambButton(!HambButton)}}>Contacto</a>
        </nav>
      </header>

      <div className="w-full h-1/10"></div>
      {/* Portada */}
      <section className="relative w-full h-9/10 bg_Portada
      md:bg_PortadaMd lg:bg_PortadaLg">
        <div className='absolute bottom-8 left-8 txtXl2 glassDark w-4/6 p-3 text-c_Mischka
        lg:w-2/5'>
          <p className='txtSecondary txtXL pb-1 text-center'>{"-- Josué Guzman --"}</p>
          <p className='txtSecondary txtLg text-center'>Desarrollador web</p>
          <p className='txtSm text-center'>Autodidacta, junior, frontend, backend, nodeJs, .Net.</p>
        </div>
      </section>
    </div>
  )

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

const BurguerMenu = ()=>{
  return(
       <svg className='w-full h-full hover:fill-c_Purple transition-colors' fill="#DFDDE6" height="150px" width="150px" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid"><path d="M24,3H8C5.2,3,3,5.2,3,8v16c0,2.8,2.2,5,5,5h16c2.8,0,5-2.2,5-5V8C29,5.2,26.8,3,24,3z M22,21H10c-0.6,0-1-0.4-1-1 s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,21,22,21z M22,17H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,17,22,17z M22,13H10 c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S22.6,13,22,13z"/></svg>
  )
  }