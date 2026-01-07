import { Navigate, useNavigate, useBlocker } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { HOME_PAGE_LINK } from "../constants/pageLinkConstant";
import VerificationHeader from "../features/Auth/EmailVerification/VerificationHeader";
import VerificationForm from "../features/Auth/EmailVerification/VerificationForm";
import useWarningLeave from "../hooks/useWarningLeave";

const EmailVerification = () => {
  const { isValidatingEmail, user } = useAuth();

  // Warn the user before page back or refresh
  useWarningLeave();

  if (!isValidatingEmail) {
    return <Navigate to={HOME_PAGE_LINK} replace />;
  }

  return (
    <main className="min-w-screen flex justify-center">
      <div className="max-w-100 p-4 mt-14">
        <VerificationHeader email={user.email}/>
        <VerificationForm/>
      </div>
    </main>
  )
}
export default EmailVerification