import React from 'react'

export default function Footer() {
  return (
    <>
    <section id="Contacto" className='scrollEfect txtMd bg-c_Ebony text-c_Mischka w-full h-1/10 flex'>
        <div className='w-4/5 h-full flexAllCenter'>
          <a className='h-2/3 w-[calc(4%)] mx-2 hover:Lshadow transition-all' href=''><img src='./icons/Github-white.png'/></a>
          <a className='h-2/3 w-[calc(4%)] mx-2 hover:Lshadow transition-all' href=''><img src='./icons/linkedin.png'/></a>
          <a className='h-2/3 w-[calc(4%)] mx-2 hover:Lshadow transition-all' href=''><img src='./icons/Gmail.png'/></a>
          <a className='h-2/3 w-[calc(4%)] mx-2 hover:Lshadow transition-all' href=''><img src='./icons/Whatsapp.png'/></a>
        </div>
        <div className='w-1/5 h-full flexAllCenter flex-col'>
          <p className="">Josué Guzman - 2023</p>
          <p className=''>Gracias por ver</p>
        </div>
    </section>
    <div className='bg-c_Ebony w-full h-[calc(10vh)]'></div>
    </>
  )
}
