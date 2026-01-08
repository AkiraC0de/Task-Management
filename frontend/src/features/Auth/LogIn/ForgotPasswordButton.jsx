import { Link } from "react-router-dom"
import { FORGOT_PASSWORD_PAGE_LINK } from "../../../constants/pageLinkConstant"

const ForgotPasswordButton = () => {
  return (
    <button
      type="button" 
      className='text-xs text-primary-text font-medium cursor-pointer'>
        <Link to={FORGOT_PASSWORD_PAGE_LINK}>
          Forgot Passoword?
        </Link>
    </button>
  )
}

export default ForgotPasswordButton