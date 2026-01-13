import { useEffect, useState } from "react"
import AuthHeader from "../features/Auth/AuthHeader"
import ResetPasswordForm from "../features/Auth/ResetPassword/ResetPasswordForm"
import { verifyToken } from "../features/Auth/service"
import { useNavigate, useParams } from "react-router-dom"
import { getErrorMessage } from "../utils/errorHandler"
import { LOGIN_PAGE_LINK } from "../constants/pageLinkConstant"
import Loader from "../components/Loader"

const ResetPassword = () => {
  const {token} = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateUserToken = async () => {
      try {
        await verifyToken(token);
      } catch (error) {
        const message = getErrorMessage(error);
        navigate(LOGIN_PAGE_LINK);
        console.log(message);
      } finally {
        setIsLoading(false);
      }
    }

    validateUserToken();
  });

  return (
    <div className="min-w-screen flex justify-center">
      <Loader isLoading={isLoading}>
        <div className="text-primary-text px-8 py-14 text-center max-w-90 mt-12 flex flex-col items-center md:shadow-lg rounded-lg">
          <AuthHeader
            header="New Password"
            subheader="Ready for a fresh start? Enter your new password below."
          />
          <ResetPasswordForm/>
        </div>
      </Loader> 
    </div>
  )
}
export default ResetPassword