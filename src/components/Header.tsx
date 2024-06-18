import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <>
    <header className="flex">
        <img src={logo} alt="Bober" />
        <nav className='max-w-xl mx-auto'>
            <ul className='flex justify-between'>
                <li>Home</li>
                <li>Service</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Testimonial</li>
                <li>FAQ</li>
            </ul>
        </nav>
        <div className="login">
            <button className='bg-white'>Login</button>
            <button className='bg-[#FFA600]'>Sign up</button>
        </div>
    </header>
    </>
  )
}
