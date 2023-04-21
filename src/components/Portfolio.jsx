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
              ImgPrinc="bgPort2"
              Collection={["/ProjectSrc/ProjectSPGB/img1.jpeg"]} 
              title="SuperGames Servidor"
              description="Servidor web desarrollado para manejar eficientemente las peticiones que los usuarios realizan a través de la interfaz de -SuperGames Frontend-.  Para lograrlo, hemos utilizado una API creada con Express, la cual interactúa con una base de datos de MySql para poder almacenar los registros de los usuarios." 
              conoc="Para desarrollar este proyecto, utilicé una variedad de tecnologías y herramientas, incluyendo Express, TypeScript, MySQL, ApiRest, Cors y JsonWebToken. Estas herramientas me permitieron crear un servidor web eficiente y seguro, con una API robusta y escalable. La gestión de la base de datos se realizó con MySQL, y se implementaron medidas de seguridad adicionales utilizando ApiRest y Cors para garantizar la privacidad de la información. La autenticación y autorización de los usuarios se llevó a cabo utilizando JsonWebToken, lo que aumentó la seguridad del sistema en general"
              tecnos={["NodeJs","Express","Typescript","MySql","jsonwebtoken","axios","ApiREst","CORS"]}
              link={["https://sp-g-backend.jguzman.tk/","https://github.com/JosueG24/SuperGames-Bakend-/"]}
            />
          </div>
          
        </div>
        {/* Two icon */}
        <div className="scrollEfectIII w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
          <PortfolioCard  className="scrollEfectIII"
            ImgPrinc="bgPort2"
            Collection={["/ProjectSrc/ProjectSPGF/img1.jpeg","/ProjectSrc/ProjectSPGF/img2.jpeg","/ProjectSrc/ProjectSPGF/img3.jpeg","/ProjectSrc/ProjectSPGF/img4.jpeg","/ProjectSrc/ProjectSPGF/img5.jpeg"]} 
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
            ImgPrinc="bgPort2"
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
            ImgPrinc="bgPort1"
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
