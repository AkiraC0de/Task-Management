import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import LandingLayout from "../Layouts/LandingLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout/>}>
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
     
      {/* <Route path="/" element={
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      }/> */}
        
    </Routes>
  )
}

export default AppRoutes