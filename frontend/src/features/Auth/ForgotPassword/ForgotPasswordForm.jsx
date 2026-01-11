import InputField from "../../../components/InputField"
import PrimaryButton from "../../../components/PrimaryButton"
import { ChevronLeft, Mail } from "lucide-react"
import SecondaryButton from "../../../components/SecondaryButton"
import { Link } from "react-router-dom"
import { LOGIN_PAGE_LINK } from "../../../constants/pageLinkConstant"
import { useState } from "react"
import { requestForgotPassword } from "../service"
import Spinner from "../../../components/Spinner"
import { trimObject, validateForgotPassword } from "../../../utils/formValidation"
import { getErrorMessage } from "../../../utils/errorHandler"
import useAuth from "../../../hooks/useAuth"

const ForgotPasswordForm = ({setIsPasswordSubmitted}) => {
  const {setUser} = useAuth();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    if(error) setError('');
    setEmail(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim();

    const validation = validateForgotPassword(cleanEmail);
    if(!validation.isValid){
      setError(validation.message);
      return
    }

    setIsLoading(true);
    try {
      const {data} = await requestForgotPassword({email: cleanEmail});

      setUser({email: cleanEmail});
      setIsPasswordSubmitted(true);
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    } finally{
      setIsLoading(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="mt-8 w-full"
      noValidate
    >
      <InputField
        value={email}
        onChange={handleOnChange}
        icon={<Mail/>}
        type="email"
        className="w-full mb-2"
        placeholder="john@example.com"
      />

      {error && <p className="text-red-400 text-xs pt-2 font-medium">{error}</p>}

      <div className="mt-6">
        <PrimaryButton
          type="submit"
          className="w-full mb-4 flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? <Spinner/> : "Submit"}
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