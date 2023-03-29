import React from 'react'

export default function About() {
  return (
    <section id='About' className='text-c_Dark scrollEfect bg_Moon w-screen h-[calc(90vh)] p-5'>
      <div className='w-full h-56 flex'>
        <div className='w-1/2'>
          <p className='txtLg'>Sobre mi</p>
          <p>
            Hola, me llamo Josué y es un gusto saludarte. Soy un joven autodidacta, programador especializado en el area de desarrollo web.
            Tengo 19 años, me gradué como bachiller hace 2 años, y hasta ahora todo lo que se sobre programación lo he aprendido por cuenta propia.
            Mi experiencia es la que se ve reflejada en los proyectos que puedes encontrar en las próximas secciones.
            Échate una visita por todo este sitio. Y si por cualquier cosa deseas contactarme, yo estaré feliz de recibir tu mensaje.
          </p>
        </div>
        <div className='w-1/2'>
          <img className='w-3/6 h-full' src='/myPhoto.jpeg'/>
        </div>
      </div>
      <div className='w-full h-56 flex '>
        <div className='flexAllCenter w-1/2 justify-around'>
          <button className='bg-c_Fluorecent'>option</button>
          <div className=''>
            <button className='bg-c_Fluorecent'>option</button>
            <button className='bg-c_Fluorecent'>options</button>
          </div>
          <div className='w-1/2'>
            <img className='w-3/6 h-full' src='/myPhoto.jpeg'/>
          </div>
        </div>
        <div className=' w-1/2'>
          <p className='txtLg'>Sobre mi</p>
          <p>
            Hola, me llamo Josué y es un gusto saludarte. Soy un joven autodidacta, programador especializado en el area de desarrollo web.
            Tengo 19 años, me gradué como bachiller hace 2 años, y hasta ahora todo lo que se sobre programación lo he aprendido por cuenta propia.
            Mi experiencia es la que se ve reflejada en los proyectos que puedes encontrar en las próximas secciones.
            Échate una visita por todo este sitio. Y si por cualquier cosa deseas contactarme, yo estaré feliz de recibir tu mensaje.
          </p>
        </div>
      </div>
    </section>
  )
}
