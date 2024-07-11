import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Root() {
  return (
    <>
      <Header />
      <main className="lg:pt-0 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
