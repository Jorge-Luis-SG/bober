import image from "../assets/home.png";

export function Home() {
  return (
    <>
      <div className="bg-[#F5F7FA] h-[calc(100vh_-_80px)] flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center px-5 lg:px-20 justify-between max-w-[1350px] w-full mt-36 lg:mt-0">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold ">
              Descubre una nueva <br />
              <span className="text-[#FFA600] font-semibold">
                forma de aprender
              </span>
            </h1>
            <p className="text-[#717171] max-w-sm md:max-w-xl">
              Bober es la mejor plataforma para prepararte, expandir y resolver
              tu primera entrevista técnica y asegurar tu primer trabajo y/o
              internship.
            </p>
            <button className="bg-[#FFA600] w-24 py-3 text-white">Login</button>
          </div>
          <div className="mt-5 lg:mt-0">
            <img src={image} alt="Bober" />
          </div>
        </div>
      </div>
    </>
  );
}
