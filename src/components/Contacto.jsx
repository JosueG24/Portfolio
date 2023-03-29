import Footer from "./Footer"

export default function Contacto() {
  return (
    <section className=' txtMd p-5 bg-c_Dark text-white w-full h-auto'>
    <p className='w-full h-h-[calc(7vh)] flexAllCenter'>Contacto</p>
    <div className="w-full scrollEfect">
        <div className='flexAllCenter flex-wrap w-full h-[calc(72vh)] flex-col border-b-2 border-c_Light'>
        <div className='margins w-3/10 h-3/10 mx-[calc(1.5%)] my-[calc(3%)] rounded-lg'></div>
        <div className='margins w-3/10 h-3/10 mx-[calc(1.5%)] my-[calc(3%)] rounded-lg'></div>
        <div className='margins w-3/10 h-3/10 mx-[calc(1.5%)] my-[calc(3%)] rounded-lg'></div>
        </div>
      <Footer/>
    </div>
</section>
  )
}
