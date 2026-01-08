import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import LandingLayout from "../Layouts/LandingLayout";
import NotFound from "../pages/NotFound";
import { DASHBOARD_PAGE_LINK, EMAIL_VERIFICATION_PAGE_LINK, FORGOT_PASSWORD_PAGE_LINK, LOGIN_PAGE_LINK, PRIVACY_POLICY_PAGE_LINK, SIGNUP_PAGE_LINK, TERMS_OF_SERVICE_PAGE_LINK } from "../constants/pageLinkConstant";
import EmailVerification from "../pages/EmailVerification";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import ForgotPassword from "../pages/ForgotPassword";
import VerficationLayout from "../Layouts/VerificationLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={LOGIN_PAGE_LINK} element={<Login/>}/>
        <Route path={SIGNUP_PAGE_LINK} element={<Signup/>}/>
        <Route path={PRIVACY_POLICY_PAGE_LINK} element={<PrivacyPolicy/>}/>
        <Route path={TERMS_OF_SERVICE_PAGE_LINK} element={<TermsOfService/>}/>
      </Route>

      <Route path="/" element={<VerficationLayout/>}>
        <Route path={FORGOT_PASSWORD_PAGE_LINK} element={<ForgotPassword/>}/>
        <Route path={`${EMAIL_VERIFICATION_PAGE_LINK}/:token`} element={<EmailVerification/>}/>
      </Route>
      
      {/* Protected Routes, Where it requires to be logged in before accessing */}
      <Route element={<ProtectedRoutes />}>
        <Route path={DASHBOARD_PAGE_LINK} element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Route>
      
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes