import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../features/Auth/Login"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />}/>

    </Routes>
  )
}

export default AppRoutes