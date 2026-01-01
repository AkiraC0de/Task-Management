import { Navigate, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { HOME_PAGE_LINK } from "../constants/pageLinkConstant";
import { useEffect} from "react";
import VerificationHeader from "../features/Auth/VerificationHeader";
import VerificationForm from "../features/Auth/VerificationForm";

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
      <div className="max-w-100 p-4 mt-14">
        <VerificationHeader email={user.email}/>
        <VerificationForm/>
      </div>
    </main>
  )
}
export default EmailVerification