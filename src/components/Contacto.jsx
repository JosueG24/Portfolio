import Footer from "./Footer"

export default function Contacto() {

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <section className=' txtMd p-5 bg-c_Dark text-c_Light w-full h-screen'>
      <p className='w-full h-1/10 flexAllCenter txtXl txtSecondary'>Contacto</p>
      <div className="w-full h-8/10">
        <form className='flexAllCenter w-full h-full flex-col border-b-2 border-c_Light txtLg' onSubmit={handleSubmit}>
          <div className="flexAllCenter flex-col w-full h-2/10">
            <div className='w-2/3 h-full rounded-lg p-1 flexAllCenter'>
              <input type="text" name="name" placeholder="Ingrese su Nombre" className="h-full w-8/10 rounded-lg bg-black border-b-2 border-c_Light focus:outline-none text-center"/>
            </div>
            <div className='w-2/3 h-full rounded-lg p-1 flexAllCenter'>
              <input type="text" name="email" placeholder="Ingrese su Correo" className="h-full w-8/10 rounded-lg bg-black border-b-2 border-c_Light focus:outline-none text-center"/>
            </div>
          </div>
          <div className=' w-2/3 h-6/10 rounded-lg p-2'>
            <textarea className="border-y-2 border-c_Light rounded-lg bg-black w-full h-full focus:outline-none"></textarea>
          </div>
          <div className="flexAllCenter w-1/3 h-2/10"><button className="border-y-2 border-c_Light bg-black w-1/2 h-1/2 rounded-lg">Enviar</button></div>
        </form>
      <Footer/>
    </div>
</section>
  )
}
