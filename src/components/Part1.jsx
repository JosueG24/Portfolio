
export default function Part1() {
  return (
    <div className='scrollEfect w-screen h-screen txtSm'>
      {/* Header */}
      <header className='txtSecondary fixed z-20 top-0 left-0 bg-c_Ebony w-[calc(100%-1.3vw)] h-1/10 flexAllCenter justify-around border-b-2 border-c_Mischka'>
        <div className='w-1/10 h-full p-3'>
            <img alt="Logo" className='w-6/10 h-full' src='/Logo.png'/>
        </div>
        <div className='flexAllCenter justify-around w-5/10'>
          <a className="" href="#About">Sobre mi</a>
          <a className="" href="#Conocimientos">Conocimientos</a>
          <a className="" href="#Portafolio">Portafolio</a>
          <a className="" href="#Contacto">Contacto</a>
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
