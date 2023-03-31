import Portfolio_Card from "./Portfolio_Card"

export default function Portfolio() {

  let Collection = ["/Project2/img1.jpeg","/Project2/img2.jpeg","/Project2/img3.jpeg","/Project2/img4.jpeg","/Project2/img5.jpeg"]

  return (
    <>
    <section id="Portafolio" className='txtMd p-5 bg-c_Ebony text-c_Mischka w-full h-auto'>
      <div className='flexAllCenter flex-wrap w-full h-auto justify-center'>
        <div className='scrollEfect w-full h-full mt-[calc(5vh)] rounded-lg flexAllCenter flex-col'>
          <p className='w-full h-1/10 flexAllCenter txtXl txtSecondary'>Portafolio</p>
          {/* One Icon */}
          <div className="w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
            <Portfolio_Card Collection={Collection} title="Super Games"
            description="Un sitio en el que te puedes registrar y jugar a memoria, busca minas y snake. Almacenamos la puntuación que obtengas en tus mejores partidas para que compitas con los mejores usuarios." 
            tecnos={["React","Next Js","Tailwind","JWT","NySql","Vercel","PlanetScale",]}
            />
          </div>
          
        </div>
        {/* Two icon */}
        <div className="scrollEfectIII w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
        <Portfolio_Card Collection={Collection} title="Super Games"
          description="Un sitio en el que te puedes registrar y jugar a memoria, busca minas y snake. Almacenamos la puntuación que obtengas en tus mejores partidas para que compitas con los mejores usuarios." 
          tecnos={["React","Next Js","Tailwind","JWT","NySql","Vercel","PlanetScale",]}
          className="scrollEfectIII"
          />
        </div>
        {/* Third Icon */}
        <div className="scrollEfectIII w-[calc(75%)] h-[calc(65vh)] my-[calc(5vh)]">
        <Portfolio_Card Collection={Collection} title="Super Games"
          description="Un sitio en el que te puedes registrar y jugar a memoria, busca minas y snake. Almacenamos la puntuación que obtengas en tus mejores partidas para que compitas con los mejores usuarios." 
          tecnos={["React","Next Js","Tailwind","JWT","NySql","Vercel","PlanetScale",]}
          className="scrollEfectIII"
          />
        </div>

      </div>
      

  </section>
  </>
  )
}
