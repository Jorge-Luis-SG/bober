import LogoWhite from '../assets/Footer/Big/Logo-white.svg'
import Dribbble from '../assets/Footer/Big/dribbble.svg'
import Instagram from '../assets/Footer/Big/Instagram.svg'
import Twitter from '../assets/Footer/Big/Twitter.svg'
import Youtube from '../assets/Footer/Big/Youtube.svg'

export function Footer() {
    
    const icons = [
        {
            title: 'Instagram',
            link: '#',
            icon: Instagram
        },
        {
            title: 'Dribbble',
            link: '#',
            icon: Dribbble
        },
        {
            title: 'Twitter',
            link: '#',
            icon: Twitter
        },
        {
            title: 'Youtube',
            link: '#',
            icon: Youtube
        },
    ]

    const links = [
        {
            title: 'Empresa',
            sublinks: [
                {
                    title: 'About us',
                    link: '#'
                },
                {
                    title: 'Blog',
                    link: '#'
                },
                {
                    title: 'Contact us',
                    link: '#'
                },
                {
                    title: 'Pricing',
                    link: '#'
                },
                {
                    title: 'Testimonials',
                    link: '#'
                },
            ]
        },
        {
            title: 'Soporte',
            sublinks: [
                {
                    title: 'Help center',
                    link: '#'
                },
                {
                    title: 'Terms of service',
                    link: '#'
                },
                {
                    title: 'Legal',
                    link: '#'
                },
                {
                    title: 'Privacy policy',
                    link: '#'
                },
                {
                    title: 'Status',
                    link: '#'
                },
            ]
        },
    ]

  return (
    <section className="flex justify-between px-5 py-14 bg-[#001441]">
        <div className='space-y-10'>
            <img src={LogoWhite} alt="Logo white" />
            <div>
                <p className='text-white'>Copyright © 2024 Bober.</p>
                <p className='text-white'>Derechos reservados</p>
            </div>
            <div className='flex space-x-4'>
                {icons.map((item) => {
                    return (
                        <a className='flex justify-center items-center bg-white/10 p-2 rounded-full' href="#" rel="noopener noreferrer">
                            <img width={15} src={item.icon} alt="" />
                        </a>
                    )
                })}
            </div>
        </div>
        <div className='flex space-x-7'>
            {links.map((item) => {
                return (
                    <div className='space-y-6 pr-20'>
                        <h2 className='text-white text-xl font-semibold'>{item.title}</h2>
                        <ul className='space-y-3'>
                            {item.sublinks.map((item) => {
                                return (

                                    <li className='text-[#F5F7FA] text-sm font-normal'>
                                        <a href={item.link}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
