import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PortfolioCard({ImgPrinc, Collection, title, description, conoc, tecnos, link}) {
  return (
    <div className='relative group w-full h-full rounded-lg overflow-hidden shadow-md shadow-c_Mischka'>

    <div className="w-full h-full flex">
      <div className={ImgPrinc+" bg-cover bg-center w-4/10 h-full"}></div>
      <div className="w-6/10 h-full">
        <p className="w-full h-1/10 txtLg txtSecondary flexAllCenter">{title}</p>
        <p className="px-6 pb-3 pt-1 txtMd text-justify">{description}</p>
        <p className="px-6 txtMd pb-1 text-c_Purple">Conocimientos empleados :</p>
        <p className="px-6 txtMd pb-3 text-justify">{conoc}</p>
      </div>
    </div>
    <div className="absolute top-0 w-full h-full flex flex-wrap bg-c_Ebony opacity-0 transition-all group-hover:opacity-100">
      <div className="w-7/10 h-8/10 ">
        {/* Sector del swiper */}
        {Collection[0] === "No disponible"?
          <div className="w-full h-full flexAllCenter"><p className='txtLg txtSecondary '>Imagenes no disponibles</p></div>
          :
          <Swiper className="w-full h-full flexAllCenter "
            modules={[Navigation, Pagination, A11y, Mousewheel]}
            slidesPerView={1}
            navigation
            loop={true}
            mousewheel={true}
            pagination={{ clickable: true }}
          >
            {Collection.map((item, index)=>{
                return(
                    <SwiperSlide key={index} className="w-full h-full"><img src={item} alt="w-full h-full"/></SwiperSlide>
                )
            })}

          </Swiper>}
        {/* Sector del swiper */}
      </div>
      <div className="w-3/10 h-8/10">
        <p className="px-8 txtLg pb-1 text-c_Purple flexAllCenter text-center w-full h-2/10">Tecnologías utilizadas :</p>
        <div className="flexAllCenter justify-start flex-wrap w-full min-h-2/10 px-3 mt-3">
              {tecnos.map((item, index)=>{
                  return(
                      <p className="p-2 bg-c_Mischka txtMd mr-2 mb-2 rounded-md text-c_Ebony" key={index}>{item}</p>
                  )
              })}
          </div>
      </div>
      <div className="w-full h-2/10 flexAllCenter border-t-2 border-t-c_Purple">
        <div className='h-full w-auto flexAllCenter flex-col'>
          <p className='text-c_Purple'>Visitar sitio : <a className='text-c_Mischka underline' href={link[0]} target="_blank" rel="noreferrer noopener">{link[0]}</a></p>
          <p className='text-c_Purple'>Repositorio en github : <a className='text-c_Mischka underline' href={link[1]} target="_blank" rel="noreferrer noopener">{link[1]}</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}
