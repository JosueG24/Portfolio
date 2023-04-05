import PortfolioCard from "./PortfolioCard"

export default function Portfolio() {
  return (
    <>
    <section id="Portafolio" className='txtMd p-5 bg-c_Ebony text-c_Mischka w-full h-auto'>
      <div className='flexAllCenter flex-wrap w-full h-auto justify-center'>
        <div className='scrollEfect w-full h-full mt-[calc(5vh)] rounded-lg flexAllCenter flex-col'>
          <p className='w-full h-1/10 flexAllCenter txtXl txtSecondary'>Portafolio</p>
          {/* One Icon */}
          <div className="w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
            <PortfolioCard 
              Collection={["/Project2/img1.jpeg","/Project2/img2.jpeg","/Project2/img3.jpeg","/Project2/img4.jpeg","/Project2/img5.jpeg"]} 
              title="SuperGames Backend"
              description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, también con la intención de poder ser contactado por personas interesadas en lo que hago." 
              conoc="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y adquisición de un dominio propio."
              tecnos={["React","NextJs","Vercel","emailJS","Tsparticles","SwiperJs"]}
              link={["https://www.jguzman.tk/","https://github.com/JosueElutiche24/PortafolioProfesional"]}
            />
          </div>
          
        </div>
        {/* Two icon */}
        <div className="scrollEfectIII w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
          <PortfolioCard  className="scrollEfectIII"
            Collection={["/Project2/img1.jpeg","/Project2/img2.jpeg","/Project2/img3.jpeg","/Project2/img4.jpeg","/Project2/img5.jpeg"]} 
            title="SuperGames Frontend"
            description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, también con la intención de poder ser contactado por personas interesadas en lo que hago." 
            conoc="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y adquisición de un dominio propio."
            tecnos={["React","NextJs","Vercel","emailJS","Tsparticles","SwiperJs"]}
            link={["https://www.jguzman.tk/","https://github.com/JosueElutiche24/PortafolioProfesional"]}
          />
        </div>
        {/* Third icon */}
        <div className="scrollEfectIII w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
          <PortfolioCard  className="scrollEfectIII"
            Collection={["/Project2/img1.jpeg","/Project2/img2.jpeg","/Project2/img3.jpeg","/Project2/img4.jpeg","/Project2/img5.jpeg"]} 
            title="Test de Apis"
            description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, también con la intención de poder ser contactado por personas interesadas en lo que hago." 
            conoc="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y adquisición de un dominio propio."
            tecnos={["React","NextJs","Vercel","emailJS","Tsparticles","SwiperJs"]}
            link={["https://www.jguzman.tk/","https://github.com/JosueElutiche24/PortafolioProfesional"]}
          />
        </div>
        {/* Fourth Icon */}
        <div className="scrollEfectIII w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
          <PortfolioCard className="scrollEfectIII"
            Collection={["/Project2/img1.jpeg","/Project2/img2.jpeg","/Project2/img3.jpeg","/Project2/img4.jpeg","/Project2/img5.jpeg"]} 
            title="Portafolio"
            description="Este sitio web fue creado para mostrar mis proyectos y las tecnologías con las que trabajo, también con la intención de poder ser contactado por personas interesadas en lo que hago." 
            conoc="En el desarrollo de este proyecto se utilizó: Principalmente un alto nivel de Css. Buen manejo de componentes y Hoocks de react. Implementación del formulario de contacto con API de Gmail. Despliegue del sitio web en hosting y adquisición de un dominio propio."
            tecnos={["React","NextJs","Tsparticles","emailJS","Vercel","SwiperJs"]}
            link={["https://www.jguzman.tk/","https://github.com/JosueElutiche24/PortafolioProfesional"]}
          />
        </div>

      </div>
      

  </section>
  </>
  )
}
