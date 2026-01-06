import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import LandingLayout from "../Layouts/LandingLayout";
import NotFound from "../pages/NotFound";
import { DASHBOARD_PAGE_LINK, EMAIL_VERIFICATION_PAGE_LINK, LOGIN_PAGE_LINK, PRIVACY_AND_POLICY_PAGE_LINK, SIGNUP_PAGE_LINK, TERMS_AND_CONDITIONS_PAGE_LINK } from "../constants/pageLinkConstant";
import EmailVerification from "../pages/EmailVerification";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={LOGIN_PAGE_LINK} element={<Login/>}/>
        <Route path={SIGNUP_PAGE_LINK} element={<Signup/>}/>
        <Route path={PRIVACY_AND_POLICY_PAGE_LINK} element={<PrivacyPolicy/>}/>
        <Route path={TERMS_AND_CONDITIONS_PAGE_LINK} element={<TermsConditions/>}/>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path={DASHBOARD_PAGE_LINK} element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Route>
      
      <Route path={`${EMAIL_VERIFICATION_PAGE_LINK}/:userId`} element={<EmailVerification/>}/>
      <Route path="*" element={<NotFound/>}/>
        
    </Routes>
  )
}

export default AppRoutes