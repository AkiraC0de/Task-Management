import { Outlet } from "react-router-dom"
import Header from "../features/LandingHeader/Header"

const LandingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-auto flex flex-col">
        <Outlet />
      </main>
      <footer>a</footer>
    </div>
  )
}

export default LandingLayout