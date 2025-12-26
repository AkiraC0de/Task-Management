import { useState, useCallback } from "react";
import SignupInputs from "./SignupInputs";
import PrimaryButton from "../../components/PrimaryButton";
import ForgotPassword from "./ForgotPassword";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../utils/errorHandler";
import { loginUser, signupUser } from "./service";
import LoadingOverlay from "../../components/LoadingOverlay";
import { validateFields } from "../../utils/formValidation";

const SignupForm = () => {
  const navigate = useNavigate();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ errors, setErrors] = useState({})
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ""
  })

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setErrors({});

    const validation = validateFields(signUpData);
    if(!validation.isValid){
      setErrors(validation.errors)
      return;
    } 

    // Validate if the password matched confirmPassword
    if(signUpData.confirmPassword !== signUpData.password){
      setErrors({confirmPassword : "Confirm password does not match."})
      return;
    }

    setIsLoading(true);
    try {
      const {data} = await signupUser(signUpData);
      console.log(data)
      
    } catch (error) {
      const message = getErrorMessage(error);
      setErrors({ server: message });
    } finally {
      setIsLoading(false);
    }
  }, [signUpData])

  return (
    <form onSubmit={handleSubmit}>
      { isLoading && <LoadingOverlay/>}
      
      <SignupInputs
        signUpData={signUpData}
        signUpDataHandler={setSignUpData}
        errors={errors}
      />

      <ForgotPassword/>
      <PrimaryButton 
        type='submit'
        className='my-5'
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Sign Up"}
      </PrimaryButton>
    </form>
  )
}

export default SignupForm