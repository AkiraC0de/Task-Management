import { useEffect, useState } from "react"
import AuthHeader from "../features/Auth/AuthHeader"
import ResetPasswordForm from "../features/Auth/ResetPassword/ResetPasswordForm"
import { verifyToken } from "../features/Auth/service"
import { useNavigate, useParams } from "react-router-dom"
import { getErrorMessage } from "../utils/errorHandler"
import { HOME_PAGE_LINK } from "../constants/pageLinkConstant"
import Loader from "../components/Loader"
import useWarningLeave from "../hooks/useWarningLeave"
import ResetPasswordNotice from "../features/Auth/ResetPassword/ResetPasswordNotice"
import useAuth from "../hooks/useAuth"

const ResetPassword = () => {
  const {token} = useParams();
  const {user} = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessDone, setIsProcessDone] = useState(false);

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
        { isProcessDone ?
          <ResetPasswordNotice email={user.email}/> :
          <div className="text-primary-text px-8 py-14 text-center max-w-90 mt-12 flex flex-col items-center md:shadow-lg rounded-lg">
            <AuthHeader
              header="New Password"
              subheader="Ready for a fresh start? Enter your new password below."
            />
            <ResetPasswordForm setIsProcessDone={setIsProcessDone}/>
          </div>
        }
      </Loader> 
    </div>
  )
}
export default ResetPassword