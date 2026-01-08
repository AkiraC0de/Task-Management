import { CircleAlert } from "lucide-react"

const ForgotPasswordHeader = () => {
  return (
    <div>
      <CircleAlert size={80} className="text-primary"/>
      <h1 className="text-xl font-semibold my-2">Forgot Password</h1>
      <p className="text-sm">Enter your email and we will send you an email to reset your password.</p>
    </div>
  )
}
export default ForgotPasswordHeader