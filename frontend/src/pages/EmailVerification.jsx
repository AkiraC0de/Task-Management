import { Navigate, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { HOME_PAGE_LINK } from "../constants/pageLinkConstant";
import { useEffect} from "react";
import VerificationHeader from "../features/Auth/VerificationHeader";
import VerificationInputs from "../features/Auth/VerificationInputs";

const useWarningLeave = () => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () =>  window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [])
}

const EmailVerification = () => {
  const navigate = useNavigate();
  const { isValidatingEmail, user } = useAuth();

  // Warn the user before page back or refresh
  useWarningLeave();

  if (!isValidatingEmail) {
    return <Navigate to={HOME_PAGE_LINK} replace />;
  }

  return (
    <main className="min-w-screen flex justify-center">
      <div className="max-w-120 bg-amber-50 mt-14">
        <VerificationHeader email={user.email}/>
        <VerificationInputs/>
      </div>
    </main>
  )
}
export default EmailVerification