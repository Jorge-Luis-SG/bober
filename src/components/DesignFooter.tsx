import designFooter from '../assets/mobile-login/pana.svg'

export function DesignFooter() {
  return (
    <section className="flex sm:flex-row flex-col px-5 py-14 sm:space-x-16 sm:space-y-0 space-y-4 items-center">
        <img src={designFooter} alt="Bober" />
        <div className='space-y-4'>
            <h2 className='text-[#4D4D4D] text-4xl font-semibold'>Actúa Ahora y Comienza a Transformar tu Futuro</h2>
            <p className='text-[#717171] text-sm font-normal'>No esperes más para empezar a prepararte con Bober. Regístrate gratis hoy mismo y accede a nuestra plataforma para comenzar tu camino hacia el éxito en las entrevistas técnicas. Si quieres maximizar tus oportunidades ingresa y descubre la gran variedad de oportunidades que tenemos para ti. ¡Empieza hoy y da el primer paso hacia tu carrera en TI con Bober!</p>
            <button className='bg-[#001441] text-white px-9 py-3 rounded'>Descubre más</button>
        </div>
    </section>
  )
}
