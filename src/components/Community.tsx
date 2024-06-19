import icon1 from '../assets/icons/Icon.svg'
import icon2 from '../assets/icons/Icon-1.svg'
import icon3 from '../assets/icons/Icon-2.svg'
import icon4 from '../assets/icons/Icon-3.svg'

const data = [
    {
        icon: icon1,
        number: '1,341',
        title: 'Miembros'
    },
    {
        icon: icon2,
        number: '28',
        title: 'Comunidades'
    },
    {
        icon: icon3,
        number: '1,267',
        title: 'Problemas'
    },
    {
        icon: icon4,
        number: '6,900',
        title: 'Horas dedicadas'
    },
]

export function Community() {
  return (
    <section className="bg-[#F5F7FA]">
        <div className='flex lg:flex-row flex-col px-5 py-14 lg:space-x-16 items-center max-w-6xl m-auto'>
            <div className='lg:w-1/2 w-full space-y-4'>
                <h2 className='text-[#4D4D4D] text-5xl font-semibold'>Una comunidad <br /><span className='text-[#FFA600]'>enfocada en ayudar</span></h2>
                <p className='text-[#18191F] font-normal'>Fomentamos la colaboración entre programadores</p>
            </div>
            <div className='gap-10 lg:w-1/2 mt-4 lg:mt-0 w-full grid grid-cols-2'>
                {data.map((item, number) => {
                    return (
                        <div key={item.title + item.number + number} className='lg:flex block items-start lg:space-x-4'>
                            <img src={item.icon} width={48} height={48} alt="" />
                            <div>
                                <h3 className='text-[#4D4D4D] text-3xl font-bold'>{item.number}</h3>
                                <p className='text-[#717171] text-base font-normal'>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
