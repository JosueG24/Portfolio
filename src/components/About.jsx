import { useState } from "react";

export default function About() {
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

  return(
    <section id='About' className='text-c_Ebony scrollEfect bg_Moon w-screen h-[calc(90vh-30px)] flex
    md:h-[calc(90vh)]'>


    <div className='w-2/10 h-full'>
      <div className='w-full h-1/2 p-1'>
        <div className='w-full h-full glassBox p-1'>
          <p className='text-center txtLg w-full h-1/10 hidden
          md:block lg:block'>Contacto</p>
           <div className='flexAllCenter flex-wrap w-full h-9/10
           md:content-center lg:content-center'>            

           <div className={copyI===false?'hcopy':"copy"}>Texto copiado</div>
            <a className='m-1 hover:Dshadow transition-all h-1/5
            md:h-1/4 md:m-1 lg:h-1/4 lg:m-2' href='https://github.com/JosueG24' target="_blank" rel="noreferrer noopener" title="https://github.com/JosueG24"><img className='w-full h-full' src='./icons/Github-white.png' alt=''/></a>  
            <a className='m-1 hover:Dshadow transition-all h-1/5
            md:h-1/4 md:m-1 lg:h-1/4 lg:m-2' href='https://www.linkedin.com/in/josue-guzman-754063256' target="_blank" rel="noreferrer noopener" title="https://www.linkedin.com/in/josue-guzman-754063256"><img className='w-full h-full' src='./icons/linkedin.png'  alt=''/></a>
            <div className='m-1 hover:Dshadow transition-all h-1/5
            md:h-1/4 md:m-1 lg:h-1/4 lg:m-2' title="JosueG.guzman24@gmail.com" onClick={() => copyToClipboard('JosueG.guzman24@gmail.com')}><img className='w-full h-full' src='./icons/Gmail.png' alt=''/></div>
            <a className='m-1 hover:Dshadow transition-all h-1/5
            md:h-1/4 md:m-1 lg:h-1/4 lg:m-2' href='https://wa.me/50242732103?text=%C2%A1Hola%21' target="_blank" rel="noreferrer noopener" title="https://wa.me/50242732103?text=%C2%A1Hola%21"><img className='w-full h-full' src='./icons/Whatsapp.png' alt=''/></a>

          </div>
        </div>
      </div>
      <div className='w-full h-1/2 relative flexAllCenter justify-start flex-col'>
          <div className=' flexAllCenter w-full h-full z-10 flex-col
          md:absolute md:top-[calc(20%)]'>
            <a href='https://drive.google.com/uc?export=download&id=1dzH6EY6OrhQSurJtehBrruUKO1jjBK29' 
            className='bg-c_Purple border-y-2 border-c_Ebony rounded-md p-1 mx-1 my-2 txtMd hover:text-c_Mischka hover:border-c_Mischka transition-colors shadow-lg shadow-c_Ebony w-9/10 text-center
            md:rounded-lg md:p-2 md:txtLg lg:rounded-lg lg:my-1 lg:txtLg'>Descarga Cv</a>
            <a href='#Portafolio' 
            className='bg-c_Purple border-y-2 border-c_Ebony rounded-md p-1 mx-1 my-2 txtMd hover:text-c_Mischka hover:border-c_Mischka transition-colors shadow-lg shadow-c_Ebony w-9/10 text-center
            md:rounded-lg md:p-2 md:txtLg lg:rounded-lg lg:my-1 lg:txtLg'>Ver proyectos</a>
          </div>
          <div className='absolute top-0 w-full h-full p-5 flexAllCenter hidden
          md:block lg:block'>
            <img alt='Panda' className='max-h-[calc(100%)] w-auto rounded-2xl' src='/PelucheV1.png'/>
          </div>
      </div>
    </div>

    <div className='flexAllCenter flex-col h-full w-8/10
    lg:flex-row '>

      <div className='w-full h-2/3 flexAllCenter
      lg:w-3/4 lg:h-auto lg:p-3'>
        <div className='w-auto max-w-full h-full p-1 mx-1 glassBox txtMd overflow-y-auto
        lg:p-3'>
          <p className='py-2 px-3 txtXl txtSecondary'>Sobre mi :</p>
          <p className='pb-2 px-3 text-justify'>Saludos, mi nombre es Josué Guzman y soy un desarrollador web aprendiz con experiencia en frontend y backend. Luego de graduarme como bachiller en computación, he estado estudiando y trabajando en proyectos web fullstack durante los últimos 18 meses.</p>
          <p className='pb-2 px-3 text-justify'>Aunque no cuento con experiencia laboral previa, soy un habil aprendiz y me considero una persona creativa, resolutiva y capaz de resolver problemas lógicos de manera eficiente. Además, soy una persona planificadora, ordenada, observadora y que constantemente trata de aprender cosas nuevas.</p>
          <p className='pb-2 px-3 text-justify'>Este portafolio es una muestra de los proyectos en los que he trabajado y de las habilidades que he adquirido hasta el momento. Estoy buscando una oportunidad para poner en práctica mi conocimiento y seguir creciendo como desarrollador web.</p>
          <p className='pb-2 px-3 text-justify'>Si crees que puedo aportar valor a tu empresa o proyecto, estaré encantado de discutir posibles colaboraciones. No dudes en contactarme si tienes alguna pregunta o si deseas saber más sobre mi experiencia y habilidades. ¡Gracias por tu tiempo y consideración!</p>
        </div>
      </div>

      <div className='w-full h-1/3 flex
      lg:w-1/4 lg:h-full lg:flex-col'>
        <div className=' w-1/3 h-full p-1 flexAllCenter
        lg:w-full lg:p-3 lg:h-1/2'>
          <img alt='myPhoto' className='max-w-full max-h-full rounded-3xl shadow-md shadow-c_Ebony' src='/myPhoto.jpeg'/>
        </div>
        <div className='w-2/3 h-full p-3
        lg:w-full -lg:h-1/2'>
          <div className='w-[calc(90.60%)] h-full txtMd glassBox p-3'>
            <p className='text-center pb-2'>Lenguajes y entornos de programacion :</p>
            <p>- Javascript, NodeJs, Typescript.</p>
            <p>- C#, Asp .Net Core.</p>
            <p>- Html, Css, Sass, Tailwind.</p>
            <p>- Sql server, MySql, PostgreSql, MongoDB</p>
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}
