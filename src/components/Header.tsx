import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <>
      <header className="flex py-5 bg-[#F5F7FA] pr-20 pl-4">
        <div className="flex justify-start">
          <img src={logo} alt="Bober" />
        </div>
        <nav className="max-w-xl mx-auto flex items-center ">
          <ul className="flex justify-between items-center space-x-12">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </nav>
        <div className="login flex">
          <button className="bg-transparent text-[#FFA600] mr- w-20">
            Login
          </button>
          <button className="bg-[#FFA600] text-white w-20">Sign up</button>
        </div>
      </header>
    </>
  );
}
