import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";


const AppRoutes = () => {
  const { isLogin } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin && pathname != '/signup') {
      navigate('/login');
    }
  }, [isLogin, pathname, navigate]);

  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
    </Routes>
  )
}

export default AppRoutes