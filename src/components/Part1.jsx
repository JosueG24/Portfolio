import React from 'react'

export default function Part1() {
  return (
    <div className='w-screen h-screen txtSm'>
      <header className='fixed top-0 bg-c_Black w-full h-1/10 flexAllCenter justify-around'>
        <div className='text-white'>
            <p>Logo</p>
        </div>
        <div className='text-white flexAllCenter justify-around w-5/10'>
          <p>Sobre mi</p>
          <p>Conocimientos</p>
          <p>Portafolio</p>
          <p>Contacto</p>
        </div>
      </header>
      <div className="w-full h-1/10"></div>
      <section className="bg_Portada w-full h-9/10">
        <div className='absolute top-1/2 left-20 text-white txtXl'>
          <p className=''>Soy Josue Guzman</p>
          <p className=''>Desarrollador Web</p>
          <button className=''>ImAButton</button>
        </div>
      </section>
    </div>
  )
}
