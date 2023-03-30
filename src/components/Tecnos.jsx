import React from 'react'

export default function Tecnos() {
  return (
    <section id='Tecnos' className='scrollEfect txtMd p-5 bg-c_Dark text-white w-full h-[calc(90vh)] border-b-2 border-c_Light'>
      <p className='w-full h-1/10 flexAllCenter'>Tecnologías</p>
      <div className='flexAllCenter flex-wrap w-full h-9/10'>

        <div className='w-1/10 h-2/10 m-[calc(6%)]'>
          <img className='' src='/svgIcons/css3.svg' alt='css3'/>
        </div>
        <div className='w-1/10 h-2/10 m-[calc(6%)]'>
          <img className='' src='/icons/express-icon.png' alt=''/>
        </div>

      </div>
    </section>
  )
}
