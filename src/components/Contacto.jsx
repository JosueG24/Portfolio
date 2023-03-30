import Footer from "./Footer"

export default function Contacto() {

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <section className=' txtMd bg-c_Mischka text-c_Ebony w-full h-screen'>
      <p className='w-full h-1/10 flexAllCenter txtXl txtSecondary'>Contacto</p>
      <div className="w-full h-7/10 text-c_Ebony">
        <form className='flexAllCenter w-full h-full flex-col border-b-2 border-c_Ebony txtLg' onSubmit={handleSubmit}>
          <div className="flexAllCenter flex-col w-full h-2/10">
            <div className='w-2/3 h-full rounded-lg p-1 flexAllCenter'>
              <input type="text" name="name" placeholder="Ingrese su Nombre" className="placeholder:text-c_Mischka h-full w-8/10 rounded-lg bg-c_Purple border-b-2 border-c_Ebony focus:outline-none text-center"/>
            </div>
            <div className='w-2/3 h-full rounded-lg p-1 flexAllCenter'>
              <input type="text" name="email" placeholder="Ingrese su Correo" className="placeholder:text-c_Mischka h-full w-8/10 rounded-lg bg-c_Purple border-b-2 border-c_Ebony focus:outline-none text-center"/>
            </div>
          </div>
          <div className=' w-2/3 h-6/10 rounded-lg p-2'>
            <textarea className="placeholder:text-c_Mischka border-y-2 border-c_Ebony rounded-lg bg-c_Purple w-full h-full focus:outline-none p-2" name="textarea" placeholder="Escriba su mensage"></textarea>
          </div>
          <div className="flexAllCenter w-1/3 h-2/10"><button className="border-y-2 border-c_Ebony bg-c_Purple w-1/2 h-1/2 rounded-lg hover:text-c_Mischka hover:border-c_Purple transition-colors">Enviar</button></div>
        </form>
    </div>
    <Footer/>
</section>
  )
}
