import ForgotPasswordForm from "../features/Auth/ForgotPassword/ForgotPasswordForm"
import ForgotPasswordHeader from "../features/Auth/ForgotPassword/ForgotPasswordHeader"

const ForgotPassword = () => {
  return (
    <div className="flex justify-center">
      <div className="text-primary-text p-4 text-center max-w-90 mt-10 flex flex-col items-center bg-amber-100">
        <ForgotPasswordHeader/>
        <ForgotPasswordForm/>
      </div>
    </div>
  )
}
export default ForgotPassword