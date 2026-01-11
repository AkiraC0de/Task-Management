import AuthHeader from "../features/Auth/AuthHeader"
import ResetPasswordForm from "../features/Auth/ResetPassword/ResetPasswordForm"

const ResetPassword = () => {
  return (
    <div className="min-w-screen flex justify-center">
      <div className="text-primary-text px-8 py-14 text-center max-w-90 mt-12 flex flex-col items-center md:shadow-lg rounded-lg">
        <AuthHeader
          header="New Password"
          subheader="Ready for a fresh start? Enter your new password below."
        />
        <ResetPasswordForm/>
      </div>
    </div>
  )
}
export default ResetPassword