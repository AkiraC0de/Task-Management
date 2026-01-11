import { useState } from "react"
import ForgotPasswordForm from "../features/Auth/ForgotPassword/ForgotPasswordForm"
import ForgotPasswordHeader from "../features/Auth/ForgotPassword/ForgotPasswordHeader"
import EmailSentNotice from "../features/Auth/ForgotPassword/EmailSentNotice";

const ForgotPassword = () => {
  const [isResetPasswordSubmitted, setIsPasswordSubmitted] = useState(true);
  return (
    <div className="flex justify-center">
      { 
        !isResetPasswordSubmitted ?
        <div className="text-primary-text px-8 py-14 text-center max-w-90 mt-12 flex flex-col items-center md:shadow-lg rounded-lg">
          <ForgotPasswordHeader/>
          <ForgotPasswordForm setIsPasswordSubmitted={setIsPasswordSubmitted}/>
        </div> :
        <EmailSentNotice/>
      }
    </div>
  )
}
export default ForgotPassword