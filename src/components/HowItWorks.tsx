import howItWorks from '../assets/mobile-login/rafiki.svg'

export function HowItWorks() {
  return (
    <section className="flex lg:flex-row flex-col max-w-6xl m-auto px-5 py-14 lg:space-x-16 lg:space-y-0 space-y-4 items-center">
        <img src={howItWorks} alt="Bober" />
        <div className='space-y-4'>
            <h2 className='text-[#4D4D4D] text-4xl font-semibold'>¿Cómo Funciona Bober para Mejorar tu Preparación Técnica?</h2>
            <p className='text-[#717171] text-sm font-normal'>Empezar con Bober es muy sencillo. Primero, regístrate en nuestra plataforma y crea una cuenta. Luego, usa nuestro asistente de IA para obtener un plan de estudio personalizado que se adapte a tus necesidades específicas. A continuación, practica con los ejercicios de codificación y recibe retroalimentación detallada para mejorar continuamente. </p>
            <button className='bg-[#001441] text-white px-9 py-3 rounded'>Descubre más</button>
        </div>
    </section>
  )
}
