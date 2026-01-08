import InputField from "../../../components/InputField"
import PrimaryButton from "../../../components/PrimaryButton"
import { ChevronLeft, Mail } from "lucide-react"
import SecondaryButton from "../../../components/SecondaryButton"
import { Link } from "react-router-dom"
import { LOGIN_PAGE_LINK } from "../../../constants/pageLinkConstant"
import { useState } from "react"

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="mt-8 w-full"
      noValidate
    >
      <InputField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail/>}
        type="email"
        className="w-full mb-6"
      />

      <div>
        <PrimaryButton
          type="submit"
          className="w-full mb-4"
        >
          Submit
        </PrimaryButton>
        <SecondaryButton 
          type="button"
          className="w-full border-secondary-text text-secondary-text"
        >
          <Link 
            to={LOGIN_PAGE_LINK}
            className="flex items-center justify-center text-sm"
          >
            <ChevronLeft size={20}/>
            <span>Go back to Log in</span>
          </Link>
        </SecondaryButton>
      </div>
    </form>
  )
}
export default ForgotPasswordForm