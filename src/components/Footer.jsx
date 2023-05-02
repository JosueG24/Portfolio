import React from 'react'

export default function Footer() {
  return (
    <>
    <section id="Contacto" className='scrollEfect txtMd bg-c_Ebony text-c_Mischka w-full h-1/10 flex px-6'>
        <div className='w-4/5 h-full flexAllCenter justify-start'>
          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' href='/'><img src='./icons/Github-white.png' alt=''/></a>

          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' href='/'><img src='./icons/linkedin.png' alt=''/></a>

          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' href='/'><img src='./icons/Gmail.png' alt=''/></a>

          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' href='/'><img src='./icons/Whatsapp.png' alt=''/></a>
        </div>
        <div className='w-3/10 h-full flexAllCenter flex-col 
        md:w-1/5'>
          <p className="">Josué Guzman - 2023</p>
          <p className=''>Gracias por ver</p>
        </div>
    </section>
    <div className='bg-c_Ebony w-full h-[calc(10vh)]'></div>
    </>
  )
}
