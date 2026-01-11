import { Navigate, useNavigate, useBlocker } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { HOME_PAGE_LINK } from "../constants/pageLinkConstant";
import VerificationHeader from "../features/Auth/EmailVerification/VerificationHeader";
import VerificationForm from "../features/Auth/EmailVerification/VerificationForm";
import useWarningLeave from "../hooks/useWarningLeave";
import { useState } from "react";
import VerifiedNotice from "../features/Auth/EmailVerification/VerifiedNotice";

const EmailVerification = () => {
  const { isValidatingEmail, user } = useAuth();
  const [ isVerified, setIsVerified] = useState(false);

  // Warn the user before page back or refresh
  useWarningLeave();

  if (!isValidatingEmail) {
    return <Navigate to={HOME_PAGE_LINK} replace />;
  }

  return (
    <div className="min-w-screen flex justify-center">
      {
        !isVerified ? 
        <div className="max-w-95 mt-12 px-8 py-14 md:shadow-lg rounded-lg">
          <VerificationHeader email={user.email}/>
          <VerificationForm setIsVerified={setIsVerified}/>
        </div> 
        : <VerifiedNotice email={user.email}/>
      }
    </div>
  )
}
export default EmailVerification