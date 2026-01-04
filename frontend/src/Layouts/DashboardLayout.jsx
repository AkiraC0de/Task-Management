import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <main className="grid grid-cols-[200px_1fr] min-h-screen">
      <div className="bg-amber-200">
        YES
      </div>
      <Outlet/>
    </main>
  )
}
export default DashboardLayout