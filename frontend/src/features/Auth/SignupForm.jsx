import { useState, useCallback } from "react";
import SignupInputs from "./SignupInputs";
import PrimaryButton from "../../components/PrimaryButton";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from "react-router-dom";
import { getErrorMessage, getErrorSource } from "../../utils/errorHandler";
import LoadingOverlay from "../../components/LoadingOverlay";
import { validateFields } from "../../utils/formValidation";
import { SIGNUP_DATA_DEFAULT } from "../../constants/authConstant";

const SignupForm = () => {
  const navigate = useNavigate();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ errors, setErrors] = useState({})
  const [signUpData, setSignUpData] = useState(SIGNUP_DATA_DEFAULT)

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
      setSignUpData(SIGNUP_DATA_DEFAULT);
      // THIS REQUIRE FUTURE UPDATES TO HANDLE EMAIL VERIFICATION
      
    } catch (error) {
      const errorAt = getErrorSource(error);
      const message = getErrorMessage(error);

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
    <form onSubmit={handleSubmit} novalidate>
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