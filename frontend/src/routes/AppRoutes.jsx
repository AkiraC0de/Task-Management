import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../features/Auth/Login";
import Signup from "../features/Auth/Signup";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
    </Routes>
  )
}

export default AppRoutes