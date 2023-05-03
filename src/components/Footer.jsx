import { useState } from "react"

export default function Footer() {

  const [copyI, setCopyI] = useState(false)
  function copyToClipboard(txt){
    navigator.clipboard.writeText(txt)
      .then(() => {
          setCopyI(true)
        setTimeout(() => {
          setCopyI(false)
        }, 1500);
      })
  }

  return (
    <>
    <section id="Contacto" className='scrollEfect txtMd bg-c_Ebony text-c_Mischka w-full h-1/10 flex px-6'>
        <div className='w-4/5 h-full flexAllCenter justify-start relative'>

          <div className={copyI===false?'hcopy2':"copy2"}>Texto copiado</div>
          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' href='https://github.com/JosueG24' target="_blank" rel="noreferrer noopener" title="https://github.com/JosueG24"><img src='./icons/Github-white.png' alt=''/></a>
          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]'  href='https://www.linkedin.com/in/josue-guzman-754063256' target="_blank" rel="noreferrer noopener" title="https://www.linkedin.com/in/josue-guzman-754063256"><img src='./icons/linkedin.png' alt=''/></a>
          <div className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' title="JosueG.guzman24@gmail.com" onClick={() => copyToClipboard('JosueG.guzman24@gmail.com')}><img src='./icons/Gmail.png' alt=''/></div>
          <a className='h-2/3 w-[calc(11%)] mx-2 hover:Lshadow transition-all flexAllCenter
          md:h-2/3 md:w-[calc(7%)] lg:h-2/3 lg:w-[calc(4%)]' href='https://wa.me/50242732103?text=%C2%A1Hola%21' target="_blank" rel="noreferrer noopener" title="https://wa.me/50242732103?text=%C2%A1Hola%21"><img src='./icons/Whatsapp.png' alt=''/></a>

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
