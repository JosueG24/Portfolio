import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Portfolio_Card({Collection, title, description, tecnos}) {
  return (
    <div className='relative group w-full h-full rounded-lg overflow-hidden shadow-md shadow-c_Mischka'>

    <div className="w-full h-full flex">
      <div className="bgPort1 bg-cover bg-center w-4/10 h-full"></div>
      <div className="w-6/10 h-full">
        <p className="w-full h-2/10 txtXl txtSecondary flexAllCenter">{title}</p>
        <p className="p-6 txtMd">{description}</p>
        <div className="flexAllCenter flex-wrap w-full min-h-2/10">
            {tecnos.map((item, index)=>{
                return(
                    <p className="p-2 bg-c_Mischka txtMd m-2 rounded-md text-c_Ebony" key={index}>{item}</p>
                )
            })}
        </div>
      </div>
    </div>
    <div className="absolute top-0 w-full h-full flex flex-wrap bg-c_Ebony opacity-0 transition-all group-hover:opacity-100">
      <div className="w-7/10 h-full margins">
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
      <div className="w-3/10 h-3/4 margins"></div>
      <div className="w-3/10 h-1/4 margins"></div>
    </div>
  </div>
  )
}
