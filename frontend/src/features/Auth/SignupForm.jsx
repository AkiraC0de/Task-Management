import { useState, useCallback } from "react";
import SignupInputs from "./SignupInputs";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { getErrorMessage, getErrorSource } from "../../utils/errorHandler";
import { validateSignUpForm } from "../../utils/formValidation";
import { SIGNUP_DATA_DEFAULT } from "../../constants/authConstant";
import { signupUser } from "./service";
import { handleChangeObject, onChangeRemoveError } from '../../utils/handler'
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth"
import { EMAIL_VERIFICATION_PAGE_LINK } from "../../constants/pageLinkConstant";

const SignupForm = () => {
  const navigate = useNavigate()
  const { setIsEmailValidating, setUser } = useAuth();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ errors, setErrors] = useState({})
  const [signUpData, setSignUpData] = useState(SIGNUP_DATA_DEFAULT)

  const handleInputsOnChance = (e) => {
    handleChangeObject(e, setSignUpData);
    onChangeRemoveError(e, errors, setErrors);
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setErrors({});

    const formValidation = validateSignUpForm(signUpData);
    if(!formValidation.isValid){
      setErrors(formValidation.errors)
      return;
    }

    setIsLoading(true);
    try {
      const {data} = await signupUser(signUpData);
      
      setSignUpData(SIGNUP_DATA_DEFAULT);
      setIsEmailValidating(true);
      setUser({email: data.data.email});

      navigate(`${EMAIL_VERIFICATION_PAGE_LINK}/${data.data.userId}`)
    } catch (error) {
      const errorAt = getErrorSource(error);
      const message = getErrorMessage(error);

      console.log(error)

      if(errorAt){
        setErrors({ [errorAt] : message });
      } else {
        setErrors({ server : message });
      }
    } finally {
      setIsLoading(false);
    }
  }, [signUpData])

  return (
    <form className="w-full" onSubmit={handleSubmit} noValidate>
      <SignupInputs
        signUpData={signUpData}
        InputOnchangeHandler={handleInputsOnChance}
        errors={errors}
      />
      <PrimaryButton 
        type='submit'
        className='w-full mt-4 flex justify-center items-center'
        disabled={isLoading}
      >
        {isLoading ? <Spinner/> : "Sign Up"}
      </PrimaryButton>
    </form>
  )
}

export default SignupForm