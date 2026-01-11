import { Outlet } from "react-router-dom"
import Header from "../features/Landing/Header"
import Footer from "../features/Landing/Footer"

const LandingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default LandingLayout