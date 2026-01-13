import { Navigate, useNavigate, useParams } from "react-router-dom";
import { verifyToken } from "../features/Auth/service";
import useAuth from "../hooks/useAuth"
import { HOME_PAGE_LINK } from "../constants/pageLinkConstant";
import VerificationHeader from "../features/Auth/EmailVerification/VerificationHeader";
import VerificationForm from "../features/Auth/EmailVerification/VerificationForm";
import { useState, useEffect } from "react";
import VerifiedNotice from "../features/Auth/EmailVerification/VerifiedNotice";
import Loader from "../components/Loader";
import { getErrorMessage } from "../utils/errorHandler";

const EmailVerification = () => {
  const { user } = useAuth();
  const [ isVerified, setIsVerified] = useState(false);
  const {token} = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateUserToken = async () => {
      try {
        await verifyToken(token);
      } catch (error) {
        const message = getErrorMessage(error);
        navigate(HOME_PAGE_LINK);
        console.error(message);
      } finally {
        setIsLoading(false);
      }
    }

    validateUserToken();
  }, []);

  return (
    <div className="min-w-screen flex justify-center">
      <Loader isLoading={isLoading}>
        {
          !isVerified ? 
          <div className="max-w-95 mt-12 px-8 py-14 md:shadow-lg rounded-lg">
            <VerificationHeader email={user.email}/>
            <VerificationForm setIsVerified={setIsVerified}/>
          </div> 
          : <VerifiedNotice email={user.email}/>
        }
      </Loader>
    </div>
  )
}
export default EmailVerification