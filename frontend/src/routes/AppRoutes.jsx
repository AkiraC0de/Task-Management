import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
    </Routes>
  )
}

export default AppRoutes