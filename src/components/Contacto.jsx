import Footer from "./Footer"
import { useState } from "react"
import  emailjs from "@emailjs/browser";

export default function Contacto() {
  const [modal, setModal] = useState(false)

  function handleSubmit(e){
    let errors  = {title:"", description:[]}
    let expEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    let form = document.querySelector("#contactForm")
    let iName = document.querySelector("#iName")
    let iEmail = document.querySelector("#iEmail")
    let iMessage = document.querySelector("#iText")
    e.preventDefault()
    // area de resets
    setModal(false);
    iName.classList.remove("errorCamp")
    iEmail.classList.remove("errorCamp")
    iMessage.classList.remove("errorCamp")
    // area de validaciones
    if(iName.value.length < 2){
        iName.classList.add("errorCamp")
        errors = {title:"Has cometido algunos errores", description:[...errors.description, "El valor del nombre es incorrecto"]}
    }
    if(!expEmail.test(iEmail.value)){
        iEmail.classList.add("errorCamp")
        errors = {title:"Has cometido algunos errores", description:[...errors.description, "El correo ingresado es incorrecto"]}
    }
    if(iMessage.value.length <1){
        iMessage.classList.add("errorCamp")
        errors = {title:"Has cometido algunos errores", description:[...errors.description, "El mensaje está vacío"]}
    }        
    
    if(errors.title !== "") setModal(errors)

    // area de datos exitosos
    if(errors.title === ""){
      emailjs.sendForm("service_iz65pwb","template_8ek38p2",e.target, "BHROj7NfKxy3Xa0ja")
      .then(res =>{
        form.reset()
        setModal({title:"Perfecto", description:["Su mensaje se ha enviado correctamente"]})
      })
      .catch(error=>{
        setModal({title:"Error", description:["Lo sentimos, su mensage no se ha enviado por errores desconocidos."]})
      })
    }
    
  }

  return (
    <section className=' txtMd bg-c_Mischka text-c_Ebony w-full h-screen'>
      <p className='w-full h-1/10 flexAllCenter txtXl txtSecondary'>Contacto</p>
      <div className="w-full h-7/10 text-c_Ebony">

        <form id="contactForm" className='flexAllCenter w-full h-full flex-col border-b-2 border-c_Ebony txtLg' onSubmit={handleSubmit}>
          <div className="flexAllCenter flex-col w-full h-2/10">
            <div className='w-2/3 h-full rounded-lg p-1 flexAllCenter'>
              <input id="iName" type="text" name="name" placeholder="Ingrese su Nombre" className="placeholder:text-c_Mischka h-full w-8/10 shadow-md shadow-c_Ebony rounded-lg bg-c_Purple border-b-2 border-c_Ebony focus:outline-none text-center"/>
            </div>
            <div className='w-2/3 h-full rounded-lg p-1 flexAllCenter'>
              <input id="iEmail" type="text" name="email" placeholder="Ingrese su Correo" className="placeholder:text-c_Mischka h-full w-8/10 shadow-md shadow-c_Ebony rounded-lg bg-c_Purple border-b-2 border-c_Ebony focus:outline-none text-center"/>
            </div>
          </div>
          <div className=' w-2/3 h-6/10 rounded-lg p-2'>
            <textarea id="iText" type="text" name="message" className="placeholder:text-c_Mischka border-y-2 border-c_Ebony rounded-lg bg-c_Purple w-full h-full shadow-lg shadow-c_Ebony focus:outline-none p-2" placeholder="Escriba su mensage"></textarea>
          </div>
          <div className="flexAllCenter w-1/3 h-2/10"><button className="border-y-2 border-c_Ebony bg-c_Purple w-1/2 h-1/2 shadow-md shadow-c_Ebony rounded-lg hover:text-c_Mischka hover:border-c_Purple transition-colors">Enviar</button></div>
        </form>

    </div>
    <Footer/>
    {modal !== false &&
      <div className="bg-c_Opaque fixed w-screen h-screen flexAllCenter top-0 left-0 z-40">
        <div className="bg-c_Ebony w-1/3 h-1/3 border-y-2 border-c_Mischka rounded-lg text-c_Mischka flexAllCenter flex-col p-3">
          <p className="txtSecondary txtLg pb-2">{modal.title}</p>
          {modal.description.map((item, index)=>{
            return(
              <p className="pb-2 text-center" key={index}>- {item}</p>
            )
          })}
          <button className="px-3 py-2 rounded-md border-y-2 border-c_Purple hover:bg-c_Purple transition-colors" onClick={()=>setModal(false)}>Cerrar</button>
        </div>
      </div>
    }
</section>
  )
}
