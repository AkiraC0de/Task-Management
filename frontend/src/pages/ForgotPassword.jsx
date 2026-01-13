import ForgotPasswordForm from "../features/Auth/ForgotPassword/ForgotPasswordForm"
import ForgotPasswordHeader from "../features/Auth/ForgotPassword/ForgotPasswordHeader";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center">
        <div className="text-primary-text px-8 py-14 text-center max-w-90 mt-12 flex flex-col items-center md:shadow-lg rounded-lg">
          <ForgotPasswordHeader/>
          <ForgotPasswordForm/>
        </div> 
    </div>
  )
}
export default ForgotPassword