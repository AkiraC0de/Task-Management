import { Link } from "react-router-dom"
import { PRIVACY_POLICY_PAGE_LINK, TERMS_OF_SERVICE_PAGE_LINK } from "../../../constants/pageLinkConstant"

const SignUpAgreement = () => {
  return (
    <p className="text-xs text-primary-text pt-2 text-center">
      <span>By Clicking Sign up, you agree to Gtasks' </span>
      <Link
        className="font-bold cursor-pointer" 
        to={PRIVACY_POLICY_PAGE_LINK}
      > 
         Privacy Policy
      </Link> 
      <span> and  </span>
      <Link 
        className="font-bold cursor-pointer" 
        to={TERMS_OF_SERVICE_PAGE_LINK}
      >
         Terms of Service
      </Link>
    </p>
  )
}
export default SignUpAgreement