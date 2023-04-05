import React from 'react'

export default function Services() {
  return (
    <section id='Services' className='scrollEfect txtMd p-5 bg-c_Mischka text-c_Ebony w-full h-[calc(90vh)] border-b-2 border-c_Ebony'>
      <p className='w-full h-1/10 flexAllCenter txtXl txtSecondary'>Servicios</p>
      <div className='flexAllCenter flex-wrap w-full h-9/10'>

        <div className='group overflow-hidden margins outline-c_Ebony w-[calc(45%)] max-w-[calc(460px)] h-[calc(45%)] mx-[calc(1%)] my-[calc(1%)] rounded-lg'>
          <div className='bg-c_Purple w-full h-full '></div>
          <div className='text-c_Mischka w-full h-full bg-c_Opaque rounded-xl relative bottom-[calc(25%)] group-hover:bottom-[calc(100%)] transition-all'>
            <p className='txtLg w-full h-[calc(25%)] py-2 text-center textSecondary'>Diseño y desarrollo de sitios web</p>
            <p className='p-4'></p>
          </div>
        </div>

        <div className='group overflow-hidden margins outline-c_Ebony w-[calc(45%)] max-w-[calc(460px)] h-[calc(45%)] mx-[calc(1%)] my-[calc(1%)] rounded-lg'>
          <div className='bg-c_Purple w-full h-full '></div>
          <div className='text-c_Mischka w-full h-full bg-c_Opaque rounded-xl relative bottom-[calc(25%)] group-hover:bottom-[calc(100%)] transition-all'>
            <p className='txtLg w-full h-[calc(25%)] py-2 text-center textSecondary'>Stack Mern</p>
            <p className='p-4'></p>
          </div>
        </div>

        <div className='group overflow-hidden margins outline-c_Ebony w-[calc(45%)] max-w-[calc(460px)] h-[calc(45%)] mx-[calc(1%)] my-[calc(1%)] rounded-lg'>
          <div className='bg-c_Purple w-full h-full '></div>
          <div className='text-c_Mischka w-full h-full bg-c_Opaque rounded-xl relative bottom-[calc(25%)] group-hover:bottom-[calc(100%)] transition-all'>
            <p className='txtLg w-full h-[calc(25%)] py-2 text-center textSecondary'>Mantenimiento y actualización de sitios web</p>
            <p className='p-4'></p>
          </div>
        </div>

        <div className='group overflow-hidden margins outline-c_Ebony w-[calc(45%)] max-w-[calc(460px)] h-[calc(45%)] mx-[calc(1%)] my-[calc(1%)] rounded-lg'>
          <div className='bg-c_Purple w-full h-full '></div>
          <div className='text-c_Mischka w-full h-full bg-c_Opaque rounded-xl relative bottom-[calc(25%)] group-hover:bottom-[calc(100%)] transition-all'>
            <p className='txtLg w-full h-[calc(25%)] py-2 text-center textSecondary'>Consultoría y asesoramiento en tecnología web</p>
            <p className='p-4'></p>
          </div>
        </div>

      </div>
  </section>
  )
}
