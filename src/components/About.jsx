import React from 'react'

export default function About() {
  return (
    <section id='About' className='text-c_Dark scrollEfect bg_Moon w-screen h-[calc(90vh)] p-5'>
      <div className='w-full h-1/2  flex'>
        <div className='w-2/3 p-3'>
          <p className='txtLg txtSecondary font-semibold text-center pb-3'>Sobre mi</p>
          <p className='p-3 p-t0 txtMd'>
            Hola, me llamo Josué y es un gusto saludarte. Soy un joven autodidacta, programador especializado en el area de desarrollo web.
            Tengo 19 años, me gradué como bachiller hace 2 años, y hasta ahora todo lo que se sobre programación lo he aprendido por cuenta propia.
            Mi experiencia es la que se ve reflejada en los proyectos que puedes encontrar en las próximas secciones.
            Échate una visita por todo este sitio. Y si por cualquier cosa deseas contactarme, yo estaré feliz de recibir tu mensaje.¿</p>
        </div>
        <div className='w-1/3'>
          <img alt='myPhoto' className='max-w-full max-h-full py-2 mx-auto rounded-2xl' src='/myPhoto.jpeg'/>
        </div>
      </div>
      <div className='w-full h-1/2  flex'>
        <div className=' flexAllCenter w-3/10 justify-start flex-col'>
          <div className='flexAllCenter'>
            <button className='bg-c_Fluorecent rounded-lg p-2 mx-1 my-5'>Descarga Cv</button>
            <button className='bg-c_Fluorecent rounded-lg p-2 mx-1 my-5'>Ver proyectos</button>
          </div>
          <div className='w-1/2 flexAllCenter'>
            <img alt='Panda' className='max-w-full max-h-full py-2 mx-auto rounded-2xl' src='/PelucheV1.png'/>
          </div>
        </div>
        <div className=' w-7/10'>
        <p className='txtLg txtSecondary font-semibold text-center pb-3'>Sobre mi</p>
          <p className='p-3 p-t0 txtMd'>
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
