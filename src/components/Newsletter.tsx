import ArrowRight from '../assets/icons/ArrowRight.svg'
import { useState } from "react"

export function Newsletter() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setFormData((prev) => {
        console.log(prev)
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
       }) 
    }

  return (
    <section className="flex flex-col px-32 py-14 sm:space-y-0 space-y-4 items-center bg-[#F5F7FA]">
        <h2 className='text-[#001441] text-4xl font-semibold text-center pb-4'>Suscríbete a nuestro boletín para estar al tanto de <br />todo con Bober.</h2>        
        <div className='flex flex-col items-center justify-center space-y-4'>
            <input onChange={(e) => {handleChange(e)}} value={formData.name} className='block bg-black/20 text-black placeholder-black py-2 px-2 rounded-lg' type="text" name="name" placeholder="Nombre" />
            <input onChange={(e) => {handleChange(e)}} value={formData.email} className='block bg-black/20 text-black placeholder-black py-2 px-2 rounded-lg' type="text" name="email" placeholder="Correo electrónico" />
            <button className='flex items-center text-white bg-[#FFA600] px-8 py-2 rounded space-x-2'>Enviar <img className='pl-1' src={ArrowRight} alt="" /></button>
        </div>
    </section>
  )
}
