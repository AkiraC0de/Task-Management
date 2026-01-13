import { ChevronRight, Verified } from "lucide-react"
import { Link } from "react-router-dom"
import { LOGIN_PAGE_LINK } from "../../../constants/pageLinkConstant"

const ResetPasswordNotice = ({email}) => {
  return (
    <div className="max-w-90 mt-14 px-8 py-14 flex items-center flex-col md:shadow-lg rounded-lg text-center">
      <Verified className="text-primary" size={100}/>
      <h1 className="font-bold text-2xl text-primary mt-1.5">
        New Password
      </h1>

      <p className="text-primary-text my-4 text-center">
        Your password <strong>{email}</strong> has been changed. You may now log in with your new password.
      </p>

      <Link
        to={LOGIN_PAGE_LINK}
        className="flex gap-2 mt-5 text-sm items-center text-primary font-semibold hover:underline transition-all"
      >
        <span>Go to Login</span>
        <ChevronRight size={20} />
      </Link>
    </div>
  )
}
export default ResetPasswordNotice