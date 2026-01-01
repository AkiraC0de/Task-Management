import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import LandingLayout from "../Layouts/LandingLayout";
import NotFound from "../pages/NotFound";
import { EMAIL_VERIFICATION_PAGE_LINK, LOGIN_PAGE_LINK, SIGNUP_PAGE_LINK } from "../constants/pageLinkConstant";
import EmailVerification from "../pages/EmailVerification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={LOGIN_PAGE_LINK} element={<Login/>}/>
        <Route path={SIGNUP_PAGE_LINK} element={<Signup/>}/>
      </Route>

      <Route path={`${EMAIL_VERIFICATION_PAGE_LINK}/:userId`} element={<EmailVerification/>}/>
      <Route path="*" element={<NotFound/>}/>
     
      {/* <Route path="/" element={
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      }/> */}
        
    </Routes>
  )
}

export default AppRoutes